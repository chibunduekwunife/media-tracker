
import Link from 'next/link'

export default function Navbar () {
    return (
        <div className="bg-foreground mb-5 p-5">
            <Link
            href={'/'}
            className="text-background text-2xl font-extrabold">
                AniZone | Ratings & Community Reviews
            </Link>
        </div>
    )
}
