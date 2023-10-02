import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"



const Links = () => {
	
	return (
			<div className="flex flex-col gap-2 fixed bottom-1/4 right-0 p-6">
				<Separator orientation="vertical" />
				<Link href={"https://github.com/Comarrr"} target="_blank">
					<Github />
				</Link>
				<Link href={"https://www.linkedin.com/in/marco-de-amorin-b235821a4/"} target="_blank">
					<Linkedin />
				</Link>
				<Link href={"mailto:marcodeamorin@icloud.com"} target="_blank">
					<Mail />
				</Link>
				<Separator orientation="vertical"/>
			</div>
	)
}

export default Links

