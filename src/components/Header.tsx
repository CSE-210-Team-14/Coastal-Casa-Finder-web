import React, { useState } from "react";
import { SearchIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import { MdOutlineShower } from 'react-icons/md';
import { BiBed } from 'react-icons/bi';
import Slider from '@mui/material/Slider';
import { BsCurrencyDollar } from 'react-icons/bs';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import "./datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';

type HeaderProps = {
  placeholder?: any;
  showSignup?: any;
};


const Header: React.FunctionComponent<HeaderProps> = ({ 
  placeholder, showSignup}) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [noBed, setNoBed] = useState<any>(1);
  const [noBath, setNoBath] = useState<any>(1);
  const [price, setPrice] = useState<any>(1000);
  const [dist, setDist] = useState<any>(10);

  const handleSelect = (startDate: any) => {
    setStartDate(startDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    //TODO add backend call
  };
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10" >
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <img
          src={require('./cc.png')} style={{width: 80, height: 80}}
          alt="company logo"
        />
      </div>

      <div className="flex items-center border-2 rounded-full py-2  md:border-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400"
          placeholder={placeholder || "Search for location"}
          type="text"
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-blue-400 text-white rounded-full
        p-2 cursor-pointer md:mx-2" onChange={search}
        />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer" onClick={showSignup}>
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <div className="flex items-center mb-6">
            Start Date
          <DatePicker onChange={handleSelect} value={startDate} className='react-date-picker'/>
          </div>
          <div className="flex items-center mb-4">
            Radius (miles)
            <Slider
            size="small"
            defaultValue={dist}
            aria-label="Small"
            valueLabelDisplay="auto"
            onChange={setDist}
            />
          </div>
          
          <div className="flex items-center mb-6 pl-4">
            <BiBed className="h-5" />
            <input
              value={noBed}
              onChange={(e) => setNoBed(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg items-center outline-none"
            />
            <MdOutlineShower className="h-5" />
            <input
              value={noBath}
              onChange={(e) => setNoBath(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none items-center"
            />
            <BsCurrencyDollar className="h-5" />
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min={1}
              type="number"
              className="w-20 pl-2 text-lg items-center outline-none"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-blue-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
