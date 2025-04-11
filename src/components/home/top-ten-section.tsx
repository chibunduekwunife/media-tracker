import { mockAnimeDB } from "@/lib/seed";
import { AnimeCard } from "@/components/anime-card";
import {
    Bars4Icon
} from '@heroicons/react/24/solid'

export default function TopTenSection () {
    return (
        <div className='mx-10'>
            <div className='p-5'>
                <div className='flex flex-row gap-2'>
                    <Bars4Icon className='size-8 text-primary'/>
                    <h1 className='mb-2 text-primary'>Top 10 Anime this Week</h1>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-5 items-center gap-3'>
                    {mockAnimeDB.map(anime => {
                        return (
                            <AnimeCard
                                key={anime.title}
                                title={anime.title}
                                rating={anime.rating}
                                totalEpisodes={anime.totalEpisodes}
                                coverImg={anime.coverImg}
                                alt={anime.alt}
                                id={anime.id}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
