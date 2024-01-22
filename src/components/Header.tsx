import { useEffect } from "react"
import { Link } from "react-router-dom";
import SearchBar from "./Shared/SearchBar";
import "./Header.css"

function Header() {

    function handleScroll() {
        const headerTitle: HTMLElement | null = document.getElementById("header-title");
        const navUtilities: HTMLElement | null = document.getElementById("nav-utilities")
        if (window.scrollY > 226) {
            headerTitle?.classList.add("small-text");
            navUtilities?.classList.add("align-self-bottom");
        }
        if (window.scrollY < 226) {
            headerTitle?.classList.remove("small-text");
            navUtilities?.classList.remove("align-self-bottom");
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
        <nav className="sticky top-0  z-10 bg-white w-100% flex justify-center align-center px-2 border nav: border-b-primary border-b-[1px]">
            <div className="flex flex-col justify-center align-center w-[100%] max-w-[1100px]">
                <div className="flex flex-1 flex-row  items-center justify-between">

                    {/* Website Name */}
                    <Link to={`/`}>
                        <h1 id="header-title" className="large-text text-[2.75rem] text-left text-primary">
                            Meal Planner
                        </h1>
                    </Link>

                    <div id="nav-utilities" className="flex gap-[1rem] justify-center items-center">
                        {/* Search bar */}
                        <div className="w-[400px]">
                            <SearchBar onSearch={handleSearch} />
                        </div>

                        {/* Login icon */}
                        <div className="w-[auto] hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                className="fill-[#616161] hover:fill-primary transition-hover:fill duration-800"
                            >
                                <path d="M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm2.998 8.571A1.06 1.06 0 0 0 19 16.5c0-1.38-3.686-3-7-3s-7 1.62-7 3c0 .024 0 .048.002.071H5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.429h-.002Z" />
                            </svg>
                        </div>

                        {/* saved recipes icon */}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                className="fill-[#616161] hover:fill-primary transition-fill duration-800"
                            >
                                <path d="M17.875 19a.875.875 0 0 1-1.421.684L12 16.126l-4.454 3.558A.875.875 0 0 1 6.125 19V4.125h11.75V19Z" />
                            </svg>
                        </div>
                    </div>

                </div>
                <div className="">
                    <ul className="flex text-primary gap-[1rem] text-[.85rem] font-[600] uppercase">
                        <Link to={`/`}>
                            <li
                                className="pb-[2px] hover:text-secondary cursor-pointer border-b-[transparent] border-b-[3px] 
                                hover:border-b-secondary hover:border-b-[3px] transition-fill duration-300">
                                Recetas
                            </li>
                        </Link>
                        <Link to={`/`}>
                            <li
                                className="pb-[2px] hover:text-secondary cursor-pointer border-b-[transparent] border-b-[3px] 
                                hover:border-b-secondary hover:border-b-[3px] transition-fill duration-300">
                                Planes
                            </li>
                        </Link>
                        <Link to={`/`}>
                            <li
                                className="pb-[2px] hover:text-secondary cursor-pointer border-b-[transparent] border-b-[3px] 
                                hover:border-b-secondary hover:border-b-[3px] duration-300">
                                Ingredientes
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Header;