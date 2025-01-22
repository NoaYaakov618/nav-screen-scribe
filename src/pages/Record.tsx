import { useState, useRef } from "react";

const Record = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<NodeJS.Timer | null>(null);

  const startRecording = () => {
    setIsRecording(true);
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopRecording = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsRecording(false);
    setTimer(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="text-4xl font-bold mb-8">{formatTime(timer)}</div>
      <div className="space-x-4">
        {!isRecording ? (
          <button
            onClick={startRecording}
            className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors"
          >
            Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="bg-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-colors"
          >
            Stop Recording
          </button>
        )}
      </div>
    </div>
  );
};

export default Record;