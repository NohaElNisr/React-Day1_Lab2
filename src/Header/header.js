import { useState } from "react";
import img from '../img/mangerdesk1.jpeg'
import './header.css'
export default function Header() {
            
return(
<>

   <img src={require('./mangerdesk1.jpeg')} width="100%" height="10%"></img>
    <div className="container" >
    <h1>Noha Salah</h1>
    <h3>Full Stack Web Developer </h3>
   
    </div>
    </>
)


}