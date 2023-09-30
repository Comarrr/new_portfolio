'use client'


import Link from 'next/link'
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { Layers } from 'lucide-react'


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-8 border border-slate-100 bg-white/60 backdrop-blur-lg drop-shadow-xl rounded-2xl'>
        <Link href='/' className='text-2xl  flex items-center gap-4'>
            <Layers className='flex items-center gap-2'/>
            <span className='font-semibold'>Comarrr</span>  
        </Link>

        <NavigationMenu>
      		<NavigationMenuList>
        		<NavigationMenuItem>
          			<Link href="/about" legacyBehavior passHref>
            		<NavigationMenuLink className={navigationMenuTriggerStyle({className: 'bg-transparent'})}>
              			About me
            		</NavigationMenuLink>
          			</Link>
        		</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/projects" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle({className: 'bg-transparent'})}>
						Projects
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/work" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle({className: 'bg-primary text-white hover:bg-primary-foreground'})}>
						Work with me
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
    </nav>
  )
}

export default Navbar