import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
const P1 = () => {



    return (
        <>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                    opacity: 3,
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%",'0%'],
                     scale: 1 }}
                transition={{ duration: 1,delay:1 }} 
               className='div' >

            </motion.div>


        </>
    )
}

export default P1