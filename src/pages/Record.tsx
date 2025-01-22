import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Pause, Square, Mic } from "lucide-react";
import { toast } from "sonner";

const Record = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let interval: number;
    if (isRecording && !isPaused) {
      interval = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording, isPaused]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const startRecording = () => {
    setIsRecording(true);
    toast.success("Recording started");
  };

  const stopRecording = () => {
    setIsRecording(false);
    setIsPaused(false);
    setDuration(0);
    toast.success("Recording saved");
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    toast(isPaused ? "Recording resumed" : "Recording paused");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <div className="relative inline-block mb-4">
          {isRecording && (
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center relative recording-pulse">
              <Mic className="w-8 h-8 text-white" />
            </div>
          )}
          {!isRecording && (
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
              <Mic className="w-8 h-8 text-muted-foreground" />
            </div>
          )}
        </div>
        <div className="text-4xl font-mono mb-2">{formatTime(duration)}</div>
        <p className="text-muted-foreground">
          {isRecording ? (isPaused ? "Paused" : "Recording...") : "Ready to record"}
        </p>
      </div>

      <div className="flex gap-4">
        {!isRecording && (
          <Button size="lg" onClick={startRecording}>
            Start Recording
          </Button>
        )}
        {isRecording && (
          <>
            <Button size="lg" variant="outline" onClick={togglePause}>
              {isPaused ? "Resume" : "Pause"}
              {isPaused ? <Mic className="ml-2 h-4 w-4" /> : <Pause className="ml-2 h-4 w-4" />}
            </Button>
            <Button size="lg" variant="destructive" onClick={stopRecording}>
              Stop
              <Square className="ml-2 h-4 w-4" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Record;