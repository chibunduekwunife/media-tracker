import {
    Bars4Icon,
    ArrowRightIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function SectionHeader ({ title, href }: {
    title: string,
    href: string
}) {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex flex-row gap-2 text-secondary'>
                <Bars4Icon className='size-8'/>
                <h1 className='mb-2 text-secondary'>{title}</h1>
            </div>
            <div className='hidden lg:block'>
                <Link
                    href={href}
                    className='text-secondary flex gap-2 items-center'>
                    <p>View All</p>
                    <ArrowRightIcon className='size-5'/>
                </Link>
            </div>
        </div>
    )
}
