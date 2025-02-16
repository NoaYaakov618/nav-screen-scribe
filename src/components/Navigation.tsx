import { Home, Plus, ListChecks, ShieldAlert } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useMobile } from "@/hooks/use-mobile";

export const Navigation = () => {
  const isMobile = useMobile();
  const location = useLocation();

  // Don't show navigation on splash screen
  if (location.pathname === "/splash") {
    return null;
  }

  if (isMobile) {
    return (
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t">
        <div className="container flex justify-around py-2">
          <NavLink to="/home" className="flex flex-col items-center p-2">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </NavLink>
          <NavLink to="/record" className="flex flex-col items-center p-2">
            <Plus className="w-6 h-6" />
            <span className="text-xs">Record</span>
          </NavLink>
          <NavLink to="/reports" className="flex flex-col items-center p-2">
            <ListChecks className="w-6 h-6" />
            <span className="text-xs">Reports</span>
          </NavLink>
          <NavLink to="/privacy" className="flex flex-col items-center p-2">
            <ShieldAlert className="w-6 h-6" />
            <span className="text-xs">Privacy</span>
          </NavLink>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background border-b">
      <div className="container flex justify-around py-2">
        <NavLink to="/home" className="flex items-center gap-2 p-2">
          <Home className="w-6 h-6" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/record" className="flex items-center gap-2 p-2">
          <Plus className="w-6 h-6" />
          <span>Record</span>
        </NavLink>
        <NavLink to="/reports" className="flex items-center gap-2 p-2">
          <ListChecks className="w-6 h-6" />
          <span>Reports</span>
        </NavLink>
        <NavLink to="/privacy" className="flex items-center gap-2 p-2">
          <ShieldAlert className="w-6 h-6" />
          <span>Privacy</span>
        </NavLink>
      </div>
    </nav>
  );
};
