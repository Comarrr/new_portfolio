import ProjectCard, { ProjectData } from "./ProjectCard"

import ReactPng from "@/public/react.png"

const projects : ProjectData[] = [
	{
		id: 1,
		title: "Project 1",
		description: "Description",	
		github_url: "https://github.com",
		technos: [
			{
				title: "React",
				img: ReactPng
			}
		]
	},
	{
		id: 2,
		title: "Project 2",
		description: "Description",	
		github_url: "https://github.com",
		technos: [
			{
				title: "React",
				img: ReactPng
			}
		]
	},
	{
		id: 3,
		title: "Project 3",
		description: "Description",	
		github_url: "https://github.com",
		technos: [
			{
				title: "React",
				img: ReactPng
			}
		]
	},
]


const Project = () => {
	
	return (
		
		projects.map((project) => (
			<ProjectCard key={project.id} project={project} />
		))
	)
}

export default Project