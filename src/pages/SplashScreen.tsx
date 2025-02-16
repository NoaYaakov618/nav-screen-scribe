
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-8 max-w-md"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.img
            src="/lovable-uploads/a16bfa8c-0252-4a65-bc7c-6981fcc0bb4b.png"
            alt="She Proves Logo"
            className="w-72"
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 1.5 }
            }}
          />
        </motion.div>
        <motion.p
          className="text-center text-muted-foreground text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Capturing the truth: Watch 'She Proves' in action – detecting and recording domestic violence as evidence.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
