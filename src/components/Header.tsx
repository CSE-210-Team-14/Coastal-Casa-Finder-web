import React, { useState, useEffect } from "react";
import { SearchIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import { MdOutlineShower } from "react-icons/md";
import { BiBed } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import "./datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "../containers/signup/SignUpContainer";
import Button from "@mui/material/Button";

type HeaderProps = {
  placeholder?: any;
  showSignup?: any;
  search?: any;
  hideSignup?: any;
  dismissSignup?: any;
  userLoginState?: any;
  useremail?: any;
};

const Header: React.FunctionComponent<HeaderProps> = ({
  placeholder,
  showSignup,
  search,
  hideSignup,
  dismissSignup,
  userLoginState,
  useremail,
}) => {
  var [searchInput, setSearchInput] = useState("");
  var [noBed, setNoBed] = useState<any>(1);
  var [noBath, setNoBath] = useState<any>(1);
  var [price, setPrice] = useState<any>(1000);
  var [showSearchBar, setShowSearchBar] = useState<any>(true);
  const [email, setEmail] = useState<any>("");
  const [userButtonOnClick, setUserButtonOnClick] = useState(false);

  const resetInput = () => {
    showSearchBarFunc(true)
    setSearchInput("");
  };
  const showSearchBarFunc = (e) => {
    setShowSearchBar(e);
  };

  useEffect(() => {
    setEmail(useremail);
  }, [useremail]);

  const handleLogin = (e: any) => {
    e.preventDefault();
    setUserButtonOnClick(true);
    console.log("in login");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    localStorage.removeItem("JWTToken");
    window.dispatchEvent(new Event("storage"));
    console.log("in logout");
  };

  console.log("In header", useremail);

  return (
    <header className="sticky top-85 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <img
          src={require("./cc.png")}
          style={{ width: 80, height: 80 }}
          alt="company logo"
        />
      </div>

      <div className="flex items-center border-2 rounded-full py-2  md:border-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={function (e) {
            showSearchBarFunc(true);
            setSearchInput(e.target.value)}}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400"
          placeholder={placeholder || "Search for location"}
          type="text"
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-blue-400 text-white rounded-full
        p-2 cursor-pointer md:mx-2"
          onClick={function () {
            showSearchBarFunc(false);
            search(searchInput, price, noBed, noBath);
          }}
        />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        {email?.length > 0 ? (
          <>
            <Button type="submit" onClick={handleLogout}>
              Logout
            </Button>
            <div
              className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer"
              onClick={showSignup}
            >
              <MenuIcon className="h-6" />
              <UserCircleIcon className="h-6" />
            </div>
          </>
        ) : (
          <Button type="submit" onClick={handleLogin}>
            Signup/SignIn
          </Button>
        )}
      </div>

      {searchInput && showSearchBar && (
        <div className="flex flex-col col-span-3 mx-auto">
          <div className="flex items-center mb-4">
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
            <button
              className="flex-grow text-blue-400"
              onClick={function () { 
                showSearchBarFunc(false);
                search(searchInput, price, noBed, noBath);
              }}
            >
              Search
            </button>
          </div>
        </div>
      )}

      {userButtonOnClick ? (
        <div>
          <SignUp dismissSignup={() => setUserButtonOnClick(false)} />{" "}
        </div>
      ) : null}
    </header>
  );
};
export default Header;
