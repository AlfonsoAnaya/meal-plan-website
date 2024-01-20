// import { useEffect } from "react"
import { Link } from "react-router-dom";

function Header() {

    // function handleScroll() {
    //     const headerTitle:any = document.getElementById("header-title");
    //     console.log(headerTitle);
    //     if (window.scrollY > 226 && !headerTitle.classList.contains("visible")) {
    //         headerTitle.classList.add("visible")
    //     }
    //     if (window.scrollY < 226 && headerTitle.classList.contains("visible")) {
    //         headerTitle.classList.remove("visible")
    //     }
    // }

    // useEffect( () => {
    //     window.addEventListener("scroll", handleScroll)
    // }, []);

    return (
        <nav className="sticky top-0  z-10 bg-white w-100% flex justify-center border-b-primary border-b-[1px]">
            <div className="flex flex-1 flex-row max-w-[1100px] items-center justify-between mx-[2rem] ">

                <Link to={`/`}>
                    <h1 id="header-title" className="text-[2.75rem] padding-[.4rem] text-left text-primary">
                        Meal Planner
                    </h1>
                </Link>
                <ul className="flex text-primary gap-[1rem] text-[1.25rem] font-[400]">
                    <li className="hover:text-secondary cursor-pointer">Recetas</li>
                    <li className="hover:text-secondary cursor-pointer">Planes</li>
                    <li className="hover:text-secondary cursor-pointer">Ingredientes</li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;