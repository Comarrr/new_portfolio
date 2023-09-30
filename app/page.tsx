import Image from 'next/image'
import Navbar from './_components/Navbar'
import Links from './_components/Links'
import Contact from './_components/Contact'
import Skills from './_components/Skills'

export default function Home() {
  return (
	<>
		<div className="py-8 bg-gradient-to-tr from-[#C5EFCB] to-[#C0FBFF] min-h-screen">
			<Links />
        	<div >
          		<div className='px-8'>
              		<Navbar />
          		</div>
				<div className=" flex flex-col justify-center items-center lg:mt-24 gap-8">
					<h1 className="text-8xl font-semibold">FrontEnd Developer.</h1>
					<Image src="/bitmoji.png" alt="hero" width={350} height={350} />
				</div>
			</div>
			<Skills />
			<Contact />
		</div>
	</>
  )
}
