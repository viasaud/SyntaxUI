'use client'

import { motion } from 'framer-motion'

export const BounceLoader = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="h-5 w-5 animate-bounce rounded-full bg-red-500 [animation-delay:-0.3s]"></div>
      <div className="h-5 w-5 animate-bounce rounded-full bg-red-500 [animation-delay:-0.13s]"></div>
      <div className="h-5 w-5 animate-bounce rounded-full bg-red-500"></div>
    </div>
  )
}

export const ClassicLoader = () => {
  return (
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-red-500" />
  )
}

export const OrbitingLoader = () => {
  return (
    <div className="flex">
      <motion.div
        className="flex"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div
          className="mx-1 h-4 w-4 rounded-full bg-red-500"
          animate={{ scale: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="mx-1 h-4 w-4 rounded-full bg-red-500"
          animate={{ scale: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        ></motion.div>
        <motion.div
          className="mx-1 h-4 w-4 rounded-full bg-red-500"
          animate={{ scale: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        ></motion.div>
      </motion.div>
    </div>
  )
}

export const StaggeredFadeLoader = () => {
  const circleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="h-4 w-4 rounded-full bg-red-500"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.9,
            delay: index * 0.2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>
      ))}
    </div>
  )
}

export const MorphingShapesLoader = () => {
  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: { opacity: 1, pathLength: 1 },
  }

  return (
    <div className="flex items-center justify-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <motion.path
          d="M20,50 Q50,0 80,50 Q50,100 20,50 Z"
          fill="none"
          stroke="#FF4136"
          strokeWidth="8"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </motion.svg>
    </div>
  )
}

export const NeonGlowLoader = () => {
  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="relative h-20 w-20"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute  h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
            variants={circleVariants}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              boxShadow: `0 0 20px 5px ${
                ['#fb3a5d', '#00FFFF', '#FFFF00'][index]
              }`,
              filter: 'blur(10px)',
            }}
          ></motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export const PulsatingGradientLoader = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="h-20 w-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{ filter: 'blur(10px)' }}
      ></motion.div>
    </div>
  )
}

export const RotatingRingsLoader = () => {
  const ringVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: { opacity: 1, rotate: 360 },
  }

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="relative h-16 w-16"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
      >
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-t-2 border-orange-500 border-transparent"
            variants={ringVariants}
            transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
            style={{ borderWidth: `${2 * (index + 1)}px` }}
          ></motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export const RotatingDotsLoader = () => {
  const rotateVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  }

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="relative h-12 w-12"
        variants={rotateVariants}
        animate="rotate"
      >
        <motion.div
          className="absolute left-0 top-0 h-4 w-4 rounded-full bg-red-500"
          initial="initial"
          animate="animate"
          transition={{ delay: 0 }}
        ></motion.div>
        <motion.div
          className="absolute right-0 top-0 h-4 w-4 rounded-full bg-red-500"
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 left-0 h-4 w-4 rounded-full bg-red-500"
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-red-500"
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6 }}
        ></motion.div>
      </motion.div>
    </div>
  )
}

export const SpinningCubeLoader = () => {
  const cubeVariants = {
    spin: {
      rotateX: 360,
      rotateY: 360,
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  }

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="h-16 w-16 rounded-2xl bg-red-500"
        variants={cubeVariants}
        animate="spin"
        style={{ perspective: 200 }}
      ></motion.div>
    </div>
  )
}

export const RippleLoader = () => {
  const rippleVariants = {
    start: {
      opacity: 1,
      scale: 0,
    },
    end: {
      opacity: 0,
      scale: 3,
    },
  }

  const rippleTransition = {
    duration: 2,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatDelay: 1,
  }

  return (
    <div className="flex items-center justify-center">
      <div className="relative h-10 w-10">
        <motion.div
          className="absolute h-full w-full rounded-full bg-red-500 opacity-0"
          variants={rippleVariants}
          initial="start"
          animate="end"
          transition={rippleTransition}
        ></motion.div>
        <motion.div
          className="absolute h-full w-full rounded-full bg-red-500 opacity-0"
          variants={rippleVariants}
          initial="start"
          animate="end"
          transition={{ ...rippleTransition, delay: 0.5 }}
        ></motion.div>
        <motion.div
          className="absolute h-full w-full rounded-full bg-red-500 opacity-0"
          variants={rippleVariants}
          initial="start"
          animate="end"
          transition={{ ...rippleTransition, delay: 1 }}
        ></motion.div>
      </div>
    </div>
  )
}

export const PulsatingDots = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-2">
        <motion.div
          className="h-3 w-3 rounded-full bg-red-500"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
        <motion.div
          className="h-3 w-3 rounded-full bg-red-500"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: 0.3,
          }}
        />
        <motion.div
          className="h-3 w-3 rounded-full bg-red-500"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: 0.6,
          }}
        />
      </div>
    </div>
  )
}
