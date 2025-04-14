import {
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon,
    ArrowDownIcon
} from "@heroicons/react/24/solid";


export const SearchField = () => {
    return (
        <div>
            <h3>Search</h3>
            <div className="flex items-center bg-card w-fit">
                <MagnifyingGlassIcon className='size-4 text-secondary mx-2.5' />
                <input
                    type="text"
                    id="search"
                    name="search"
                />
            </div>
        </div>
    )
}
