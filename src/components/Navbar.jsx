import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { RiCloseCircleFill, RiMenu3Line } from '@remixicon/react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                y: { stiffness: 1000 }
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        }
    }

    const linkVariants = {
        closed: { y: 50, opacity: 0 },
        open: i => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1
            }
        })
    }

    const navVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10
            }
        }
    }

    return (
        <motion.nav
            className='fixed top-4 left-0 right-0 z-50 m-2'
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <div className='text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800'>
                <motion.img src={logo} alt='logo' width={120} height={24} variants={itemVariants} />

                <motion.div className='hidden md:flex space-x-6' variants={itemVariants}>
                    <motion.a href='#works' className='hover:transition-all duration-300 hover:text-neutral-200 active:text-neutral-800 active:transition-all active:duration-300' variants={itemVariants}> How it Works
                    </motion.a>
                    <motion.a href='#pricing' className='hover:transition-all duration-300 hover:text-neutral-200 active:text-neutral-800 active:transition-all active:duration-300' variants={itemVariants}> Pricing
                    </motion.a>
                    <motion.a href='#testimonials' className='hover:transition-all duration-300 hover:text-neutral-200 active:text-neutral-800 active:transition-all active:duration-300' variants={itemVariants}> Testimonials
                    </motion.a>
                </motion.div>

                <motion.div className='hidden md:flex space-x-4 items-center' variants={itemVariants}>
                    <motion.a href='#' className='hover:text-neutral-200 hover:transition-all duration-300 active:text-neutral-800 active:transition-all active:duration-300' variants={itemVariants}>Login</motion.a>
                    <motion.a href='#' className='border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 hover:transition-all duration-300 active:bg-neutral-800 active:transition-all active:duration-300' variants={itemVariants}>Get a Demo</motion.a>
                    <motion.a href='#' className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition' variants={itemVariants}>Start Free Trial</motion.a>
                </motion.div>

                <motion.div className='md:hidden' variants={itemVariants}>
                    <motion.button
                        onClick={toggleMenu}
                        className='text-white focus:outline-none'
                        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isOpen ? <RiCloseCircleFill size={24} /> : <RiMenu3Line size={24} />}
                    </motion.button>
                </motion.div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className='md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2'
                    >
                        <div className='flex flex-col space-y-4'>
                            {['Product', 'Pricing', 'Resources', 'Login'].map((item, i) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    variants={linkVariants}
                                    custom={i}
                                    className='hover:transition-all duration-300 hover:text-neutral-200 active:text-neutral-800 active:transition-all active:duration-300'
                                >
                                    {item}
                                </motion.a>
                            ))}
                            <motion.a
                                variants={linkVariants}
                                custom={4}
                                href='#'
                                className='border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 hover:transition-all duration-300 active:bg-neutral-800 active:transition-all active:duration-300'
                            >
                                Get a Demo
                            </motion.a>
                            <motion.a
                                variants={linkVariants}
                                custom={5}
                                href='#'
                                className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition'
                            >
                                Start Free Trial
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar