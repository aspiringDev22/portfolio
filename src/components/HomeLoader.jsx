import { Box, Typography } from "@mui/material";
import { motion } from 'framer-motion';

const HomeLoader = () => {
  return (
    <Box
      style={{
        backgroundColor: "#4d4855",
        backgroundImage: "linear-gradient(147deg, #4d4855 0%, #000000 74%)",        
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {/* Text Animation */}
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 1000 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 1.2 }}
        >
          <Typography variant="h2" color='#fff'>Anirudh's Portfolio</Typography>
        </motion.div>
      </motion.div>
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              margin: '4px',
            }}
            initial={{ x: -1000, y: 0 }}
            animate={{ x: 1000, opacity: 0 }}
            transition={{ duration: Math.random() * 1.5 + 1, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HomeLoader;
