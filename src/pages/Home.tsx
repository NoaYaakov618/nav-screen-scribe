import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center">
        <img 
          src="/lovable-uploads/a16bfa8c-0252-4a65-bc7c-6981fcc0bb4b.png" 
          alt="She Proves Logo" 
          className="w-72 mb-8"
        />
        <h1 className="text-4xl font-bold mb-6">Welcome Shir!</h1>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          Press 'Start' to run the app in the background. We will detect and record instances of violence.
        </p>
        <Button
          size="lg"
          className="flex items-center gap-2"
          onClick={() => navigate("/record")}
        >
          <Mic className="w-5 h-5" />
          Start
        </Button>
      </div>
    </div>
  );
};

export default Home;