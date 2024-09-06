import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/frontend/HomeComponent";
import HeaderComponent from "./components/frontend/HeaderComponent";
import FooterComponent from "./components/frontend/FooterComponent";
import SpeakersComponent from "./components/frontend/SpeakersComponent";


export default function Router(){
    return(        
        <BrowserRouter>
         <HeaderComponent></HeaderComponent>
            <Routes>            
                <Route path="/" element={<HomeComponent />}></Route>            
                <Route path="/speakers" exact element={<SpeakersComponent />}></Route>
               
            </Routes>
        <FooterComponent></FooterComponent>
    </BrowserRouter>
    );

}


