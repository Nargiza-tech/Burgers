import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react"
import MainPage from "./Components/MainPage/MainPage";
import AdminPage from "./Components/Admin/AdminPage";
import AddBurgers from "./Components/Admin/AddBurgers/AddBurgers";
import AddPizza from "./Components/Admin/AddPizza/AddPizza";
import AddSushi from "./Components/Admin/AddSushi/AddSushi";
import AddRolls from "./Components/Admin/AddRools/AddRolls";
import AddSalads from "./Components/Admin/AddSalads/AddSalads";
import AddDrinks from "./Components/Admin/AddDrinks/AddDrinks";
import AddDesserts from "./Components/Admin/AddDesserts/AddDesserts";
import Contacts from "./Components/Contacts/Contacts";
import Comments from "./Components/Admin/Comments/Comments";
import Basket from "./Components/Cart/Cart";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='admin' element={<AdminPage/>}/>
                    <Route path='addBurgers' element={<AddBurgers/>}/>
                    <Route path='addPizza' element={<AddPizza/>}/>
                    <Route path='addSushi' element={<AddSushi/>}/>
                    <Route path='addRolls' element={<AddRolls/>}/>
                    <Route path='addSalads' element={<AddSalads/>}/>
                    <Route path='addDrinks' element={<AddDrinks/>}/>
                    <Route path='addDesserts' element={<AddDesserts/>}/>
                    <Route path='contacts' element={<Contacts/>}/>
                    <Route path='table' element={<Basket/>}/>
                    <Route path='comments' element={<Comments/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
