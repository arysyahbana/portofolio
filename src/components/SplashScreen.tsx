import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish(); // Callback saat splash screen selesai
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        stiffness: 80,
        damping: 12,
      }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-base-100 to-slate-700 z-50"
    >
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="loader" />
        {/* <p className="text-xl font-bold text-white">Ary Syahbana</p> */}
      </div>
    </motion.div>
  );
};

export default SplashScreen;
