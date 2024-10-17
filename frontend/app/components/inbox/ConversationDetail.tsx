"use client"
import CustomButton from "../forms/CustomButton";

const ConversationDetail = () => {
  return (
    <div>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] px-6 py-4 rounded-xl bg-gray-200">
          <p className="font-bold text-gray-500">John Doe</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            reprehenderit non officia ullam accusantium officiis eum ad sint
            accusamus ipsam! Sint unde consectetur dolorum quo, facere corrupti
            adipisci fugiat accusamus.
          </p>
        </div>
        <div className="w-[80%] ml-[20%] px-6 py-4 rounded-xl bg-blue-200">
          <p className="font-bold text-gray-500">Mihai Elisei</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            reprehenderit non officia ullam accusantium officiis eum ad sint
            accusamus ipsam! Sint unde consectetur dolorum quo, facere corrupti
            adipisci fugiat accusamus.
          </p>
        </div>
      </div>
      <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
        <input
          type="text"
          placeholder="Type your message"
          className="w-full p-2 bg-gray-200 rounded-xl"
        />
        <CustomButton 
            label="send"
            onClick={() => console.log("clicked")}
            className="max-w-[100px]"
        />
      </div>
    </div>
  );
};

export default ConversationDetail;
