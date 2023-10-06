import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Globe } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const imageLoader = ({ src }: { src: string }) => {
	return `https://comarrr.dev/${src}`
}

export type ProjectData = {
	id: number,
	title: string,
	description: string,
	github_url?: string,
	website_url?: string,
	technos: {
		title: string,
		img: StaticImageData
	}[],
}

type ProjectCardProps = {
	project: ProjectData;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	  return (
		<Card className="w-2/3 rounded-lg mt-8 relative left-1/2 transform -translate-x-1/2 bg-[#C5EFCB] shadow">
			<CardHeader>
				<CardTitle>{project.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription>{project.description}</CardDescription>
			</CardContent>
			<CardFooter className="flex flex-col gap-4 items-center justify-center md:flex-row md:justify-between">
				<p className="flex items-center gap-2 text-sm sm:text-base">Technos : {project.technos.map((techno) => (
						<Image loader={imageLoader} key={techno.title} src={techno.img} alt={techno.title} layout="fixed" objectFit="cover" className=" h-8 w-8 bg-transparent"/>
				))}</p>
				{
					project.website_url ? (
						<Button >
							<Link className="flex items-center gap-2" href={project.website_url} target="_blank">
								View website <Globe />
							</Link>
						</Button>
					)
						: null
				}
				{
					project.github_url ? (
						<Button >
							<Link className="flex items-center gap-2" href={project.github_url} target="_blank">
								View on Github <Github />
							</Link>
						</Button>
					)
						: null
				}

				
			</CardFooter>
		</Card>
	  )
}

export default ProjectCard