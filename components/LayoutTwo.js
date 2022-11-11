
const LayoutTwo = ({ children, toggleFiles }) => {
    console.log(toggleFiles,'book');
    return ( 
        <div className="flex flex-col md:flex-row overflow-hidden w-full h-full">
            <nav className={toggleFiles ? `bg-gray-500 flex-1 md:flex flex-col md:w-72 md:flex-none` : `hidden`}>
                Files
            </nav>
            <div className={toggleFiles ? "flex-1 hidden md:block bg-blue-900/25 overflow-y-scroll" : "flex-1 bg-blue-900/25 overflow-y-scroll"}>

                Second One
                { children }
            </div>

        </div>
     );
}
 // toggle second div top to be  mt-[-5000px]
export default LayoutTwo;