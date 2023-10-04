import ProjectCard, { ProjectData } from "./ProjectCard"

import wordpressPNG from "@/public/wordpress.png"
import typescriptPNG from "@/public/typescript.png"
import nextjsPNG from "@/public/nextjs.png"
import tailwindPNG from "@/public/tailwind.png"


const projects : ProjectData[] = [
	{
		id: 1,
		title: "TriAAAthlon",
		description: "A site developed with WordPress for the TriAAAthlon association, offering information on future events organized by the association.",	
		website_url: "https://www.triaaathlon.org/",
		technos: [
			{
				title: "Wordpress",
				img: wordpressPNG
			}
		]
	},
	{
		id: 2,
		title: "Nito",
		description: "This is a site dedicated to the artist Nito, listing his musical works. You can listen to them directly on the site or via the various streaming platforms.",	
		github_url: "https://github.com/Comarrr/nino",
		technos: [
			{
				title: "Typescript",
				img: typescriptPNG
			},
			{
				title: "Next.js",
				img: nextjsPNG
			},
			{
				title: "Tailwind",
				img: tailwindPNG
			}
		]
	},
	{
		id: 3,
		title: "Guess The Flag",
		description: "enrich your general knowledge of flags with an entertaining quiz game. Test your knowledge and have a great time discovering flags from all over the world.",	
		github_url: "https://github.com/Comarrr/guess-the-flag",
		technos: [
			{
				title: "Typescript",
				img: typescriptPNG
			},
			{
				title: "Next.js",
				img: nextjsPNG
			},
			{
				title: "Tailwind",
				img: tailwindPNG
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