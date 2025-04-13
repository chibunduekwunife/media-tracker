import { mockAnimeDB } from "@/lib/seed";
import { AnimeCard } from "@/components/anime-card";
import SectionHeader from '@/components/home/section-headers'

export default function TopTenSection () {
    return (
        <div>
            <div className=''>
                {/*section 1*/}
                <div>
                    <SectionHeader title={'Top 10 Trending Anime This Week'} href={'/'} />
                    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center gap-3'>
                        {mockAnimeDB.slice(0, 5).map(anime => {
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
        </div>
    )
}
