"use client"
import { MdOutlineTypeSpecimen } from "react-icons/md";
import { usePathname } from "next/navigation";
import {
    footerLinks,
    socialIconLinks
} from "@/lib/links";
import clsx from 'clsx';
import Link from 'next/link';

export default function Footer () {
    const pathname = usePathname()
    return (
        <footer className='mt-30 flex py-15'>
            <div className="flex flex-col w-full lg:flex-row items-center
            lg:justify-between gap-15">
                <div className='flex lg:flex-col gap-10'>
                    <div className=''>
                        <h3 className="text-background">Customize Theme</h3>
                        <div className='flex'>
                            <MdOutlineTypeSpecimen className='size-7 text-background'/>
                            <MdOutlineTypeSpecimen className='size-7 text-background'/>
                            <MdOutlineTypeSpecimen className='size-7 text-background'/>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-background">Our Social Platforms</h3>
                        <div className='flex gap-2'>
                            {socialIconLinks.map(link => {
                                const IconComponent = link.icon;
                                return (
                                    <Link
                                        key={link.id}
                                        href={link.href}
                                        aria-label={link.title}
                                        className='text-background hover:text-accent-1
                                        transition-colors'>
                                        <IconComponent className='size-8' />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-25 gap-y-8 lg:grid-cols-4 lg:gap-9">
                    {footerLinks.map((column, columnIndex) => (
                        <div
                            key={columnIndex}
                            className="flex flex-col gap-2">
                            {column.map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className='text-background hover:text-accent-1
                                    transition-colors font-semibold'
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}
