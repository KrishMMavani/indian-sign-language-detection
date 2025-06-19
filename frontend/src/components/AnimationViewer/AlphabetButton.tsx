interface AlphabetButtonProps {
  letter: string;
  onClick: () => void;
}

export const AlphabetButton = ({ letter, onClick }: AlphabetButtonProps) => (
  <button
    className="btn-secondary w-full py-3 flex items-center justify-center hover:bg-accent/20 transition-colors duration-300"
    onClick={onClick}
    aria-label={`Show ${letter} in sign language`}
  >
    <span className="text-xl font-bold text-accent">{letter}</span>
  </button>
);