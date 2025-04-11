import { mockListDB } from "@/lib/seed";
import MyAnimeListCard from "@/components/anime-card";

export default function ListPage () {
    return (
        <div>
            <div className='mx-10'>
                <div className='p-5'>
                    <h1 className='text-center mb-10'>My Watch List</h1>
                    <div className='grid grid-cols-2 lg:grid-cols-4 items-center gap-3'>
                        {mockListDB.map(anime => {
                            return (
                                <MyAnimeListCard
                                    key={anime.title}
                                    title={anime.title}
                                    status={anime.status}
                                    currentEpisode={anime.currentEpisode}
                                    totalEpisodes={anime.totalEpisodes}
                                    coverImg={anime.coverImg}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}