import React from "react";
import { BiBed } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineShower } from "react-icons/md";

type DetailProps = {
  img: any;
  title: any;
  description: any;
  buttonText: any;
  noBed: any;
  noBath: any;
  price: any;
  email: any;
  amenities: any;
};

const DetailCard: React.FC<DetailProps> = ({
  img,
  title,
  description,
  buttonText,
  noBed, 
  noBath, 
  price,
  email,
  amenities
}) => {
  return (
    <div className="top-32 w-full">
      <h3 className="text-4xl pb-4 flex-grow">{title}</h3>
      <div className="flex items-center justify-content-center place-content-center">
        <img
          src={`data:image/jpeg;base64,${img}`}
          className="rounded-2xl h-96 w-2/3"
          alt="the house"
        />
      </div>
      <p className="text pb-4 pt-10 w-full flex-grow">{description}</p>
      <div className="top-32 w-full content-center text-center place-items-center">
        <div className="flex items-center justify-center">
            <BiBed className="h-7 " size={70} />
            <p className="text-lg outline-none mr-8 ">{noBed}</p>
            <MdOutlineShower className="h-7 " size={70} />
            <p className="text-lg outline-none mr-8 ">{noBath}</p>
            <BsCurrencyDollar className="h-7 " size={70}/>
            <p className="text-lg outline-none mr-8 ">{price}</p>
        </div>
        <p className="text pb-4 pt-10 w-full">Amenities: {amenities}</p>
        <a href={"mailto:" + {email}}>{buttonText}</a>
      </div>
      </div>
  );
};
export default DetailCard;
