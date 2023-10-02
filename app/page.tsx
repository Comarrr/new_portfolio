import Image from 'next/image'
import Navbar from './_components/Navbar'
import Links from './_components/Links'
import Contact from './_components/Contact'
import Skills from './_components/Skills'

import Bitmoji from '@/public/bitmoji.png'
import { Button } from '@/components/ui/button'
import { Download, MessageSquare } from 'lucide-react'
import ProjectCard from './_components/Projects/ProjectCard'
import Project from './_components/Projects/Project'

export default function Home() {
  return (
	<>
		<div className="py-8 bg-gradient-to-tr from-[#C1EAFC] to-[#BDD5F9] min-h-screen">
			<Links />
        	<div>
          		<div className='px-8'>
              		<Navbar />
          		</div>
				<div className="flex items-center justify-evenly">
					<div className="pt-24 flex flex-col mb-11">
						<p className="text-xl font-semibold">Hello there ! 👋</p>
						<h1 className="text-8xl font-bold">I'm Comarr</h1>
						<p className="text-6xl font-semibold mt-4">FontEnd Developer</p>
					</div>
					<div className="">
						<Image src={Bitmoji} alt="hero" width={200} height={200} />
					</div>
				</div>
				<div className='flex items-center justify-center gap-8 p-8'>
					<Button className='gap-2'>Download my resume <Download width={20} height={20} /></Button>
					<Button className='gap-2'>Text me <MessageSquare width={20} height={20} /></Button>
				</div>
				<div className='relative left-1/2 transform -translate-x-1/2 bg-[#C5EFCB] shadow-lg w-2/3 mt-16'>
					<div className='flex flex-col gap-8 p-8'>
						<p className='text-xl'>I am 24 years old, and I have a bachelor's degree in web development from HETIC. I worked in a media monitoring company called Mediatree as a web developer where I was able to redesign their website and work on their internal tool.</p>
						<p className='text-xl'>I'm currently looking for a job as a React developer. With my experience and skills in web development, I'm passionate about creating innovative solutions to meet the needs of users and businesses.</p>
					</div>
				</div>
			</div>
			<div className='mt-16'>
				<h2 className="text-4xl font-semibold underline text-center text-[#393D3F]">My projects.</h2>
				<Project />
			</div>
			<div className='mt-16'>
				<h2 className="text-4xl font-semibold underline text-center text-[#393D3F]">My skills.</h2>
				<Skills />	
			</div>
			<Contact />
		</div>
	</>
  )
}
