import { BRAND_LOGOS, HERO_CONTENT } from '../../src/constants'
import heroImage from '../assets/hero.jpg'
import { motion, useViewportScroll, useTransform, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { scrollY } = useViewportScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -60 },
    visible: i => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
        delay: i * 0.15
      }
    })
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 1
      }
    }
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 8,
        delay: 1 + i * 0.1
      }
    })
  }

  return (
    <motion.section 
      ref={ref}
      className="pt-28 lg:pt-36"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
            <motion.div
              variants={itemVariants}
              className="mb-8 border border-neutral-800 px-3 py-2 rounded-full text-xs"
            >
                {HERO_CONTENT.badgeText}
            </motion.div>
            <motion.h1
              style={{ y }}
              className='text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent'
            >
              {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
                <motion.span key={index} custom={index} variants={textVariants}>{text} <br /></motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className='mt-6 text-neutral-400 max-w-xl text-center'
            >
              {HERO_CONTENT.subHeading}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className='mt-6 space-x-4'
            >
                <motion.a
                  href='#'
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
                  className='inline-block bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold'
                >
                  {HERO_CONTENT.callToAction.primary}
                </motion.a>
                <motion.a
                  href='#'
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
                  className='inline-block border border-gray-500 hover:border-gray-400 text-white py-3 px-6 rounded-lg font-medium'
                >
                  {HERO_CONTENT.callToAction.secondary}
                </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='py-10'
            >
                <motion.p 
                  variants={itemVariants}
                  className='text-gray-400 text-center mb-8'
                >
                  {HERO_CONTENT.trustedByText}
                </motion.p>
                <motion.div 
                  className='flex flex-wrap justify-center gap-8'
                  variants={containerVariants}
                >
                    {BRAND_LOGOS.map((logo, index) => (
                        <motion.img
                          key={index}
                          src={logo.src}
                          alt={logo.alt}
                          className='h-8'
                          variants={logoVariants}
                          custom={index}
                          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        />
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='mt-12'
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
                <img src={heroImage} alt='Saas InterFace' className='w-full h-auto rounded-3xl border border-neutral-800 mb-20'/>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default HeroSection; 