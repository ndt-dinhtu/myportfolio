import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Ghost, Home, RefreshCcw, Rocket } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Game Refs
  const playerRef = useRef(null);
  const obstacleRef = useRef(null);
  const gameBoxRef = useRef(null);

  const jump = useCallback(() => {
    if (
      playerRef.current &&
      !playerRef.current.classList.contains("animate-jump")
    ) {
      playerRef.current.classList.add("animate-jump");
      setTimeout(() => {
        playerRef.current?.classList.remove("animate-jump");
      }, 500);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        if (!isPlaying) setIsPlaying(true);
        jump();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, jump]);

  useEffect(() => {
    let checkDead;
    if (isPlaying && !gameOver) {
      checkDead = setInterval(() => {
        const player = playerRef.current;
        const obstacle = obstacleRef.current;
        if (!player || !obstacle) return;

        const playerTop = parseInt(
          window.getComputedStyle(player).getPropertyValue("top"),
        );
        const obstacleLeft = parseInt(
          window.getComputedStyle(obstacle).getPropertyValue("left"),
        );

        // Logic va chạm (Hitbox)
        if (obstacleLeft < 50 && obstacleLeft > 0 && playerTop >= 140) {
          setGameOver(true);
          setIsPlaying(false);
        } else {
          setScore((prev) => prev + 1);
        }
      }, 10);
    }
    return () => clearInterval(checkDead);
  }, [isPlaying, gameOver]);

  const restartGame = () => {
    setGameOver(false);
    setScore(0);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Header Info */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <h1 className="text-9xl font-black text-slate-200 dark:text-slate-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
          404
        </h1>
        <div className="relative z-10">
          <Ghost size={64} className="mx-auto text-violet-600 animate-bounce" />
          <h2 className="text-3xl font-bold dark:text-white mt-4">
            Trang này không tồn tại!
          </h2>
          <p className="text-slate-500 mt-2 italic">
            Nhưng bạn có thể giải trí một chút...
          </p>
        </div>
      </motion.div>

      {/* Game Area */}
      <div
        ref={gameBoxRef}
        className="relative w-full max-w-2xl h-64 bg-white dark:bg-slate-900 rounded-3xl border-4 border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl"
        onClick={isPlaying ? jump : restartGame}
      >
        {!isPlaying && !gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-sm z-20 text-white">
            <p className="text-xl font-bold mb-4">
              Nhấn SPACE hoặc CLICK để bắt đầu
            </p>
            <Rocket className="animate-pulse" />
          </div>
        )}

        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-500/20 backdrop-blur-md z-20 text-center p-4">
            <h3 className="text-4xl font-black text-red-600 drop-shadow-md">
              GAME OVER
            </h3>
            <p className="text-slate-800 dark:text-white font-bold mt-2 text-2xl">
              Score: {Math.floor(score / 10)}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                restartGame();
              }}
              className="mt-4 flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-full hover:bg-black transition-all"
            >
              <RefreshCcw size={18} /> Thử lại
            </button>
          </div>
        )}

        {/* Score Display */}
        <div className="absolute top-4 right-6 text-2xl font-black text-slate-400 dark:text-slate-600">
          {Math.floor(score / 10)}
        </div>

        {/* Player (The Cat/Ninja) */}
        <div
          ref={playerRef}
          className="absolute left-10 bottom-4 w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg z-10 transition-all duration-75"
          style={{ top: "200px" }} // Default position
        >
          🐱
        </div>

        {/* Obstacle (Meteor) */}
        {isPlaying && (
          <div
            ref={obstacleRef}
            className="absolute bottom-4 right-[-50px] w-10 h-10 bg-slate-800 dark:bg-slate-200 rounded-lg flex items-center justify-center animate-block"
          >
            🔥
          </div>
        )}

        {/* Ground */}
        <div className="absolute bottom-0 w-full h-4 bg-slate-200 dark:bg-slate-800"></div>
      </div>

      {/* Footer Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 flex gap-4"
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-8 py-3 bg-violet-600 text-white font-bold rounded-2xl hover:bg-violet-700 transition-all shadow-xl shadow-violet-500/20"
        >
          <Home size={20} /> Quay về trang chủ
        </button>
      </motion.div>

      {/* Custom Styles for Game Animation */}
      <style>{`
        .animate-jump {
          animation: jump 0.5s linear;
        }
        @keyframes jump {
          0% { top: 200px; }
          30% { top: 100px; }
          70% { top: 100px; }
          100% { top: 200px; }
        }
        .animate-block {
          animation: block 1.5s infinite linear;
        }
        @keyframes block {
          0% { left: 100%; }
          100% { left: -50px; }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
