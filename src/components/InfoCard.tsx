import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

type InfoCardProps = {
  img: any;
  location: any;
  description: any;
  title: any;
  star: number;
  price: any;
  total: any;
};

const InfoCard: React.FC<InfoCardProps> = ({
  img,
  location,
  description,
  title,
  star,
  price,
}) => {
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80
    hover:shadow-lg transition duration-200 ease-out first:border-t"
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
          <HeartIcon className="h-7 cursor-pointer" />
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
