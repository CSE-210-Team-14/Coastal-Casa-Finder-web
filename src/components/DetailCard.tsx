import React from "react";

type DetailProps = {
  img: any;
  title: any;
  description: any;
  buttonText: any;
  bed: any;
  bath: any;
};

const DetailCard: React.FC<DetailProps> = ({
  img,
  title,
  description,
  buttonText,
  bed, 
  bath
}) => {
  return (
    <div className="">
      <h1 className="justify-between text-3xl font-semibold mt-2 mb-6"> Details </h1>
      <div className="justify-between h-1/6 w-4/5">
        <img
          src={`data:image/jpeg;base64,${img}`}
          className="ml-44 rounded-2xl flex flex-col justify-center items-center w-full h-96 pb-4"
        />
      </div>
      <div className="top-32 left-12">
        <h3 className="text-4xl pb-4">{title}</h3>
        <p className="text pb-4">{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
      </div>
  );
};
export default DetailCard;
