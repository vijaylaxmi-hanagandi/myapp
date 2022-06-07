import React from "react";
const Header =()=>{
    return(

       <><nav class="nav"> 
      
          <h2>sunny side</h2>
          <h1 style={{textAlign:"center"}}>We are creatives</h1>
          <ul>
         
               <li><a href="">about</a></li>
               <li><a href="">Services</a></li>
               <li><a href="">project</a></li>
               <li><a href="">contact</a></li>
               <div className="picture">
              <img src="transform.jpg"/></div>
       
           </ul>
   </nav>
 </>
    
    )
}
export default Header;