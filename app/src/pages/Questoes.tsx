import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, Zap, Check, X as XIcon, MessageCircle } from 'lucide-react';
import { enemQuestions } from '../data/enem-2025/data-enem';
import { playSound } from '../utils/audio';

export default function Questoes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [streak, setStreak] = useState(0);
  const [xp, setXp] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  const question = enemQuestions[currentIndex];
  const progress = ((currentIndex) / enemQuestions.length) * 100;

  const handleSelect = (id: string) => {
    if (status !== 'idle') return;
    playSound('click');
    setSelectedOption(id);
  };

  const handleCheck = () => {
    if (!selectedOption || status !== 'idle') return;

    const isCorrect = selectedOption.endsWith(question.correctAnswer.toLowerCase());
    
    if (isCorrect) {
      setStatus('correct');
      playSound('correct');
      setStreak(s => s + 1);
      setXp(x => x + 10);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#58CC02', '#ffffff']
      });
    } else {
      setStatus('incorrect');
      playSound('incorrect');
      setStreak(0);
    }
  };

  const handleContinue = () => {
    playSound('click');
    if (currentIndex < enemQuestions.length - 1) {
      setStatus('idle');
      setSelectedOption(null);
      setCurrentIndex(i => i + 1);
    } else {
      setShowCompletion(true);
      playSound('streak');
    }
  };

  if (showCompletion) {
    return (
      <div className="min-h-screen w-full bg-[#111111] text-white flex flex-col items-center justify-center p-6 font-['Inter']">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.5 }}
          className="flex flex-col items-center gap-8 max-w-md w-full"
        >
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-b from-[#58CC02] to-[#46A302] rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_40px_rgba(88,204,2,0.4)]">
              <div className="w-12 h-12 bg-white rounded-lg -rotate-45 flex items-center justify-center">
                <Check className="text-[#58CC02] w-8 h-8 stroke-[3]" />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-center mt-4">Lesson<br/>complete!</h1>
          
          <div className="flex gap-4 w-full mt-4">
            <div className="flex-1 bg-[#1c1c1c] rounded-2xl p-4 border border-[#333] flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-2xl font-bold text-[#58CC02]">
                <Zap fill="#58CC02" className="w-6 h-6" /> {xp}
              </div>
              <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">TOTAL XP</span>
            </div>
            <div className="flex-1 bg-[#1c1c1c] rounded-2xl p-4 border border-[#333] flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-2xl font-bold text-blue-400">
                {enemQuestions.length}/{enemQuestions.length}
              </div>
              <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">SCORE</span>
            </div>
          </div>

          <button 
            onClick={() => window.location.hash = ''}
            className="w-full mt-8 bg-white text-black font-bold text-lg py-4 rounded-2xl hover:bg-gray-200 transition-colors active:scale-95"
          >
            Continue
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#111111] text-white flex flex-col font-['Inter'] overflow-hidden">
      {/* Header */}
      <header className="w-full max-w-4xl mx-auto px-6 py-8 flex items-center gap-6">
        <button onClick={() => window.location.hash = ''} className="text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex-1 h-4 bg-[#2a2a2a] rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#58CC02] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="absolute top-1 left-2 right-2 h-1 bg-white/20 rounded-full" />
          </motion.div>
        </div>

        <div className="flex items-center gap-1.5 text-[#ffc800] font-bold">
          <Zap fill="#ffc800" className="w-5 h-5" />
          <span>{streak}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-6 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex-1 flex flex-col py-4"
          >
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold leading-relaxed text-gray-100 whitespace-pre-wrap">
                {question.text}
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {question.options.map((opt) => {
                const isSelected = selectedOption === opt.id;
                let stateClass = "border-[#333333] hover:border-gray-400 bg-[#1a1a1a]";
                
                if (isSelected) {
                  if (status === 'idle') {
                    stateClass = "border-[#3b82f6] bg-[#3b82f6]/10 shadow-[0_0_0_1px_#3b82f6]";
                  } else if (status === 'correct') {
                    stateClass = isSelected ? "border-[#58CC02] bg-[#58CC02]/10 shadow-[0_0_0_1px_#58CC02]" : "border-[#333333] opacity-50";
                  } else if (status === 'incorrect') {
                    stateClass = isSelected ? "border-[#ff4b4b] bg-[#ff4b4b]/10 shadow-[0_0_0_1px_#ff4b4b]" : "border-[#333333] opacity-50";
                  }
                } else if (status !== 'idle') {
                  stateClass = "border-[#333333] opacity-50";
                  // Highlight correct answer if user got it wrong
                  if (status === 'incorrect' && opt.id.endsWith(question.correctAnswer.toLowerCase())) {
                    stateClass = "border-[#58CC02] bg-[#58CC02]/10 opacity-100";
                  }
                }

                return (
                  <motion.button
                    key={opt.id}
                    whileHover={status === 'idle' ? { scale: 1.01 } : {}}
                    whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                    onClick={() => handleSelect(opt.id)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 flex items-start gap-4 ${stateClass}`}
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm
                      ${isSelected ? (status === 'correct' ? 'bg-[#58CC02] text-white' : status === 'incorrect' ? 'bg-[#ff4b4b] text-white' : 'bg-[#3b82f6] text-white') : 'bg-[#333] text-gray-300'}
                    `}>
                      {opt.letter}
                    </div>
                    <span className="text-[15px] md:text-base text-gray-200 pt-1 leading-snug">
                      {opt.text}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Area */}
      <div className="relative mt-auto">
        {/* Placeholder to keep layout stable */}
        <div className="h-32 md:h-40" />

        <AnimatePresence>
          {status !== 'idle' ? (
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className={`fixed bottom-0 left-0 w-full border-t-2 ${
                status === 'correct' 
                  ? 'bg-[#d7ffb8] border-[#58CC02] text-[#58CC02]' 
                  : 'bg-[#ffdfe0] border-[#ea2b2b] text-[#ea2b2b]'
              }`}
            >
              <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-white`}>
                    {status === 'correct' ? <Check className="w-8 h-8 stroke-[3]" /> : <XIcon className="w-8 h-8 stroke-[3]" />}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold">
                      {status === 'correct' ? 'Excelente!' : 'Incorreto.'}
                    </h3>
                    <p className={`font-medium ${status === 'correct' ? 'text-[#46A302]' : 'text-[#c62323]'}`}>
                      {status === 'correct' ? 'Você acertou em cheio.' : `A resposta correta é a letra ${question.correctAnswer}.`}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <button className={`w-12 h-12 rounded-xl flex items-center justify-center bg-transparent border-2 ${
                    status === 'correct' ? 'border-[#58CC02] text-[#58CC02]' : 'border-[#ea2b2b] text-[#ea2b2b]'
                  } hover:bg-black/5 transition-colors`}>
                    <MessageCircle className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleContinue}
                    className={`flex-1 sm:flex-none sm:min-w-[150px] py-3.5 px-6 rounded-xl font-bold text-white text-lg transition-transform active:scale-95 ${
                      status === 'correct' ? 'bg-[#58CC02] hover:bg-[#46A302]' : 'bg-[#ea2b2b] hover:bg-[#c62323]'
                    }`}
                  >
                    Continuar
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="fixed bottom-0 left-0 w-full bg-[#111111] border-t border-[#333333]">
              <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
                <button
                  onClick={handleCheck}
                  disabled={!selectedOption}
                  className={`w-full sm:w-auto sm:min-w-[180px] sm:ml-auto py-3.5 px-8 rounded-xl font-bold text-lg transition-all ${
                    selectedOption 
                      ? 'bg-[#58CC02] hover:bg-[#46A302] text-white active:scale-95 shadow-[0_4px_0_#46A302]' 
                      : 'bg-[#333333] text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Verificar
                </button>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
