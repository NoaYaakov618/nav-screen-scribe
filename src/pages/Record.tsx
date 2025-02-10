
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import SoundVisualizer from "@/components/SoundVisualizer";
import { useNavigate } from "react-router-dom";

const Record = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

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
  };

  const stopRecording = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    // Show notification toast with extended duration (3 seconds)
    toast({
      title: "Recording saved",
      description: "Your recording has been collected and saved successfully.",
      duration: 3000,
    });

    // Generate a temporary recording ID (in a real app, this would come from your backend)
    const tempRecordingId = Date.now().toString();

    // Delay the navigation to match the toast duration
    setTimeout(() => {
      setIsRecording(false);
      setShowTimer(false);
      setTimer(0);
      // Navigate to the playback page with the recording ID
      navigate('/recording-playback', { state: { recordingId: tempRecordingId } });
    }, 3000);
  };

  const handleSoundThreshold = () => {
    if (!showTimer) {
      setShowTimer(true);
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
      <h1 className="text-3xl font-bold mb-8">
        {showTimer ? "Violence Detection, Recording Started" : "We are here for you!"}
      </h1>
      
      {showTimer && (
        <div className="text-4xl font-bold mb-8">{formatTime(timer)}</div>
      )}
      
      {isRecording && !showTimer && (
        <div className="mb-8 w-full max-w-md">
          <SoundVisualizer onSoundThreshold={handleSoundThreshold} />
          <p className="text-center text-muted-foreground mt-4">
            Violence voice detection
          </p>
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
