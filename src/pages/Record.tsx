import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Record = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startRecording();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

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
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="text-4xl font-bold mb-8">{formatTime(timer)}</div>
      <div className="space-x-4">
        {!isRecording ? (
          <Button
            variant="destructive"
            size="lg"
            onClick={startRecording}
            className="rounded-full px-8"
          >
            Start Recording
          </Button>
        ) : (
          <Button
            variant="secondary"
            size="lg"
            onClick={stopRecording}
            className="rounded-full px-8"
          >
            Stop
          </Button>
        )}
      </div>
    </div>
  );
};

export default Record;