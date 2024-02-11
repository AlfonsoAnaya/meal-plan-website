import { Link } from "react-router-dom"

function MobileNavMenu(
    props: { toggleMobileNav: () => void }
) {
    return (
        <div className="nav-toggle flex
                    fixed top-[48px] left-0 right-0 bottom-0 md:static
                    w-[100%] h-[100vh] md:w-auto md:h-auto 
                    translate-x-full md:translate-x-0
                    bg-primary md:bg-transparent
                    justify-center md:justify-start"
        >
            <ul className="flex gap-[2rem] font-[600] uppercase
                        pt-20 md:pt-0
                        text-white md:text-primary
                        flex-col md:flex-row
                        items-center md:items-start
                        text-[1.75em] md:text-[1.05em]"
            >
                <Link to={`/`}>
                    <li
                        onClick={props.toggleMobileNav}
                        className="pb-[2px] hover:text-secondary cursor-pointer border-b-[transparent] border-b-[3px] 
                                hover:border-b-secondary hover:border-b-[3px] transition-fill duration-300">
                        Recetas
                    </li>
                </Link>
                <Link to={`/plan-semanal`}>
                    <li
                        onClick={props.toggleMobileNav}
                        className="pb-[2px] hover:text-secondary cursor-pointer border-b-[transparent] border-b-[3px] 
                                hover:border-b-secondary hover:border-b-[3px] transition-fill duration-300">
                        Plan Semanal
                    </li>
                </Link>
                <Link to={`/database-form`}>
                    <li
                        onClick={props.toggleMobileNav}
                        className="pb-[2px] hover:text-secondary cursor-pointer border-b-[transparent] border-b-[3px] 
                                hover:border-b-secondary hover:border-b-[3px] duration-300">
                        Database Form
                    </li>
                </Link>
                <Link to={`/shopping-list`}>
                    <li
                        onClick={props.toggleMobileNav}
                        className="pb-[2px] hover:text-secondary cursor-pointer border-b-[transparent] border-b-[3px] 
                                hover:border-b-secondary hover:border-b-[3px] duration-300">
                        Lista de Compras
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default MobileNavMenu