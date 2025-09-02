import { GiRaspberry, GiStrawberry, GiCorn, GiPeach } from "react-icons/gi";
function FloatingCard (){
    return(
        <>
            <div className="relative md:col-span-1"> 
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs mx-auto h-[300px]">
                    <ul className="space-y-4 text-gray-700 font-medium">
                        <li className="flex items-center  gap-2">
                            <GiRaspberry size={48} className="text-blue-500 text-xl  mt-3" /> Raspberry
                         </li>
                        <li className="flex items-center gap-2">
                            <GiStrawberry size={48} className="text-red-500 text-xl mt-3" /> Strawberry
                        </li>
                         <li className="flex items-center gap-2">
                            <GiCorn size={48} className="text-yellow-500 text-xl  mt-3" /> Maize
                        </li>
                        <li className="flex items-center gap-2">
                            <GiPeach  size={48} className="text-green-500 text-xl  mt-3" /> Apricots
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )

}

export default FloatingCard;