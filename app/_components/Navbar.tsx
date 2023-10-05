'use client'


import Link from 'next/link'
import React, { useState } from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'


const Navbar = () => {

	const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='bg-transparent border-gray-200 dark:bg-gray-900'>
		<div className='max-w-screen-xl flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-4'  >
			<Link href='/' className='text-2xl  flex items-center gap-4'>
				<span className='font-semibold'>Comarrr.</span>  
			</Link>
			<Button 
				data-collapse-toggle="navbar-default" 
				aria-controls="navbar-default"
				onClick={toggleMenu}
				aria-expanded={isOpen}  
				className="inline-flex items-center bg-transparent p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
			>
				<span className="sr-only">Open main menu</span>
				<MenuIcon />
			</Button>
			<div className={`w-full md:flex md:w-auto ${isOpen ? '' : 'hidden'}`} id="navbar-default">
					<NavigationMenu className='w-full md:w-auto'>
						<div className=' w-screen md:w-auto'>
							<NavigationMenuList className=' flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 '>
								<NavigationMenuItem>
									<Link href="#projects" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle({className: 'bg-transparent'})} onClick={toggleMenu}>
										projects.
									</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link href="#skills" legacyBehavior passHref>
										<NavigationMenuLink className={navigationMenuTriggerStyle({className: 'bg-transparent'}) } onClick={toggleMenu}>
										skills.
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link href="#contact" legacyBehavior passHref>
										<NavigationMenuLink className={navigationMenuTriggerStyle({className: 'bg-transparent'})} onClick={toggleMenu}>
										contact.
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
							</NavigationMenuList>
						</div>
					</NavigationMenu>
			</div>
		</div>
    </nav>
  )
}

export default Navbar