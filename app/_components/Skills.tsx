'use client'

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image"

const imageLoader = ({ src }: { src: string }) => {
	return `https://comarrr.dev/${src}`
}


const Skills = () => {

	return (
			<div className="flex flex-col items-center justify-center gap-8 mt-8">
				<Tabs defaultValue="mastery" className="flex flex-col gap-4 w-full">
					<TabsList className="flex items-center justify-center gap-24 bg-transparent mb-16">
						<TabsTrigger value="mastery">Mastery</TabsTrigger>
						<TabsTrigger value="learning">Learning</TabsTrigger>
					</TabsList>
					<TabsContent value="mastery">
						<Card className="w-3/4 bg-transparent border border-black rounded-lg">
							<CardContent className="grid grid-cols-4 gap-8 items-center justify-center py-6">
								<div className="flex justify-center items-center">
									<Image loader={imageLoader} src="js.png" alt="JavaScript" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image loader={imageLoader} src="react.png" alt="React" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image loader={imageLoader} src="sass.png" alt="Sass" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image loader={imageLoader} src="figma.png" alt="Figma" width={30} height={30} />
								</div>
								<div className="flex justify-center items-center">
									<Image loader={imageLoader} src="github.png" alt="Github" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image loader={imageLoader} src="nodejs.png" alt="Nodejs" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image loader={imageLoader} src="threejs.png" alt="Threejs" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image loader={imageLoader} src="wordpress.png" alt="Wordpress" width={60} height={60} />
								</div>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="learning" >
						<Card className="w-3/4 bg-transparent border border-black rounded-lg">
							<CardContent className="grid grid-cols-2 gap-8 items-center justify-center py-6">
								<div className="flex justify-center items-center">
									<Image loader={imageLoader} src="typescript.png" alt="Typescript" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image loader={imageLoader} src="nextjs.png" alt="Nextjs" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image loader={imageLoader} src="tailwind.png" alt="Tailwind" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image loader={imageLoader} src="expo.png" alt="Expo" width={60} height={60} />
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
	)
}

export default Skills