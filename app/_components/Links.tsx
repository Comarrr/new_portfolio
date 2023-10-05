import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"



const Links = () => {
	
	return (
			<div className="flex flex-col gap-2 fixed bottom-1/4 right-0 p-6 justify-center items-center">
				<Separator orientation="vertical" className="h-8 bg-[#393D3F]" />
				<Link href={"https://github.com/Comarrr"} target="_blank">
					<Github color="#393d3f"/>
				</Link>
				<Link href={"https://www.linkedin.com/in/marco-de-amorin-b235821a4/"} target="_blank">
					<Linkedin color="#393d3f"/>
				</Link>
				<Link href={"mailto:marcodeamorin@icloud.com"} target="_blank">
					<Mail color="#393d3f"/>
				</Link>
				<Separator orientation="vertical" className="h-8 bg-[#393D3F]" />
			</div>
	)
}

export default Links

