import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">Voice Recorder</h1>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        Record your voice with high quality and access your recordings anytime.
      </p>
      <Button
        size="lg"
        className="flex items-center gap-2"
        onClick={() => navigate("/record")}
      >
        <Mic className="w-5 h-5" />
        Start Recording
      </Button>
    </div>
  );
};

export default Home;