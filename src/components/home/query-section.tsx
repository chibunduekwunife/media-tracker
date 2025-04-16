import {
    SearchField,
    DropDownSearchField
} from "@/components/home/query-fields";

import {
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon,
    ArrowDownIcon
} from "@heroicons/react/24/solid";

import {
    Genres,
    Years,
    Season,
    Format
} from "@/lib/queries";


export default function QuerySection () {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-4'>
            <SearchField />
            <DropDownSearchField title={"Genres"} data={Genres}/>
            <DropDownSearchField title={"Years"} data={Years}/>
            <DropDownSearchField title={"Season"} data={Season}/>
            <DropDownSearchField title={"Format"} data={Format}/>
            <div className='bg-card p-4 w-fit cursor-pointer'>
                <AdjustmentsHorizontalIcon className='size-6'/>
            </div>
        </div>
    )
}
