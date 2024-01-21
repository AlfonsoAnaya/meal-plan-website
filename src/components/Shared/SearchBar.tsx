import { useState, ChangeEvent, FormEvent } from 'react';
import "./SearchBar.css"

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps): JSX.Element {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(event.target.value);
        console.log(searchTerm)
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Pass the search term to the parent component or perform the search locally
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className="search-component relative">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
                className="w-[100%] outline-none border-b-[1px] focus:border-b-[#4385be] bg-white"
            />
            <button type="submit" className="absolute right-0">
                <img 
                    src="/img/icons/search-icon.svg" 
                    alt="Search Icon" 
                    className="opacity-60"
                />
            </button>
        </form>
    );
}

export default SearchBar;

