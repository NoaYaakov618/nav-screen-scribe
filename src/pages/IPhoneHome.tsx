import { useNavigate } from "react-router-dom";
import { MessageSquare, Camera, Mail } from "lucide-react";

const IPhoneHome = () => {
  const navigate = useNavigate();

  const handleAppClick = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-4 flex items-center justify-center">
      <div className="bg-black rounded-[3rem] p-4 w-[380px] relative">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl" />
        
        {/* Screen */}
        <div className="bg-[#f2f2f6] rounded-[2.5rem] p-6 min-h-[700px]">
          {/* Status Bar */}
          <div className="flex justify-between mb-8 px-4">
            <span className="text-sm font-medium">9:41</span>
            <div className="flex gap-2">
              <span className="text-sm">5G</span>
              <span className="text-sm">100%</span>
            </div>
          </div>

          {/* App Grid */}
          <div className="grid grid-cols-4 gap-6 p-4">
            {/* WhatsApp */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs mt-1">WhatsApp</span>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs mt-1">Instagram</span>
            </div>

            {/* Gmail */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs mt-1">Gmail</span>
            </div>

            {/* She-Proves */}
            <div 
              className="flex flex-col items-center cursor-pointer"
              onClick={handleAppClick}
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/a16bfa8c-0252-4a65-bc7c-6981fcc0bb4b.png"
                  alt="She-Proves"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs mt-1">She-Proves</span>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default IPhoneHome;