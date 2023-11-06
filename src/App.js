import React from "react";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import RestorePassword from "./components/RestorePassword";
import ParcelsView from "./components/ParcelsView";
import ParcelDetailsView from "./components/ParcelDetailsView";

import { Routes, Route, Link} from "react-router-dom";


const App = () => {

 
  return (
    
    <div style={{marginBottom:0,}}>
      <h1>Posti</h1>
      <nav>
      {/* <img src={imagePath} alt="Placeholder" /> */}
        <Link to="/sent">Send  </Link>
        <Link to="/history">History  </Link>
        <Link to="/track">Track  </Link>
        <Link to="/settings">Settings  </Link>
      </nav>

      
      
      

      <Routes>
          <Route path="/ParcelsView" element={<ParcelsView />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/RestorePassword" element={<RestorePassword />} />
          <Route path="Parcels/:id"  element={<ParcelDetailsView />} />

          
       
      </Routes>
    </div>
  
  );
  
};


export default App;


