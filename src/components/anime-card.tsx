import {
    PencilSquareIcon,
    StarIcon,
    PlusIcon,
    PlayCircleIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from "next/link";
import RankerButton from "@/components/ranker-button";

export default function MyAnimeListCard ({ title, status, currentEpisode, totalEpisodes, coverImg} : {
    title: string,
    status: string,
    currentEpisode: number,
    totalEpisodes: number,
    coverImg: string
}) {
    return (
        <div className="bg-card p-4 rounded shadow-lg">
            <div>
                <h2>{title}</h2>
                <p className="text-sm text-red-200">{status}</p>
                <p className="text-secondary">{`Episodes: ${currentEpisode}/${totalEpisodes}`}</p>
            </div>
            <div>
                <Image
                    src={coverImg}
                    width={500}
                    height={500}
                    alt="change this later"
                />
            </div>
            <div className="flex space-x-2">
                <button>+1 Episode</button>
                <button>
                    <PencilSquareIcon className="size-6"/>
                </button>
            </div>
        </div>
    )
}

export const AnimeCard = ({ title, rating, totalEpisodes, coverImg, alt, id}: {
    title: string,
    rating: number,
    totalEpisodes: number,
    coverImg: string,
    alt: string,
    id: number
}) => {
    return (
        <div className="bg-card p-4 rounded shadow-lg">
            <RankerButton rank={id}/>
            <div>
                <Image
                    src={coverImg}
                    width={500}
                    height={500}
                    alt={alt}
                />
            </div>
            <div className='flex flex-col mt-3 gap-y-2'>
                <div className='flex flex-row justify-between'>
                    <div>
                        <h2>{title}</h2>
                        <div className='flex items-center gap-1 text-accent-1'>
                            <StarIcon className='size-3.5'/>
                            <p className="text-sm">{`Rating: ${rating}`}</p>
                        </div>
                        <p className="text-secondary">{`Episodes: ${totalEpisodes}`}</p>
                    </div>
                    <div>
                        <Link href={'/preview'}>
                            <PlayCircleIcon className='size-10 text-foreground' />
                        </Link>
                    </div>
                </div>
                <Link href={'/public'}>
                    <button className='flex w-full justify-center gap-1'>
                        <PlusIcon className='size-5.5' />
                        <p>Add to List</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

