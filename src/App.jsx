import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Palette, 
  Smartphone,
  User,
  Briefcase,
  MessageCircle,
  ArrowDown,
  Send,
  MapPin,
  Calendar,
  Coffee
} from 'lucide-react'
import './App.css'

// Import assets
import heroBackground from './assets/hero_background_minimal.png'
import geometricPattern from './assets/geometric_pattern_subtle.png'
import lineArt from './assets/line_art_element.png'

// Hero Section
const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  // Stagger animation for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center hero-background relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <motion.div
        className="absolute top-16 left-8 w-24 h-24 bg-gradient-to-r from-primary/30 via-accent/20 to-chart-2/30 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.6, 0.2],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-32 right-16 w-40 h-40 bg-gradient-to-r from-chart-2/25 via-primary/20 to-accent/25 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.7, 0.3],
          x: [0, -25, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-r from-chart-3/25 via-accent/20 to-primary/25 rounded-full blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.15, 0.5, 0.15],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-accent/20 via-primary/15 to-chart-2/20 rounded-full blur-lg"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
          y: [0, 25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-gradient-to-r from-primary/20 via-chart-3/15 to-accent/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.4, 0.1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-primary/30 rounded-lg"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/5 w-6 h-6 border-2 border-accent/40 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute top-2/3 right-1/5 w-10 h-10 border-2 border-chart-2/35 rotate-45"
        animate={{
          rotate: [45, 225, 405],
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 1
        }}
      />

      {/* Additional geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-4 h-4 border border-chart-3/50 rotate-45"
        animate={{
          rotate: [45, 135, 225, 315, 405],
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 3
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/6 w-12 h-12 border-2 border-primary/25 rounded-full"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.15, 0.45, 0.15],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />

      <motion.div
        className="absolute top-3/4 left-1/3 w-6 h-6 border border-accent/40"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
          delay: 2.5
        }}
      />

      {/* Triangle shapes */}
      <motion.div
        className="absolute top-1/6 right-1/3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-primary/30"
        animate={{
          rotate: [0, 120, 240, 360],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      <motion.div
        className="absolute bottom-1/6 left-2/3 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-accent/35"
        animate={{
          rotate: [0, -120, -240, -360],
          scale: [1, 1.4, 1],
          opacity: [0.25, 0.6, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3.5
        }}
      />

      {/* Hexagon shape */}
      <motion.div
        className="absolute top-1/2 right-1/6 w-8 h-8"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          border: '2px solid rgba(16, 185, 129, 0.3)'
        }}
        animate={{
          rotate: [0, 60, 120, 180, 240, 300, 360],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
      />

      {/* Star shape */}
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6"
        style={{
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          backgroundColor: 'rgba(14, 165, 233, 0.25)'
        }}
        animate={{
          rotate: [0, 72, 144, 216, 288, 360],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "linear",
          delay: 1.8
        }}
      />

      {/* Dotted patterns */}
      <motion.div
        className="absolute top-1/5 left-1/4 w-16 h-16"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 1px, transparent 1px)',
          backgroundSize: '8px 8px'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />

      <motion.div
        className="absolute bottom-1/5 right-1/4 w-20 h-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 1px, transparent 1px)',
          backgroundSize: '6px 6px'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
          rotate: [0, -3, 3, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4.5
        }}
      />

      {/* Line elements */}
      <motion.div
        className="absolute top-1/3 left-1/8 w-20 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        animate={{
          scaleX: [0.5, 1, 0.5],
          opacity: [0.2, 0.6, 0.2],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/8 w-16 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        animate={{
          scaleX: [0.3, 1, 0.3],
          opacity: [0.15, 0.5, 0.15],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7
        }}
      />

      {/* Cross shape */}
      <motion.div
        className="absolute top-2/3 left-1/5 w-8 h-8"
        style={{
          background: 'linear-gradient(45deg, transparent 40%, rgba(6, 182, 212, 0.3) 40%, rgba(6, 182, 212, 0.3) 60%, transparent 60%)',
          clipPath: 'polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)'
        }}
        animate={{
          rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 3.2
        }}
      />

      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(14, 165, 233, 0.25) 0%, transparent 50%)`
          }}
          animate={{
            background: [
              `radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
               radial-gradient(circle at 40% 40%, rgba(14, 165, 233, 0.25) 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
               radial-gradient(circle at 60% 60%, rgba(14, 165, 233, 0.25) 0%, transparent 50%)`,
              `radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 60% 60%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
               radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.25) 0%, transparent 50%)`
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Enhanced Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1, 
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          className="mb-12"
        >
          <motion.div
            className="relative w-32 h-32 mx-auto"
            whileHover={{ 
              scale: 1.1,
              rotate: 5
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glowing background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-chart-2/30 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Main avatar */}
            <motion.div
              className="relative w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-full border-2 border-primary/30 backdrop-blur-sm flex items-center justify-center overflow-hidden"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.3)",
                  "0 0 40px rgba(6, 182, 212, 0.6)",
                  "0 0 20px rgba(6, 182, 212, 0.3)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Profile image placeholder */}
              <motion.div
                className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground"
                animate={{
                  background: [
                    "linear-gradient(135deg, #06b6d4, #10b981)",
                    "linear-gradient(135deg, #10b981, #3b82f6)",
                    "linear-gradient(135deg, #3b82f6, #06b6d4)",
                    "linear-gradient(135deg, #06b6d4, #10b981)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                SK
              </motion.div>
            </motion.div>
            
            {/* Floating particles around avatar */}
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-3 h-3 bg-chart-2 rounded-full"
              animate={{
                y: [0, 10, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute top-1/2 -right-4 w-2 h-2 bg-chart-3 rounded-full"
              animate={{
                x: [0, 8, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.4, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
          </motion.div>
        </motion.div>

        {/* Animated title */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 hero-text"
        >
          <h1 className="heading-xl text-foreground mb-2">
            <motion.span variants={letterVariants}>
              Hello, I'm{' '}
            </motion.span>
            <motion.span 
              className="text-gradient"
              variants={letterVariants}
              whileHover={{ scale: 1.05 }}
            >
              Shaik Kareem Rabbani
            </motion.span>
          </h1>
        </motion.div>

        {/* Animated description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <p className="body-lg max-w-2xl mx-auto">
            Full-stack developer and creative problem solver, crafting dynamic, user-friendly web experiences. Passionate about modern technologies, clean code, and design that makes an impact.
          </p>
        </motion.div>

        {/* Animated buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="minimal-button-outline px-8 py-3 relative overflow-hidden border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => scrollToSection('work')}
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: -5 }}
                transition={{ duration: 0.3 }}
              >
                View My Work
              </motion.span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowDown className="ml-2" size={16} />
              </motion.span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="minimal-button-outline px-8 py-3 relative overflow-hidden"
              onClick={() => scrollToSection('contact')}
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: -5 }}
                transition={{ duration: 0.3 }}
              >
                Get In Touch
              </motion.span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Mail className="ml-2" size={16} />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <ArrowDown className="text-muted-foreground mb-2" size={24} />
            <motion.div
              className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
              animate={{ height: [32, 48, 32] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating tech icons */}
      <motion.div
        className="absolute top-1/4 right-10 text-primary/30"
        variants={floatingVariants}
        animate="animate"
      >
        <Code size={24} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-10 text-chart-2/30"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      >
        <Palette size={24} />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-20 text-accent/30"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "4s" }}
      >
        <Smartphone size={24} />
      </motion.div>
    </section>
  )
}

// About Section
const AboutSection = () => {
  const skills = [
    { name: 'Frontend Development', level: 95, icon: Code },
    { name: 'Backend Development', level: 88, icon: Code },
    { name: 'AI & Machine Learning', level: 82, icon: Smartphone },
    { name: 'UI/UX Design', level: 78, icon: Palette },
  ]

  return (
    <section className="py-20 px-6 subtle-pattern">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-foreground mb-4">About Me</h2>
          <div className="section-divider"></div>
          <p className="body-lg max-w-3xl mx-auto">
            I'm a creative professional with a passion for crafting exceptional digital experiences. 
            With years of experience in development and design, I bring ideas to life through clean code and thoughtful design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="clean-card p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="heading-md text-foreground">My Story</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-4 body-md">
                  <p>
                    I started my journey in tech with a curiosity about how things work. 
                    This curiosity led me to explore programming, design, and the intersection 
                    of technology and human experience.
                  </p>
                  <p>
                    Today, I focus on creating solutions that are not only functional but also 
                    beautiful and intuitive. I believe that great design should be invisible – 
                    it should just work.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {['React', 'SQL', 'Python', 'Java', 'JavaScript'].map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-accent text-accent-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="heading-md text-foreground mb-8">Skills & Expertise</h3>
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon size={20} className="text-primary" />
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Work Section
const WorkSection = () => {
  const projects = [
    {
      title: 'GitHub Profile Analyzer',
      description: 'Analyze any GitHub profile with charts, repo insights, recent activity, and an automated written review.',
      technologies: ['JavaScript', 'Vite', 'React', 'CSS', 'HTML'],
      image: lineArt,
      category: 'Web Development',
      githubUrl: 'https://github.com/skRabbani555/Github-Profile-Analyzer',
    },
    {
      title: 'Generative AI Meme/Sticker Creator',
      description: 'The Generative AI Meme/Sticker Creator is a fun and creative web app that allows users to generate personalized memes and stickers using text prompts and image uploads. With AI-powered models like Stable Diffusion and ControlNet, the app can remove backgrounds, apply styles, and overlay captions to instantly create shareable content.',
      technologies: ['React.js', 'CSS / TailwindCSS', 'Python (FastAPI / Flask)', 'OpenCV'],
      image: lineArt,
      category: 'AI/ML',
      githubUrl: 'https://github.com/skRabbani555/Generative-AI-Meme-Sticker-Creator',
    },
    {
      title: 'Restaurant Table Reservation System (In Progress)',
      description: 'The Restaurant Table Reservation System is a web-based application that allows users to conveniently book tables online by selecting a date, time slot, and number of guests. The system checks for table availability in real time and confirms successful reservations with a unique QR code that customers can scan upon arrival for quick verification.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'QRServer API'],
      image: lineArt,
      category: 'Web Development',
      githubUrl: 'https://github.com/yourusername/restaurant-reservation',
    },
    {
      title: 'Analytics Dashboard  (In Progress)',
      description: 'Real-time analytics dashboard for business intelligence, featuring interactive charts and customizable reporting.',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      image: lineArt,
      category: 'Data Visualization',
      githubUrl: 'https://github.com/yourusername/analytics-dashboard',
    },
  ]

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-foreground mb-4">Featured Work</h2>
          <div className="section-divider"></div>
          <p className="body-lg max-w-3xl mx-auto">
            A selection of projects that showcase my skills in development, design, and problem-solving. 
            Each project represents a unique challenge and creative solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="clean-card h-full group cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        className="minimal-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, '_blank');
                        }}
                      >
                        <ExternalLink size={16} />
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button 
                        size="sm" 
                        className="minimal-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                      >
                        <Github size={16} />
                      </Button>
                    )}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="heading-md text-foreground">{project.title}</CardTitle>
                  <CardDescription className="body-md">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
    }, 2000)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'kareemrabbaniskr@gmail.com', href: 'mailto:hello@yourname.com' },
    { icon: MapPin, label: 'Location', value: 'Bangalore, India', href: '#' },
    { icon: Calendar, label: 'Availability', value: 'Open to opportunities', href: '#' },
  ]

  const socialLinks = [
    { icon: Github, url: 'https://github.com/skRabbani555', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/shaik-kareem-rabbani-45035724b/', label: 'LinkedIn' },
    { icon: Coffee, url: '#', label: 'Buy me a coffee' },
  ]

  return (
    <section className="py-20 px-6 subtle-pattern">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-foreground mb-4">Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="body-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and interesting projects. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="clean-card p-8">
              <CardHeader className="px-0 pt-0 pb-6">
                <CardTitle className="heading-md text-foreground flex items-center gap-3">
                  <MessageCircle className="text-primary" size={24} />
                  Send a Message
                </CardTitle>
                <CardDescription className="body-md">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="clean-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="clean-input"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="clean-input resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full minimal-button h-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2" size={16} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div>
              <h3 className="heading-md text-foreground mb-6 flex items-center gap-3">
                <User className="text-primary" size={20} />
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-card/50 hover:bg-card border border-transparent hover:border-primary/20 transition-all duration-300 group"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Icon size={20} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{info.label}</div>
                        <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{info.value}</div>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="heading-md text-foreground mb-6 flex items-center gap-3">
                <Github className="text-primary" size={20} />
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Main App Component
function App() {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <div className="relative">
      <motion.div
        style={{ y: backgroundY }}
        className="fixed inset-0 z-0 opacity-5"
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url(${geometricPattern})`,
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat',
          }}
        />
      </motion.div>

      <div className="relative z-10">
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="work">
          <WorkSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </div>

      <footer className="relative z-10 py-8 text-center border-t border-border bg-background">
        <p className="text-muted-foreground text-sm">
          © 2025 Shaik Kareem Rabbani. Crafted with care and attention to detail.
        </p>
      </footer>
    </div>
  )
}

export default App
