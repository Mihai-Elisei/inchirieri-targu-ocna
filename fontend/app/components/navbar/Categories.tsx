import Image from "next/image";

const Categories = () => {
    return(
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/apartment.png" alt="Category Apartament Icon" width={20} height={20}/>
                <span className="text-xs">Apartments</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/villa.png" alt="Category Villa Icon" width={20} height={20}/>
                <span className="text-xs">Villas</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/cabin.png" alt="Category Cabin Icon" width={20} height={20}/>
                <span className="text-xs">Cabins</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/hotel.png" alt="Category Hotel Icon" width={20} height={20}/>
                <span className="text-xs">Hotels</span>
            </div>
        </div>
    )
}

export default Categories;