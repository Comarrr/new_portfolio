'use client'

import Image from 'next/image'
import Navbar from './_components/Navbar'
import Links from './_components/Links'
import Contact from './_components/Contact'
import Skills from './_components/Skills'

import Bitmoji from '@/public/bitmoji.png'
import { Button } from '@/components/ui/button'
import { Download, MessageSquare } from 'lucide-react'
import Project from './_components/Projects/Project'
import Link from 'next/link'

const imageLoader = ({ src }: { src: string }) => {
	return `https://comarrr.dev/${src}`
}


export default function Home() {
  return (
	<>
		<div className="py-8 bg-gradient-to-tr from-[#C1EAFC] to-[#BDD5F9] min-h-screen scroll-smooth">
			<Links />
        	<div>
          		<div className='px-8'>
              		<Navbar />
          		</div>
				<div className="flex flex-col gap-8 text-center items-center md:text-left md:flex-row md:justify-evenly pt-16 mb-16 md:pt-24 md:mb-32">
					<div className=" flex flex-col">
						<p className="text-md  md:text-xl font-semibold">Hello there ! 👋</p>
						<h1 className="text-5xl md:text-8xl font-bold">I'm Comarrr</h1>
						<p className="text-2xl md:text-6xl font-semibold mt-4">FontEnd Developer</p>
					</div>
					<div>
						<Image loader={imageLoader} src="bitmoji.png" alt="hero" width={200} height={200} />
					</div>
				</div>
				<div className='flex flex-col sm:flex-row items-center justify-center gap-8 mb-20'>
					<Button>
						<Link href="/my_resume.pdf" target="_blank" className='flex items-center justify-center gap-2'>
							Download my resume <Download width={20} height={20} />
						</Link>
					</Button>
					<Button>
						<Link href="#contact" className='flex items-center justify-center gap-2'>
							Text me <MessageSquare width={20} height={20} />
						</Link>
					</Button>
				</div>
				<div className='relative left-1/2 transform -translate-x-1/2 bg-[#C5EFCB] shadow-lg w-2/3'>
					<div className='flex flex-col gap-8 p-8'>
						<p className='text-sm sm:text-base md:text-xl'>I am 24 years old, and I have a bachelor's degree in web development from HETIC. I worked in a media monitoring company called Mediatree as a web developer where I was able to redesign their website and work on their internal tool.</p>
						<p className='text-sm sm:text-base md:text-xl'>I'm currently looking for a job as a React developer. With my experience and skills in web development, I'm passionate about creating innovative solutions to meet the needs of users and businesses.</p>
					</div>
				</div>
			</div>
			<div className='mt-36' id="projects">
				<h2 className="text-2xl sm:text-4xl font-semibold underline text-center text-[#393D3F] mb-12 md:mb-24">My projects.</h2>
				<Project />
			</div>
			<div className='mt-36' id='skills'>
				<h2 className="text-2xl sm:text-4xl font-semibold underline text-center text-[#393D3F] mb-12 md:mb-24">My skills.</h2>
				<Skills />	
			</div>
			<div className='mt-36' id='contact'>
				<h2 className="text-2xl sm:text-4xl font-semibold underline text-center text-[#393D3F] mb-12 md:mb-24">Contact me.</h2>
				<Contact />
			</div>
			<div className='mt-24'>
				<p className='text-center text-sm sm:text-base md:text-lg'>© Copyright 2023 − Marco De Amorin</p>
			</div>
		</div>
	</>
  )
}
