import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Welcome to Your New App
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto">
          Start building something amazing with this clean, modern React template.
        </p>
        <div className="pt-4">
          <a
            href="#"
            className="inline-block px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;