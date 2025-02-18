// import React from "react";
import Feedback from "./Feedback"
import './footer.css'
// const Footer = () =>{
//     return( 
//         <>
//         <div className="footer">
//             <div className="class1">
//             <footer>
//                 <ul>
//                     <li>(&copy;) copyRight ,2025</li>
//                     <li>Feedback Form:-<Feedback/></li>
//                 </ul>
//             </footer>
//             </div>
//         </div></>
//     );
// }
// export default Footer;
import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <>
         <div className="footer">
             <div className="class1">
             <footer>
                 <ul>
                     <li>&copy; copyRight ,2025</li>
                     <li>Feedback Form:-<Feedback/></li>
                 </ul>
             </footer>
             </div>
         </div></>
    )
  }
}

export default Footer

