'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer} from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div variants={staggerContainer} initial='hidden' whileInView="show" viewport={{ once: false, amount: 0.25}} className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <TypingText title=" | About Metaversus" textStyles="text-center" />

      <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'>
        <span className='font-extrabold text-white'>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. In eu velit nec elit pulvinar bibendum. Integer suscipit iaculis nunc id aliquet. Sed fermentum turpis ut leo posuere, eget tempus mi tincidunt. Phasellus rutrum lectus quis lorem fringilla laoreet. Nulla ac lectus augue. Nullam nunc purus, egestas nec mi id, placerat placerat dui. Pellentesque aliquet arcu erat, et porttitor dui sollicitudin sed. Donec eget tincidunt tortor.
        In hac habitasse platea dictumst. <span className='font-extrabold text-white'>Suspendisse arcu odio</span>, lacinia sed scelerisque vitae, cursus eget odio. Donec in tristique quam, vel posuere nibh. Vivamus ultrices turpis in nisi tincidunt, vel blandit leo lobortis. Nullam sed velit eget est molestie vehicula. Aliquam ac lectus dolor. Suspendisse potenti. Praesent velit magna, luctus sit amet ante sed, consequat elementum nisi. Pellentesque iaculis lectus vulputate, varius tortor non, egestas dui. Sed nec arcu in tortor tincidunt malesuada vel nec felis. Donec non tincidunt dolor. 
      </motion.p>
      <motion.img variants={fadeIn('up', 'tween', 0.3, 1)} src='/arrow-down.svg' alt="arrow down" className='w-[18px] h-[28px] object-contain mt-[28px]'/>
      
    </motion.div>
  </section>
);

export default About;
