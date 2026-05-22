import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { workingSessionMailto } from './home/data'

const Header = () => {
    return (
        <header className='h-20 flex items-end justify-center'>
            <div className='w-[85%] mx-auto flex items-center justify-between'>
                <Image src="/logos/logo.svg" alt="Deltaxy Logo" width={100} height={100} />
                <nav className='flex items-center gap-10 uppercase font-medium text-sm'>
                    <Link href="/#services">Services</Link>
                    <Link href="/#products">Products</Link>
                    <Link href="/#industries">Industries</Link>
                    <Link href="/#testimonials">Testimonials</Link>
                    <Link href="/#how-it-works">How it works</Link>
                </nav>
                <a href={workingSessionMailto} className='bg-dxy-primary text-white h-10 rounded-sm flex items-center w-40 justify-between px-1 uppercase text-sm font-medium'>
                    <span className='flex-1 flex justify-center text-white'>Book a call</span>
                    <span className='h-8 w-8 flex items-center justify-center bg-dxy-paper rounded-sm'>
                        <ArrowRight className='size-4 text-dxy-primary' strokeWidth={1.5} />
                    </span>
                </a>
            </div>
        </header>
    )
}

export default Header