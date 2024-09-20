import { motion, useInView, useAnimation } from "framer-motion"
import { HOW_IT_WORKS_CONTENT } from "../constants"
import { useRef, useEffect } from "react"

const HowItWorks = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.2 })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [isInView, controls])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    }

    const stepVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.6,
            }
        }
    }

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.6,
            }
        }
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.6,
            }
        }
    }

    return (
        <motion.section
            id="works"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto px-4">
                <motion.div className="text-center mb-12 border-t border-r-neutral-800" variants={textVariants}>
                    <motion.h2 
                        className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent"
                        variants={textVariants}
                    >
                        {HOW_IT_WORKS_CONTENT.sectionTitle}
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-neutral-400 max-w-xl mx-auto"
                        variants={textVariants}
                    >
                        {HOW_IT_WORKS_CONTENT.sectionDescription}
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
                        <motion.div
                            className="bg-neutral-900 p-6 rounded-xl shadow-lg flex flex-col justify-center"
                            key={index}
                            variants={stepVariants}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <motion.div variants={textVariants}>
                                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                                <p className="text-neutral-400 mb-4">{step.description}</p>
                            </motion.div>
                            <motion.div 
                                className="flex justify-center"
                                variants={imageVariants}
                            >
                                <img src={step.imageSrc} alt={step.imageAlt} className="rounded-lg w-full h-auto"/>
                            </motion.div>
                            {step.users && (
                                <motion.div 
                                    className="flex justify-between items-center mt-4 flex-wrap"
                                    variants={textVariants}
                                >
                                    <div className="flex -space-x-2 mb-2 sm:mb-0">
                                        {step.users.map((user, userIndex) => (
                                            <motion.img 
                                                key={userIndex} 
                                                src={user} 
                                                alt={`Person ${userIndex + 1}`} 
                                                className="h-8 w-8 rounded-full border-2 border-black"
                                                whileHover={{ scale: 1.2, zIndex: 1 }}
                                            />
                                        ))}
                                    </div>
                                    <motion.button 
                                        className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg w-full sm:w-auto"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Connect
                                    </motion.button>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default HowItWorks