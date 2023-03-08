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
            <Nav>
                <Bars />
    
                <NavMenu>
                    <NavLink>Coastal Casa Finder</NavLink>
                    <NavLink to='/userInfo' activestyle>
                        User
                    </NavLink>
                    <NavLink to='/' activestyle>
                        Landlord
                    </NavLink>
                    <NavLink to='/sign-up' activestyle>
                        Sign Up
                    </NavLink>
                    <NavLink to='/search' activestyle>
                        Search
                    </NavLink>
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