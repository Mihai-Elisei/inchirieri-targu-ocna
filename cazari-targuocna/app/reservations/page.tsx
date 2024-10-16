import Image from "next/image";

const ReservationsPage = () => {
    return(
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="pt-6 pb-2 my-6">
                <h1 className="text-2xl">My Reservations</h1>
            </div>
            <div className="space-y-4">
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image fill src="/apartment1.jpg" className="hover:scale-110 object-cover transiton h-full w-full" alt="Apartment image" />
                        </div>
                    </div>
                    <div className="col-span-3 space-y-2">
                        <h2 className="mb-4 tex-xl">Property Name</h2>
                        <p><strong>Check in date:</strong>20/10/2024</p>
                        <p><strong>Check out date:</strong>30/10/2024</p>
                        <p><strong>Number of nights:</strong>10</p>
                        <p><strong>Total price:</strong> $600</p>
                        <div className="cursor-pointer inline-block px-6 py-4 bg-main hover:bg-main-dark text-white rounded-xl mt-6">Go to property</div>
                    </div>
                   
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image fill src="/apartment1.jpg" className="hover:scale-110 object-cover transiton h-full w-full" alt="Apartment image" />
                        </div>
                    </div>
                    <div className="col-span-3 space-y-2">
                        <h2 className="mb-4 tex-xl">Property Name</h2>
                        <p><strong>Check in date:</strong>20/10/2024</p>
                        <p><strong>Check out date:</strong>30/10/2024</p>
                        <p><strong>Number of nights:</strong>10</p>
                        <p><strong>Total price:</strong> $600</p>
                        <div className="cursor-pointer inline-block px-6 py-4 bg-main hover:bg-main-dark text-white rounded-xl mt-6">Go to property</div>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default ReservationsPage;