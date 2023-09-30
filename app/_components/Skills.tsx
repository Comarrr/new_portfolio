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
		<div className="py-8 px-16">
			<h2 className="text-4xl font-semibold underline">Skills</h2>
			<div className="flex flex-col items-center justify-center gap-8 mt-8">
				<Tabs defaultValue="actually" className="flex flex-col gap-4 w-full">
					<TabsList className="flex items-center justify-center gap-4 bg-transparent	">
						<TabsTrigger value="actually">Actually</TabsTrigger>
						<TabsTrigger value="learning">Learning</TabsTrigger>
					</TabsList>
					<TabsContent value="actually">
						<Card className="w-3/4 bg-transparent border border-black rounded-lg">
							<CardContent className="flex flex-wrap gap-16 items-center justify-center py-6">
								<Image src="/js.png" alt="hero" width={60} height={60} />
								<Image src="/react.png" alt="hero" width={60} height={60} />
								<Image src="/sass.png" alt="hero" width={60} height={60} />
								<Image src="/figma.png" alt="hero" width={60} height={60} />
								<Image src="/github.png" alt="hero" width={60} height={60} />
								<Image src="/nodejs.png" alt="hero" width={60} height={60} />
								<Image src="/threejs.png" alt="hero" width={60} height={60} />
								<Image src="/bitmoji.png" alt="hero" width={60} height={60} />
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="learning" >
						<Card className="w-3/4 bg-transparent border border-black rounded-lg">
							<CardContent className="flex flex-wrap gap-16 items-center justify-center py-6">
								<Image src="/typescript.png" alt="hero" width={60} height={60} />
								<Image src="/nextjs.png" alt="hero" width={60} height={60} />
								<Image src="/tailwind.png" alt="hero" width={60} height={60} />
								<Image src="/expo.png" alt="hero" width={60} height={60} />
								<Image src="/postman.png" alt="hero" width={60} height={60} />
								<Image src="/wordpress.png" alt="hero" width={60} height={60} />
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}

export default Skills