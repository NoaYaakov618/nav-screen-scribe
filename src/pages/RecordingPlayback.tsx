import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const RecordingPlayback = () => {
  const location = useLocation();
  const recordingId = location.state?.recordingId;

  const handlePlay = () => {
    // TODO: Implement actual audio playback
    console.log("Playing recording:", recordingId);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <h1 className="text-3xl font-bold mb-8">Your Recording</h1>
      <div className="w-full max-w-md space-y-4">
        <Button 
          onClick={handlePlay}
          className="w-full"
          size="lg"
        >
          Play Recording
        </Button>
      </div>
    </div>
  );
};

export default RecordingPlayback;