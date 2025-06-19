import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface Word {
  _id: number;
  letter: string;
  word: string;
  category: string;
  youtube_link: string;
}

interface WordGridProps {
  letter?: string;
  category?: string;
  onBackToAlphabets?: () => void;
  onBackToCategory?: () => void;
}

const WordGrid: React.FC<WordGridProps> = ({ letter, category, onBackToAlphabets, onBackToCategory }) => {
  const [words, setWords] = useState<Word[]>([]);
  const [filteredWords, setFilteredWords] = useState<Word[]>([]);
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const wordsPerPage = 15;

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        let filteredData = data;
        if (letter) {
          filteredData = data.filter((word: Word) => word.letter.toLowerCase() === letter.toLowerCase());
        } else if (category) {
          filteredData = data.filter((word: Word) => word.category.toLowerCase() === category.toLowerCase());
        }
        setWords(filteredData);
        setFilteredWords(filteredData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [letter, category]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const filtered = words.filter(word => word.word.toLowerCase().includes(searchValue));
    setFilteredWords(filtered);
    setCurrentPage(1); // Reset to first page on search
  };

  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;
  const currentWords = filteredWords.slice(indexOfFirstWord, indexOfLastWord);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredWords.length / wordsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mt-8 text-center">
        <div className="relative w-full max-w-lg mx-auto">
          <input
            type="text"
            className="w-full text-lg px-6 py-3 border rounded-lg border-accent text-secondary placeholder-secondary bg-dark-lighter"
            placeholder="Search words..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <FontAwesomeIcon icon={faSearch} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {currentWords.map(word => (
          <div
            key={word._id}
            className="text-lg px-6 py-3 cursor-pointer"
            onClick={() => setSelectedWord(word)}
          >
            {word.word}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-8">
        <button
          className="btn-secondary text-lg px-6 py-3 gradient-button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="btn-secondary text-lg px-6 py-3 gradient-button"
          onClick={handleNextPage}
          disabled={currentPage >= Math.ceil(filteredWords.length / wordsPerPage)}
        >
          Next
        </button>
      </div>
      {selectedWord && (
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{selectedWord.word}</h2>
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src={selectedWord.youtube_link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordGrid;
