import { motion, useInView } from 'framer-motion'
import { TESTIMONIALS_CONTENT } from '../constants'
import { useRef } from 'react'

const Testimonials = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.2 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            }
        }
    }

    const testimonialVariants = {
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

    return (
        <section id='testimonials' ref={ref}>
            <motion.div 
                className='max-w-7xl mx-auto px-4 mb-12 border-t border-neutral-800 text-center'
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h2 className='text-3xl lg:text-5xl tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent mt-8'>{TESTIMONIALS_CONTENT.sectionTitle}</h2>
                <p className='mt-4 max-w-2xl mx-auto'>{TESTIMONIALS_CONTENT.sectionDescription}</p>
            </motion.div>

            <motion.div 
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                variants={containerVariants}
                className='grid grid-cols-1 md:grid-cols-3 gap-8'
            >
                {TESTIMONIALS_CONTENT.reviews.map((review, index) => (
                    <motion.div 
                        key={index}
                        variants={testimonialVariants}
                        className='mt-10 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-900 p-10'
                    >
                        <p className='mb-4 text-neutral-200'>{review.review}</p>
                        <div className='flex items-center mt-4'>
                            <img 
                                src={review.image}
                                alt={review.alt}
                                className='w-12 h-12 rounded-full mr-4'
                            />
                        </div>
                        <div>
                            <p className='text-sm font-bold text-white'>{review.name}</p>
                            <p className='text-sm text-gray-500'>{review.title}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Testimonials