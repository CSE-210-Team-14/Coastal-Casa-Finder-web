import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navBarElems';
  
const Navbar = () => {
  return (
    <>
        <header>
            <Nav className="sticky overflow-hidden top-0 w-full">
                <Bars />
    
                <NavMenu>
                    <NavLink>Coastal Casa Finder</NavLink>
                    <NavBtn>
                        <NavBtnLink to='/userInfo'>Home</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to='/'>Landlord</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to='/search'>Search</NavBtnLink>
                    </NavBtn>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </header>
    </>
  );
};
  
export default Navbar;