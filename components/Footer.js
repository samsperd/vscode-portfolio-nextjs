import { VscBell, VscCheckAll, VscError, VscFeedback, VscSourceControl, VscSync, VscWarning } from "react-icons/vsc";

const Footer = () => {
    return ( 
        <footer className="bg-blue-700 text-white h-6 fixed bottom-0 left-0 right-0 md:px-4 px-1">
            <div className="flex items-center h-full">
                <div className="flex flex-1 items-center text-sm gap-3">
                    <span className="flex items-center justify-center text-sm px-2 hover:bg-blue-700/60 gap-1 h-full">
                    <VscSourceControl strokeWidth={0.5} size={15} />
                    main
                    </span>
                    <span className="">
                        <VscSync strokeWidth={0.5} size={15} />
                    </span>
                    <span className="flex  items-center gap-1">
                            <VscError strokeWidth={0.5} size={15} />
                            0
                            <VscWarning strokeWidth={0.5} size={15} />
                            3
                    </span>
                </div>
                <div className="flex-1 flex items-center text-sm justify-end gap-5">
                    <span className="hidden md:block">
                        UTF-8
                    </span>
                    <span className="hidden md:block">
                        Javascript
                    </span>
                    <span className="md:hidden">
                        JS
                    </span>
                    <span className="flex items-center px-2 gap-1">
                        <VscCheckAll strokeWidth={0.5} size={15} />
                        Prettier
                    </span>
                    <span>
                        <VscFeedback strokeWidth={0.5} size={15} />
                    </span>
                    <span>
                        <VscBell strokeWidth={0.5} size={15} />
                    </span>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;