import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FOOTER_CONTENT } from '../constants'

const Footer = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className='mt-20 text-neutral-400'
    >
      <div className='max-w-7xl mx-auto px-4 border-t border-neutral-800'>
        <motion.div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-20'>
          {FOOTER_CONTENT.sections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className='text-white font-medium mb-4'>{section.title}</h3>
              <ul className='space-y-2'>
                {section.links.map((link, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <a href={link.url}>{link.text}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={itemVariants}
          className='my-12 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500'
        >
          <div className='flex justify-between'>
            <motion.div variants={itemVariants} className='text-xs'>
              <p>{FOOTER_CONTENT.platformsText}</p>
            </motion.div>
            <motion.div variants={itemVariants} className='text-xs'>
              <p>{FOOTER_CONTENT.copyrightText}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer