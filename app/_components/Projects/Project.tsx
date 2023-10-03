import ProjectCard, { ProjectData } from "./ProjectCard"

import wordpressPNG from "@/public/wordpress.png"
import typescriptPNG from "@/public/typescript.png"
import nextjsPNG from "@/public/nextjs.png"
import tailwindPNG from "@/public/tailwind.png"


const projects : ProjectData[] = [
	{
		id: 1,
		title: "TriAAAthlon",
		description: "Un site fait avec Wordpress pour l'association TriAAAthlon qui permet de se renseigner sur les prochains événements de l'association. ",	
		website_url: "https://www.triaaathlon.org/adrenaline/",
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
		description: "Un site pour un artiste sous le nom de Nito qui repertorie ses œuvres musicales que l'on peut écouter directement sur le site ou sur les différentes plateformes de streaming.",	
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
		description: "Un petit jeu de quiz pour tester votre culture générale en drapeau. ",	
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