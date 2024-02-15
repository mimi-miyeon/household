import React from "react";
import Body from "./pages/Body";
import { NavLink } from "react-router-dom";

import "./style.css";

export default function App() {
  return (
    <>
      <Body />
    </>
  )
}

// import React, { useEffect, useState } from "react";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";

// import styles from "./Header.module.css";

// const Header = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [pageName, setPageName] = useState(location.pathname.slice(1));

//   return (
//     <header>
//       <nav className={`${styles["header__inner-content"]} inner-content`}>
//         <h1>{pageName}</h1>
//         <ul>
//           <li>
//             <NavLink 
//               to="/" 
//               style={({isActive})=>({display: isActive && "none"})} 
//               end={true}
//             >
//               <span role="img" aria-label="list" title="List">
//                 🏡
//               </span>
//             </NavLink>
//           </li>
//           <li>
//           <NavLink 
//             to="/ExpenseList"
//             style={({isActive})=>({display: isActive && "none"})} 
//           >
//             <span role="img" aria-label="list" title="List">
//               📖
//             </span>
//           </NavLink>
//           </li>
//           <li>
//           <NavLink 
//             to="/Wallet" 
//             style={({isActive})=>({display: isActive && "none"})} 
//           >
//             <span role="img" aria-label="wallet" title="wallet">
//               💸
//             </span>
//           </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
