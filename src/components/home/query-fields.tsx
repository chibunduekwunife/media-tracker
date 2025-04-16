
interface Queries {
    id: number | string,
    name: string | number,
    href: string
}


export const SearchField = () => {
    return (
        <div>
            <h3>Search</h3>
            <div className="">
                <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Search Anime"
                />
            </div>
        </div>
    )
}

export const DropDownSearchField = ({ title, data }: {
    title: string;
    data: Array<Queries>;
}) => {
    // create *unique* ids for the input and the datalist
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    const inputId = `${slug}-input`;
    const listId = `${slug}-list`;

    return (
        <div>
            <label htmlFor={inputId}>
                <h3>{title}</h3>
            </label>
            <div className="">
                <input
                    type="text"
                    id={inputId}       // unique
                    list={listId}      // matches the datalist below
                    name={slug}
                    placeholder={`Select ${title}`}
                />
                <datalist id={listId}>
                    {data.map((item) => (
                        // no duplicate ids, and children are optional on <option>
                        <option key={item.id} value={String(item.name)} />
                    ))}
                </datalist>
            </div>
        </div>
    );
};

