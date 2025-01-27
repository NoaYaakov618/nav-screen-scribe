import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import SoundVisualizer from "@/components/SoundVisualizer";

const Record = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Start recording immediately when component mounts
    startRecording();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsRecording(false);
    setShowTimer(false);
    setTimer(0);
  };

  const handleSoundThreshold = () => {
    if (!showTimer) {
      setShowTimer(true);
      // Start timer when sound threshold is exceeded
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      {showTimer && (
        <div className="text-4xl font-bold mb-8">{formatTime(timer)}</div>
      )}
      
      {isRecording && !showTimer && (
        <div className="mb-8 w-full max-w-md">
          <SoundVisualizer onSoundThreshold={handleSoundThreshold} />
        </div>
      )}
      
      <div className="space-x-4">
        {isRecording ? (
          <Button
            variant="destructive"
            size="lg"
            onClick={stopRecording}
            className="rounded-full px-8"
          >
            Stop
          </Button>
        ) : (
          <Button
            variant="secondary"
            size="lg"
            onClick={startRecording}
            className="rounded-full px-8"
          >
            Start Recording
          </Button>
        )}
      </div>
    </div>
  );
};

export default Record;