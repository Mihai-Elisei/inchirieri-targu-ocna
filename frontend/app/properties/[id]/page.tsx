import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/apartment1.jpg"
          className="object-cover w-full h-full"
          alt="Apartment 1"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-3 py-6 pr-6">
          <h1 className="mb-4 text-4xl">Property Name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedrooms - 1 bathroom
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/profile_image1.jpg"
              alt="Profile Photo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>
              <strong>John Doe is your host</strong>
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            facilis sint mollitia hic cum minima esse debitis omnis tempora
            suscipit fuga, quidem, impedit, quos vero rerum ab! Rerum, quos
            soluta. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Obcaecati commodi, perferendis officiis vitae explicabo rem
            voluptatem aut, accusantium est sunt fugit esse nisi, natus
            voluptatum delectus molestias modi voluptate. Ratione.
          </p>
        </div>
        <ReservationSidebar />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
