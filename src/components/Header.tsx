import { useEffect } from "react"
import { Link } from "react-router-dom";
import SearchBar from "./Shared/SearchBar";
import MobileNavMenu from "./MobileNavMenu";
import "./Header.css"

function Header() {

    // function handleScroll() {
    //     const headerTitle: HTMLElement | null = document.getElementById("header-title");
    //     const navUtilities: HTMLElement | null = document.getElementById("nav-utilities");
    //     console.log(window.scrollY)
    //     if (window.scrollY > 1) {
    //         headerTitle?.classList.add("small-text");
    //         navUtilities?.classList.add("align-self-bottom");
    //     }
    //     if (window.scrollY < 1) {
    //         headerTitle?.classList.remove("small-text");
    //         navUtilities?.classList.remove("align-self-bottom");
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll)
    // }, []);

    const handleSearch = (searchTerm: string) => {
        // Perform the search or update state based on the search term
        console.log('Search term:', searchTerm);
    }

    const toggleMobileNav = () =>  {
        const navToggle = document.querySelector('.header-nav');
        navToggle?.classList.toggle("nav-open");
    }

    return (
        <header className="sticky header-nav top-0 z-10  w-100% flex justify-center align-center px-2 nav: border-b-primary border-b-[1px]
            bg-primary md:bg-white">
            <div className="flex flex-col justify-center align-center w-[100%] max-w-[1100px]">
                <div className="flex flex-1 flex-row  items-center justify-between">

                    {/* Website Name */}
                    <Link to={`/`}>
                        <h1 id="header-title" 
                            className="large-text text-left  
                            text-white md:text-primary
                            text-[2em] md:text-[2.75em]"
                            onClick={toggleMobileNav}>
                            Meal Planner
                        </h1>
                    </Link>

                    <div id="nav-utilities" className="gap-[1rem] justify-center items-center
                        hidden md:flex">
                        {/* Search bar */}
                        <div className="w-[400px]">
                            <SearchBar onSearch={handleSearch} />
                        </div>

                        {/* Login icon */}
                        <div className="hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                className="fill-[#616161] hover:fill-primary transition-hover:fill duration-800"
                            >
                                <path d="M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm2.998 8.571A1.06 1.06 0 0 0 19 16.5c0-1.38-3.686-3-7-3s-7 1.62-7 3c0 .024 0 .048.002.071H5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.429h-.002Z" />
                            </svg>
                        </div>

                        {/* saved recipes icon */}
                        <div className="hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                className="fill-[#616161] hover:fill-primary transition-fill duration-800"
                            >
                                <path d="M17.875 19a.875.875 0 0 1-1.421.684L12 16.126l-4.454 3.558A.875.875 0 0 1 6.125 19V4.125h11.75V19Z" />
                            </svg>
                        </div>

                        {/* Meal Plans */}
                        <div className="hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                className="fill-white stroke-[#616161] hover:stroke-primary transition-fill duration-800"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 19.48 3 18.92 3 17.8V8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 6.52 21 7.08 21 8.2V10M7 3v2m10-2v2M3 9h18m-7.5 4H7m3 4H7m7 4 2.025-.405c.177-.035.265-.053.347-.085a.994.994 0 0 0 .207-.111c.073-.05.136-.114.264-.242L21 16a1.414 1.414 0 1 0-2-2l-4.157 4.157a2.098 2.098 0 0 0-.242.264.994.994 0 0 0-.11.207c-.033.082-.05.17-.086.347L14 21Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="pr-2
                        block md:hidden"
                        onClick={toggleMobileNav}>
                            <span className="hamburger bg-[#616161]">
                            </span>
                        </div>
                </div>

                <MobileNavMenu 
                    toggleMobileNav={toggleMobileNav}
                />
                
            </div>

        </header>
    )
}

export default Header;