// // src/components/SpeechTextInput/SpeechTextInput.tsx
// import React, { useRef, useState, useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { useStore } from '../../store';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// export const SpeechTextInput = () => {
//     const textFromInput = useRef<HTMLInputElement>(null);
//     const {
//         processedText,
//         playTextAnimation,
//         clearProcessedText,
//         setProcessedText,
//         animationRef
//     } = useStore(state => ({
//         processedText: state.processedText,
//         playTextAnimation: state.playTextAnimation,
//         clearProcessedText: state.clearProcessedText,
//         setProcessedText: state.setProcessedText,
//         animationRef: state.animationRef
//     }));

//     const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
//     const [isAnimating, setIsAnimating] = useState(false);
//     const [animationQueue, setAnimationQueue] = useState<string[]>([]);
//     const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
//     const [selectedLanguage, setSelectedLanguage] = useState<'en-US' | 'hi-IN' | 'gu-IN'>('en-US');
//     const [localTranscript, setLocalTranscript] = useState('');

//     const translateToEnglish = async (text: string, lang: string): Promise<string> => {
//         if (lang === 'en-US') return text;

//         const prompt = `
// Translate the following ${lang === 'hi-IN' ? 'Hindi' : 'Gujarati'} text into English.
// Text: "${text}"
// Respond ONLY with the English translation. Do not add explanations or extra information.
//         `.trim();

//         try {
//             const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
//             const result = await model.generateContent(prompt);
//             return result.response.text().trim();
//         } catch (err) {
//             console.error('Translation error:', err);
//             return text;
//         }
//     };

//     useEffect(() => {
//         if (!animationRef?.current || animationQueue.length === 0) return;

//         const checkAnimationStatus = () => {
//             if (!animationRef.current.pending) {
//                 if (currentAnimationIndex < animationQueue.length - 1) {
//                     setCurrentAnimationIndex(currentAnimationIndex + 1);
//                 } else {
//                     setAnimationQueue([]);
//                     setIsAnimating(false);
//                 }
//             } else {
//                 requestAnimationFrame(checkAnimationStatus);
//             }
//         };

//         const timer = requestAnimationFrame(checkAnimationStatus);
//         return () => cancelAnimationFrame(timer);
//     }, [animationQueue, currentAnimationIndex, animationRef]);

//     useEffect(() => {
//         if (animationQueue.length > 0 && currentAnimationIndex < animationQueue.length) {
//             setIsAnimating(true);
//             playTextAnimation(animationQueue[currentAnimationIndex]);
//         }
//     }, [animationQueue, currentAnimationIndex, playTextAnimation]);

//     const startListening = () => {
//         SpeechRecognition.startListening({ continuous: true, language: selectedLanguage });
//     };

//     const stopListening = () => SpeechRecognition.stopListening();

//     const handleStartAnimation = async (text: string) => {
//         if (!text || isAnimating) return;

//         let processed = text;
//         if (selectedLanguage !== 'en-US') {
//             processed = await translateToEnglish(text, selectedLanguage);
//         }

//         setLocalTranscript(processed);
//         setProcessedText(processed); // ✅ Update processed text with spaces

//         const letters = processed.toUpperCase().split('').filter(c => /^[A-Z]$/.test(c));
//         if (letters.length > 0) {
//             setAnimationQueue(letters);
//             setCurrentAnimationIndex(0);
//             clearProcessedText(); // optional: remove if you want to keep text while animating
//         }
//     };

//     const clearAll = () => {
//         resetTranscript();
//         clearProcessedText();
//         setLocalTranscript('');
//     };

//     return (
//         <div className="space-y-4">
//             {/* Processed Text + Language Dropdown */}
//             <div className="flex items-center justify-between gap-4">
//                 <div className="w-full">
//                     <label className="text-white font-medium">Processed Text</label>
//                     <input 
//                         type="text" 
//                         value={processedText} 
//                         readOnly
//                         className="w-full bg-gray-800 text-white p-2 rounded border border-accent/30"
//                     />
//                 </div>
//                 <div>
//                     <label className="text-white font-medium">Language</label>
//                     <select
//                         value={selectedLanguage}
//                         onChange={(e) => setSelectedLanguage(e.target.value as any)}
//                         className="ml-2 p-2 rounded bg-gray-800 text-white border border-accent/30"
//                     >
//                         <option value="en-US">En</option>
//                         <option value="hi-IN">Hi</option>
//                         <option value="gu-IN">Gu</option>
//                     </select>
//                 </div>
//             </div>

//             {/* Speech Recognition */}
//             <div className="space-y-2">
//                 <label className="text-white font-medium">
//                     Speech Recognition: {listening ? 'on' : 'off'}
//                 </label>
//                 <div className="flex gap-2">
//                     <button 
//                         className="btn-secondary py-2 px-4 flex-1" 
//                         onClick={startListening}
//                         disabled={isAnimating}
//                     >
//                         Mic On <i className="fa fa-microphone ml-2"/>
//                     </button>
//                     <button 
//                         className="btn-secondary py-2 px-4 flex-1" 
//                         onClick={stopListening}
//                         disabled={isAnimating}
//                     >
//                         Mic Off <i className="fa fa-microphone-slash ml-2"/>
//                     </button>
//                     <button 
//                         className="btn-secondary py-2 px-4 flex-1" 
//                         onClick={clearAll}
//                         disabled={isAnimating}
//                     >
//                         Clear
//                     </button>
//                 </div>
//                 <input 
//                     type="text" 
//                     value={transcript} 
//                     placeholder="Speech input..." 
//                     className="w-full bg-dark-lighter text-white p-2 rounded border border-accent/30"
//                     readOnly
//                 />
//                 <button 
//                     onClick={() => handleStartAnimation(transcript)} 
//                     className="btn-primary w-full py-2"
//                     disabled={isAnimating || !transcript}
//                 >
//                     {isAnimating ? `Animating ${animationQueue[currentAnimationIndex]}...` : 'Start Animation from Speech'}
//                 </button>
//             </div>

