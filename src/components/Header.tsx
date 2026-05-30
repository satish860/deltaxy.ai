'use client'

import { ArrowRight, Equal, X } from 'lucide-react'
import { motion, useMotionValueEvent, useScroll, type Variants } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import { Logo } from './Logo'
import { workingSessionMailto } from './home/data'

const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/#products', label: 'Products' },
    { href: '/#industries', label: 'Industries' },
    { href: '/#testimonials', label: 'Testimonials' },
    { href: '/#how-it-works', label: 'How it works' },
]

const barVariants: Variants = {
    visible: { y: 0 },
    hidden: { y: '-100%' },
}

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [hidden, setHidden] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious() ?? 0

        // Hide when scrolling down past the bar; reveal the moment we scroll up.
        // Stay visible long enough for the logo morph to play before hiding.
        if (isOpen || latest < 320) {
            setHidden(false)
        } else if (latest > previous) {
            setHidden(true)
        } else {
            setHidden(false)
        }

        setScrolled(latest > 10)
    })

    return (
        <header className='sticky top-0 left-0 right-0 z-50'>
            {/* Animated bar — hides on scroll down, reveals on scroll up */}
            <motion.div
                variants={barVariants}
                initial='visible'
                animate={hidden ? 'hidden' : 'visible'}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className='relative z-20 h-16 md:h-20 flex items-center justify-center'
            >
                {/* Blur that fades from the top into the content — no hard edge */}
                <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-x-0 top-0 h-[180%] backdrop-blur-md bg-linear-to-b from-dxy-paper/80 via-dxy-paper/40 to-transparent transition-opacity duration-300 ${scrolled && !isOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        maskImage:
                            'linear-gradient(to bottom, black 0%, black 35%, transparent 100%)',
                        WebkitMaskImage:
                            'linear-gradient(to bottom, black 0%, black 35%, transparent 100%)',
                    }}
                />

                <div className='relative w-[90%] md:w-[85%] mx-auto flex items-center justify-between'>
                    <Link href="/" aria-label="DeltaXY home">
                        <Logo collapsed={scrolled && !isOpen} />
                    </Link>
                    <nav className='hidden md:flex items-center gap-10 uppercase font-medium text-sm'>
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>{link.label}</Link>
                        ))}
                    </nav>
                    <a
                        href={workingSessionMailto}
                        className='group relative hidden md:inline-flex items-center gap-2.5 h-10 rounded-full bg-dxy-primary pl-5 pr-1 uppercase text-sm font-medium overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md'
                    >
                        {/* Sage fill sweep on hover */}
                        <span className='absolute inset-0 -translate-x-full bg-dxy-sage transition-transform duration-500 ease-out group-hover:translate-x-0' />
                        <span className='relative tracking-wide text-white'>Book a call</span>
                        <span className='relative h-8 w-8 flex items-center justify-center bg-dxy-paper rounded-full transition-transform duration-300 ease-out group-hover:translate-x-1'>
                            <ArrowRight className='size-4 text-dxy-primary' strokeWidth={1.75} />
                        </span>
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='md:hidden relative inline-flex size-8 items-center justify-center rounded-full border border-dxy-primary/15 text-dxy-primary transition-colors duration-300 hover:bg-dxy-primary/5 active:scale-95'
                        aria-label='Toggle menu'
                        aria-expanded={isOpen}
                    >
                        <Equal
                            className={`absolute size-5 transition-all duration-300 ease-out ${isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`}
                            strokeWidth={1.5}
                        />
                        <X
                            className={`absolute size-5 transition-all duration-300 ease-out ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}`}
                            strokeWidth={1.5}
                        />
                    </button>
                </div>
            </motion.div>

            {/* Mobile menu — full-screen frosted panel; sits below the bar so logo + close stay crisp */}
            <div
                className={`md:hidden fixed inset-0 z-10 bg-dxy-paper/85 backdrop-blur-xl transition-all duration-300 ease-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
            >
                <nav className='w-[85%] h-full mx-auto flex flex-col justify-center pt-16 pb-8 uppercase font-medium text-base'>
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`py-4 border-b border-dxy-primary/10 transition-all duration-300 ease-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                            style={{ transitionDelay: isOpen ? `${100 + i * 50}ms` : '0ms' }}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href={workingSessionMailto}
                        className={`group relative flex items-center justify-between bg-dxy-primary h-12 rounded-full pl-6 pr-1 uppercase text-sm font-medium mt-8 overflow-hidden shadow-sm transition-all duration-300 ease-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                        style={{ transitionDelay: isOpen ? `${100 + navLinks.length * 50}ms` : '0ms' }}
                        onClick={() => setIsOpen(false)}
                    >
                        {/* Sage fill sweep on hover */}
                        <span className='absolute inset-0 -translate-x-full bg-dxy-sage transition-transform duration-500 ease-out group-hover:translate-x-0' />
                        <span className='relative tracking-wide text-white'>Book a call</span>
                        <span className='relative h-10 w-10 flex items-center justify-center bg-dxy-paper rounded-full transition-transform duration-300 ease-out group-hover:translate-x-1'>
                            <ArrowRight className='size-4 text-dxy-primary' strokeWidth={1.75} />
                        </span>
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header
