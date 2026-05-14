import { useBingoGame } from './hooks/useBingoGame';
import { useTheme } from './hooks/useTheme';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { BingoModal } from './components/BingoModal';

function App() {
  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  const { theme, toggleTheme } = useTheme();

  if (gameState === 'start') {
    return (
      <div className="relative">
        <StartScreen onStart={startGame} />
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-110 transition-all duration-200"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <GameScreen
        board={board}
        winningSquareIds={winningSquareIds}
        hasBingo={gameState === 'bingo'}
        onSquareClick={handleSquareClick}
        onReset={resetGame}
      />
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-110 transition-all duration-200"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      {showBingoModal && (
        <BingoModal onDismiss={dismissModal} />
      )}
    </div>
  );
}

export default App;
