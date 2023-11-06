import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Image Gallery</h1>
          <p className='mb-5'>
            Welcome to Image Gallery, here you can see some beautiful pictures.
            Moreover, you can sort images and select images for deletion. Hope
            you enjoy your visit here.
          </p>
          <Link to={`/gallery`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95, rotate: "2.5deg" }}
              transition={{ duration: 0.225, ease: "easeInOut" }}
              className='btn btn-primary'
            >
              Visit Gallery
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
