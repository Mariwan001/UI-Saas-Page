import { motion, useInView } from "framer-motion"
import { KEY_FEATURES_CONTENT } from "../constants"
import { useRef } from "react"

const KeyFaetures = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.2 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren",
            }
        }
    }

    const featureVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    }

    return (
        <section ref={ref}>
            <div className="max-w-7xl mx-auto px-4 mt-20">
                <motion.div
                    className="text-center mb-12 border-t border-neutral-800"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.h2 
                        className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent"
                        variants={featureVariants}
                    >
                        {KEY_FEATURES_CONTENT.sectionTitle}
                    </motion.h2>
                    <motion.p 
                        className="mt-4"
                        variants={featureVariants}
                    >
                        {KEY_FEATURES_CONTENT.sectionDescription}
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="flex flex-wrap justify-between"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {KEY_FEATURES_CONTENT.features.map((feature) => (
                        <motion.div 
                            key={feature.id} 
                            className="flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/3 p-6" 
                            variants={featureVariants}
                        >
                            <div className="flex justify-center items-center mb-4">{feature.icon}</div>
                            <h3 className="text-xl">{feature.title}</h3>
                            <p className="mt-2 text-neutral-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default KeyFaetures