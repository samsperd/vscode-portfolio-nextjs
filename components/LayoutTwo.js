
const LayoutTwo = ({ children, toggleFiles }) => {
    return ( 
        <div className="flex flex-col md:flex-row overflow-hidden w-full h-full">
            <nav className={toggleFiles ? `bg-[#252526] flex-1 md:flex flex-col md:w-72 md:flex-none text-white` : `hidden`}>
                Files
            </nav>
            <div className={` ${toggleFiles && `hidden md:block`} flex-1 bg-[#1e1e1e] overflow-y-scroll text-white`}>

                Second One
                { children }
            </div>

        </div>
     );
}
 // toggle second div top to be  mt-[-5000px]
 
export default LayoutTwo;