import Link from "next/link";
import Footer from "./Footer";
import LayoutTwo from "./LayoutTwo";
import { VscAccount, VscExtensions, VscFiles, VscGithub, VscMenu, VscSearch, VscSettingsGear, VscSourceControl } from 'react-icons/vsc'
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
    const [toggleFiles, setToggleFiles] = useState(true)
    const [screenSize, setScreenSize] = useState(null)

    const togglingfiles = () => {
        setToggleFiles(!toggleFiles)
    }

    useEffect(() => {
      
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)

    }, [])

    useEffect(() => {
        if (screenSize < 768) {
            setToggleFiles(false);
        } else {
            setToggleFiles(true);
        }
      

    }, [screenSize])
    

    

    return ( 
        <div className="h-screen w-full">
            <div className="flex md:flex-row flex-col h-full w-full">
                <nav className="md:w-[4.5rem] h-[4.5rem] px-4 md:px-0 md:h-full w-full flex md:flex-col md:justify-between gap-7 py-4 overflow-x-auto overflow-y-hidden text-white/70 bg-[#333333]">
                    <div className="flex-1 flex md:flex-col gap-7">

                        <button className="place-items-center grid">
                            <span>
                                <VscMenu className="h-[20px] w-[20px] md:h-[25px] md:w-[25px]" />
                            </span>
                        </button>
                        <Link href={'/'}>
                            <a onClick={togglingfiles} className="md:border-l-4 place-items-center text-white border-white grid">
                                <span>
                                    <VscFiles className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]" />
                                </span>
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a className="place-items-center grid">
                                <span>
                                    <VscSearch className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]" />
                                </span>
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a className="place-items-center grid">
                                <span>
                                    <VscSourceControl className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]" />
                                </span>
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a className="place-items-center grid">
                                <span>
                                    <VscExtensions className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]" />
                                </span>
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a className="place-items-center grid">
                                <span>
                                    <VscGithub className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]" />
                                </span>
                            </a>
                        </Link>
                    </div>
                    <div className="flex-1 flex md:flex-col items-center md:justify-end md:pb-7 gap-7">
                    <Link href={'/'}>
                            <a className="place-items-center grid">
                                <span>
                                    <VscAccount className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]" />
                                </span>
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a className="place-items-center  grid">
                                <span>
                                    <VscSettingsGear className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]" />
                                </span>
                            </a>
                        </Link>
                    </div>
                </nav>
                <div className=" bg-gray-900 flex-1  overflow-hidden">
                    <LayoutTwo toggleFiles={toggleFiles}>
                        { children }
                    </LayoutTwo>
                </div>
            </div>

            <Footer></Footer>
        </div>
     );
}
 
export default Layout;