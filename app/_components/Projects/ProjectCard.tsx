import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type ProjectData = {
	id: number,
	title: string,
	description: string,
	github_url: string,
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
			<CardFooter className="flex items-center justify-between">
				{project.technos.map((techno) => (
					<div className="flex items-center gap-2">
						<p>Stacks :</p>
						<Image key={techno.title} src={techno.img} alt={techno.title} width={40} height={40} />
					</div>
				))}
				<Button >
					<Link className="flex items-center gap-2" href={project.github_url} target="_blank">
						View on Github <Github />
					</Link>
				</Button>
			</CardFooter>
		</Card>
	  )
}

export default ProjectCard