//             {/* Text Input */}
//             <div className="space-y-2">
//                 <label className="text-white font-medium">Text Input</label>
//                 <input 
//                     ref={textFromInput} 
//                     type="text"
//                     placeholder="Text input..." 
//                     className="w-full bg-dark-lighter text-white p-2 rounded border border-accent/30"
//                 />
//                 <button 
//                     onClick={() => handleStartAnimation(textFromInput.current?.value || '')} 
//                     className="btn-primary w-full py-2"
//                     disabled={isAnimating || !textFromInput.current?.value}
//                 >
//                     {isAnimating ? `Animating ${animationQueue[currentAnimationIndex]}...` : 'Start Animation from Text'}
//                 </button>
//             </div>
//         </div>
//     );
// };

import React, { useRef, useState, useEffect, useCallback } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useStore } from '../../store';

interface Props {
  onStartAnimation: (char: string) => void;
}

export const SpeechTextInput: React.FC<Props> = ({ onStartAnimation }) => {
  const textFromInput = useRef<HTMLInputElement>(null);
  const {
    setProcessedText,
    clearProcessedText,
  } = useStore();

  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationQueue, setAnimationQueue] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState<'en-US' | 'hi-IN' | 'gu-IN'>('en-US');

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  const translateToEnglish = async (text: string, lang: string): Promise<string> => {
    if (lang === 'en-US') return text;

    const prompt = `
Translate the following ${lang === 'hi-IN' ? 'Hindi' : 'Gujarati'} text into English.
Text: "${text}"
Respond ONLY with the English translation. Do not add explanations or extra information.`.trim();

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
      const result = await model.generateContent(prompt);
      return result.response.text().trim();
    } catch (err) {
      console.error('Translation error:', err);
      return text;
    }
  };

  const animateNext = useCallback(() => {
    if (currentIndex < animationQueue.length) {
      const char = animationQueue[currentIndex];
      onStartAnimation(char);
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsAnimating(false);
      setAnimationQueue([]);
      setCurrentIndex(0);
    }
  }, [animationQueue, currentIndex, onStartAnimation]);

  useEffect(() => {
    if (isAnimating && currentIndex < animationQueue.length) {
      const timer = setTimeout(() => {
        animateNext();
      }, 1000); // 1s delay between letters
      return () => clearTimeout(timer);
    }
  }, [isAnimating, currentIndex, animateNext, animationQueue.length]);

  const handleStartAnimation = async (text: string) => {
    if (!text || isAnimating) return;

    let finalText = text;
    if (selectedLanguage !== 'en-US') {
      finalText = await translateToEnglish(text, selectedLanguage);
    }

    const letters = finalText.toUpperCase().split('').filter((c) => /^[A-Z]$/.test(c));
    setProcessedText(finalText);
    setAnimationQueue(letters);
    setCurrentIndex(0);
    setIsAnimating(true);
    clearProcessedText();
  };

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: selectedLanguage });
  const stopListening = () => SpeechRecognition.stopListening();
  const clearAll = () => {
    resetTranscript();
    clearProcessedText();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="w-full">
          <label className="text-white font-medium">Processed Text</label>
          <input
            type="text"
            readOnly
            value={transcript}
            className="w-full bg-gray-800 text-white p-2 rounded border border-accent/30"
          />
        </div>
        <div>
          <label className="text-white font-medium">Language</label>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value as any)}
            className="ml-2 p-2 rounded bg-gray-800 text-white border border-accent/30"
          >
            <option value="en-US">En</option>
            <option value="hi-IN">Hi</option>
            <option value="gu-IN">Gu</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex gap-2">
          <button onClick={startListening} disabled={isAnimating} className="btn-secondary flex-1">Mic On</button>
          <button onClick={stopListening} disabled={isAnimating} className="btn-secondary flex-1">Mic Off</button>
          <button onClick={clearAll} disabled={isAnimating} className="btn-secondary flex-1">Clear</button>
        </div>
        <button
          className="btn-primary w-full py-2"
          onClick={() => handleStartAnimation(transcript)}
          disabled={isAnimating || !transcript}
        >
          {isAnimating ? `Animating ${animationQueue[currentIndex]}...` : 'Start Animation from Speech'}
        </button>
      </div>

      <div className="space-y-2">
        <label className="text-white font-medium">Text Input</label>
        <input
          ref={textFromInput}
          type="text"
          placeholder="Enter text..."
          className="w-full bg-dark-lighter text-white p-2 rounded border border-accent/30"
        />
        <button
          onClick={() => handleStartAnimation(textFromInput.current?.value || '')}
          className="btn-primary w-full py-2"
          disabled={isAnimating || !textFromInput.current?.value}
        >
          {isAnimating ? `Animating ${animationQueue[currentIndex]}...` : 'Start Animation from Text'}
        </button>
      </div>
    </div>
  );
};
