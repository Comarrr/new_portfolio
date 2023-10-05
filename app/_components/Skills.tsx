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
									<Image src="/js.png" alt="hero" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image src="/react.png" alt="hero" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image src="/sass.png" alt="hero" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image src="/figma.png" alt="hero" width={30} height={30} />
								</div>
								<div className="flex justify-center items-center">
									<Image src="/github.png" alt="hero" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image src="/nodejs.png" alt="hero" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image src="/threejs.png" alt="hero" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image src="/wordpress.png" alt="hero" width={60} height={60} />
								</div>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="learning" >
						<Card className="w-3/4 bg-transparent border border-black rounded-lg">
							<CardContent className="grid grid-cols-2 gap-8 items-center justify-center py-6">
								<div className="flex justify-center items-center">
									<Image src="/typescript.png" alt="hero" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image src="/nextjs.png" alt="hero" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image src="/tailwind.png" alt="hero" width={60} height={60} />
								</div>
								<div className="flex justify-center items-center">
									<Image src="/postman.png" alt="hero" width={60} height={60} />
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
	)
}

export default Skills