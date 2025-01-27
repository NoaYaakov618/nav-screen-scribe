import { Home, Mic, FileText, Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t md:top-0 md:bottom-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          <Link
            to="/"
            className={`flex flex-col items-center space-y-1 ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Link>
          <Link
            to="/record"
            className={`flex flex-col items-center space-y-1 ${
              isActive("/record") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Mic className="h-5 w-5" />
            <span className="text-xs">Record</span>
          </Link>
          <Link
            to="/reports"
            className={`flex flex-col items-center space-y-1 ${
              isActive("/reports") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <FileText className="h-5 w-5" />
            <span className="text-xs">Reports</span>
          </Link>
          <Link
            to="/privacy"
            className={`flex flex-col items-center space-y-1 ${
              isActive("/privacy") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Shield className="h-5 w-5" />
            <span className="text-xs">Privacy</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};