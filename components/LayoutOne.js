import Link from "next/link";
import Footer from "./Footer";
import LayoutTwo from "./LayoutTwo";
import { VscExtensions, VscFiles, VscGithub, VscMenu, VscSearch, VscSourceControl } from 'react-icons/vsc'

const Layout = ({ children }) => {
    return ( 
        <div className="md:h-screen w-full grid bg-black ">
            <div className="md:flex">
                <nav className="w-[4.5rem] hidden md:flex flex-col gap-8 py-4">
                    <button className="place-items-center grid text-white/70">
                        <span>
                            <VscMenu size={25} />
                        </span>
                    </button>
                    <Link href={'/'}>
                        <a className="border-l-4 place-items-center text-white border-white grid">
                            <span>
                                <VscFiles size={30} />
                            </span>
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className="place-items-center text-white/70 grid">
                            <span>
                                <VscSearch size={30} />
                            </span>
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className="place-items-center text-white/70 grid">
                            <span>
                                <VscSourceControl size={30} />
                            </span>
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className="place-items-center text-white/70 grid">
                            <span>
                                <VscExtensions size={30} />
                            </span>
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className="place-items-center text-white/70 grid">
                            <span>
                                <VscGithub size={30} />
                            </span>
                        </a>
                    </Link>
                </nav>
                <div className=" bg-red-500 ">

                    <LayoutTwo>
                        { children }
                    </LayoutTwo>
                </div>
            </div>

            <Footer></Footer>
        </div>
     );
}
 
export default Layout;