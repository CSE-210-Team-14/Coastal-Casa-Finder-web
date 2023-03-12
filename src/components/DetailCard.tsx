import React from "react";
import { BiBed } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineShower } from "react-icons/md";

type DetailProps = {
  img: any;
  title: any;
  description: any;
  buttonText: any;
  apply: any;
  formDetails: any;
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
  apply,
  formDetails,
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
        <div>
            <button
            className="m-auto bg-slate-300 p-3 mb-5 mt-2 rounded"
            onClick={() => {document.getElementById("app-form").style.display = "block";}}>
            {apply}
            </button>
        </div>
        <div id="app-form" className="hidden fixed m-auto w-1/3 h-200 top-1/3 left-1/3 shadow p-4 rounded z-[20]">
          <div>
            <h2 className="mb-6">Application for Listing</h2>
            <div className="mb-6">
              <p>Name: </p>
              <input id="form-name" placeholder="Name"></input>
            </div>
            <div className="mb-6">
              <p>Move-In Date: </p>
              <input id="form-move" placeholder="Date"></input>
            </div>
            <div className="mb-6">
              <p>No. of Residents: </p>
              <input type="number" min="0" id="form-res" placeholder="Residents"></input>
            </div>
            <div className="mb-6">
              <p>Credit Score: </p>
              <input id="form-score" placeholder="Score"></input>
            </div>
            <button className="mb-6 mr-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={() => {
            formDetails.name = document.getElementById("form-name").value;
            formDetails.move = document.getElementById("form-move").value;
            formDetails.residents = document.getElementById("form-res").value;
            formDetails.score = document.getElementById("form-score").value;
            console.log(formDetails);
            document.getElementById("app-form").style.display = "none";}}>
              Submit
            </button>
            <button className="mb-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={() => {document.getElementById("app-form").style.display = "none";}}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailCard;
