export default function RankerButton ({ rank }: {rank: number}) {
    return (
        <div className='flex rounded-full bg-background w-[50px] h-[50px]
        items-center justify-center absolute shadow-2xl m-2'>
            <h1>{rank}</h1>
        </div>
    )
}
