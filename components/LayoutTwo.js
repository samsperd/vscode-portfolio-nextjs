const LayoutTwo = ({ children }) => {
    return ( 
        <div className="md:grid grid-cols-5">
            <nav className="bg-gray-500">
                Files
            </nav>
            <div className="col-span-3">

                Second One
                { children }
            </div>

        </div>
     );
}
 
export default LayoutTwo;