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
import { Separator } from '@/components/ui/separator'


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center '>
        <Link href='/' className='text-2xl  flex items-center gap-4'>
            <span className='font-semibold'>Comarrr.</span>  
        </Link>
        <NavigationMenu>
      		<NavigationMenuList>
        		<NavigationMenuItem>
          			<Link href="#projects" legacyBehavior passHref>
            		<NavigationMenuLink className={navigationMenuTriggerStyle({className: 'bg-transparent'})}>
              			projects.
            		</NavigationMenuLink>
          			</Link>
        		</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="#skills" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle({className: 'bg-transparent'}) }>
						skills.
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="#contact" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle({className: 'bg-transparent'})}>
						contact.
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
		<div className="flex gap-4 items-center justify-center">
			<span>FR</span>
			<Separator orientation="vertical" className='h-8 bg-[#393D3F]'/>
			<span>EN</span>
		</div>
    </nav>
  )
}

export default Navbar