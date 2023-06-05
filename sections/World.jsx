'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-03 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Hecho para tí" textStyles="text-center" />
      <TitleText
        title={(
          <>Descubre cómo focalizar tus habilidades para ser un líder
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-20 right-1 w-[200px] h-[200px] p-[6px] rounded-full">
          <img src="Blanco.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-1 w-[200px] h-[200px] p-[6px] rounded-full">
          <img src="/Arabe.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/4 left-[40%] w-[200px] h-[200px] p-[6px] rounded-full">
          <img src="Negro.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 right-[10%] w-[351px] h-[330px] p-[6px] sm:block hidden">
          <img src="/Liderarte.png" alt="people-joined" className="w-full h-full sm:block hidden" />
        </div>
        <div className="absolute top-1/2 left-[10%] w-[331px] h-[310px] p-[6px] sm:block hidden">
          <img src="Liderar.png" alt="people-joined" className="w-full h-full sm:block hidden" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
