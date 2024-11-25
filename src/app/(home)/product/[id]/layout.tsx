export default function ProductLayout({
    children,
}:{
    children: React.ReactNode
}) {
    return (
    <div className="flex flex-1">
        

        <div className="bg-gray-800 text-white w-1/6 p-4">
          <ul>
            <li className="mb-4 cursor-pointer hover:underline">Overview</li>
            <li className="mb-4 cursor-pointer hover:underline">Map</li>
            <li className="mb-4 cursor-pointer hover:underline">Logbook</li>
            <li className="mb-4 cursor-pointer hover:underline">History</li>
            <li className="mb-4 cursor-pointer hover:underline">Configuration</li>
          </ul>
        </div>

        {children}
        
        <div>
            <h2>Featured prodcut Section</h2>
        </div>

    </div>
    )
}