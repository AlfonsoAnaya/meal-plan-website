import { useEffect } from "react"
import { Link } from "react-router-dom";
import SearchBar from "./Shared/SearchBar";
import "./Header.css"

function Header() {

    function handleScroll() {
        const headerTitle: any = document.getElementById("header-title");
        if (window.scrollY > 226 && !headerTitle.classList.contains("small-text")) {
            headerTitle.classList.add("small-text")
        }
        if (window.scrollY < 226 && headerTitle.classList.contains("small-text")) {
            headerTitle.classList.remove("small-text")
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, []);

    const handleSearch = (searchTerm: string) => {
        // Perform the search or update state based on the search term
        console.log('Search term:', searchTerm);
    }

    return (
        <nav className="sticky top-0  z-10 bg-white w-100% flex justify-center border-b-primary border-b-[1px]">
            <div className="flex flex-col">
                <div className="flex flex-1 flex-row min-w-[1100px] items-center justify-between px-[2rem] ">

                    {/* Website Name */}
                    <Link to={`/`}>
                        <h1 id="header-title" className="large-text text-[2.75rem] padding-[.4rem] text-left text-primary">
                            Meal Planner
                        </h1>
                    </Link>

                    {/* Search bar */}
                    <div className="w-[400px]">
                        <SearchBar onSearch={handleSearch} />
                    </div>

                    {/* Login icon */}
                    <div className="w-[40px] hover:cursor-pointer">
                        <img
                            src="/img/icons/search-icon.svg"
                            alt="Search Icon"
                            className="opacity-60"
                        />
                    </div>
                </div>
                <div>
                    <ul className="flex text-primary gap-[.75rem] text-[.85rem] font-[400] uppercase">
                        <li className="hover:text-secondary cursor-pointer">Recetas</li>
                        <li className="hover:text-secondary cursor-pointer">Planes</li>
                        <li className="hover:text-secondary cursor-pointer">Ingredientes</li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Header;