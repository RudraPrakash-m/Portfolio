import React, { createContext, useContext, useEffect, useState } from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import CustomCursor from "./custom_cursor/CustomCursor";
import ScrollToTop from "./scrolltotop/ScrollToTop";
import axios from "axios";

export const AllData = createContext();

const Layout = () => {
  const [userData, setUserData] = useState([]);
  // console.log("API URL:", import.meta.env.VITE_REACT_APP_API);

  const fData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API}/allusers`
      );
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fData();
  }, []);

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <AllData.Provider value={{ userData }}>
        <Nav />
        <Outlet />
      </AllData.Provider>
    </>
  );
};

export default Layout;
