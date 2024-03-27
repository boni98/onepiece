import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from 'framer-motion';


function MyFooter() {
    return (
        <div className='flex flex-col pb-4 relative z-[50] mt-16'>
            <div className='flex justify-center'><p className="noMarginBlock">✨Design and developed by Boni Zhang✨ </p></div>
            <div className='flex justify-center'><p className="noMarginBlock">✨&copy; 2024 Boni Zhang. All Rights Reserved.✨ </p></div>
            <div className='flex flex-row justify-center py-2'>
            <motion.a 
          href="mailto:bz.bonizhang@gmail.com" 
          target="_blank" 
          whileHover={{ scale: 1.2 }} 
          whileTap={{ scale: 0.9 }}
          style={{ marginRight: '20px' }}
        >
          <FiMail size={30} style={{ color: '#FF0000' }} />
        </motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/boni-zhang/" 
          target="_blank" 
          whileHover={{ scale: 1.2 }} 
          whileTap={{ scale: 0.9 }}
          style={{ marginRight: '20px' }}
        >
          <FaLinkedin size={30} style={{ color: '#0077B5' }} />
        </motion.a>
        <motion.a 
          href="https://github.com/boni98" 
          target="_blank" 
          whileHover={{ scale: 1.2 }} 
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub size={30} style={{ color: '#000000' }} />
        </motion.a>
            </div>
        </div>

    )
}

export default MyFooter