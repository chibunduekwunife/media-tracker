import Link from 'next/link'
import {
    ArrowRightIcon
} from "@heroicons/react/24/solid";
import {heroCardsEntries} from "@/lib/texts";
import Image from 'next/image'

export default function HeroSection () {
    return (
        <div className=''>
            <div className='bg-card text-center py-20'>
                <div className='w-[80%] lg:w-[60%] flex flex-col gap-5 m-auto'>
                    <h1 className='text-4xl'>
                        AniZone - The all in one anime platform!
                    </h1>
                    <h2 className='text-primary'>
                        Track every show you love, discover hidden gems, and
                        share your passion with a community of fellow fans.
                    </h2>
                    <p className='text-secondary italic'>
                        More than a tracker—it’s your anime command center.
                    </p>
                    <div className='mt-5 m-auto'>
                        <button className='flex gap-3 items-center shadow-lg
                        transition-scale ease-in-out duration-300 hover:scale-95
                        font-bold w-[250px] lg:w-[400px] justify-center'>
                            <p className=''>Join Now</p>
                            <ArrowRightIcon className='size-5' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='grid gap-4 lg:grid-cols-2 mt-4'>
                {heroCardsEntries.map(entry => {
                    return (
                        <div
                            key={entry.title}
                            className='bg-card flex gap-10 p-6 lg:p-10'>
                            <div>
                                <Image
                                    width={100}
                                    height={100}
                                    src={entry.img}
                                    alt={entry.alt} />
                            </div>
                            <div>
                                <h2>{entry.title}</h2>
                                <p className='text-secondary text-sm
                                max-w-[80%]'>{entry.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
