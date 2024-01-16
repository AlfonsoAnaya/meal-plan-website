// import { useEffect } from "react"

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
        <nav className="sticky top-0  z-10 bg-white w-100% flex justify-center">
            <div className="flex flex-1 flex-row max-w-[1100px] items-center justify-between mx-[2rem]">
                <h1 id="header-title" className="text-[2.75rem] padding-[.4rem] text-left text-primary">
                    Meal Planner
                </h1>
                <ul className="flex text-primary gap-[1rem] text-[1.25rem] font-[400]">
                    <li className="hover:text-secondary">Recetas</li>
                    <li className="hover:text-secondary">Planes</li>
                    <li className="hover:text-secondary">Ingredientes</li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;