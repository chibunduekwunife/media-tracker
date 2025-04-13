"use client"

import AniZoneLogo from './logo'
import { navLinks } from "@/lib/links";
import Link from 'next/link'
import { usePathname } from "next/navigation";
import clsx from 'clsx'
import {
    Bars4Icon,
    LockClosedIcon
} from "@heroicons/react/24/solid";

export default function Navbar () {
    const pathname = usePathname();
    return (
        <nav className='flex justify-between items-center'>
            <div>
                <AniZoneLogo />
            </div>
            <div className='hidden lg:flex justify-center items-center gap-4'>
                {navLinks.map(link => {
                    return (
                        <Link
                            key={link.id}
                            href={link.href}
                            className={clsx('nav-link',
                                {
                                    'text-secondary': link.href === pathname,
                                }
                                )}>
                            {link.title}
                        </Link>
                    )
                })}
            </div>
            <div className='flex items-center'>
                {/*Auth*/}
                <div className='hidden lg:flex items-center justify-center gap-4'>
                    <Link
                        href='/login'
                        className='text-background font-bold'>
                        Login
                    </Link>
                    <Link
                        href={'/sign-up'}
                        className='nav-button flex gap-1 items-center justify-center'>
                        <LockClosedIcon className='size-4.5'/>
                        <p>Sign Up</p>
                    </Link>
                </div>
                <Bars4Icon className='size-8 lg:hidden text-background font-bold'/>
            </div>
        </nav>
    )
}
