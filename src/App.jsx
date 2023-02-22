import "./App.css"
import { List } from "./List";
import { Routes, Route } from "react-router-dom"
import { AddCard } from "./AddCard";
export default function App(){
  
  return(
    <div>
         <Routes>
          
             <Route path="/" element={ <List /> } />
             <Route path="/addcard/:id" element={ <AddCard /> } />
         </Routes>
         
   </div>
  );
}



