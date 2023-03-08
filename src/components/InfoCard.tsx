import React from "react";

type InfoCardProps = {
  id: any;
  img: any;
  location: any;
  description: any;
  title: any;
  price: any;
  showDetail: any;
};

const InfoCard: React.FC<InfoCardProps> = ({
  id, 
  img,
  location,
  description,
  title,
  price,
  showDetail,
}) => {
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80
    hover:shadow-lg transition duration-200 ease-out first:border-t"
    onClick={function() {showDetail(id)}}
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
      <img
          src={`data:image/jpeg;base64,${img}`}
          className="rounded-2xl md:w-80 md:h-52"
          alt="house"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
        </div>
        <h4 className="text-xl text-left">{title}</h4>
        <div className="border-b w-10 pt-3" />
        <p className="pt-2 text-sm text-left text-gray-500 flex-grow">{description.substring(0, 300)+"..."}</p>
        <div className="flex justify-between">
          <p className="flex items-center">
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">
              $ {price} rent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoCard;
