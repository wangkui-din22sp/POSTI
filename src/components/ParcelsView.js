import React from "react";
import styles from "./ParcelsView.module.css";
import { getAllParcels } from "../parcels";
import Parcel from "./Parcel";


const ParcelsView = () => {
  const parcels = getAllParcels();

/*   useEffect(() => {
    fetch("localhost:3000/parcels")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []); */
     
  return (
    <div>

      <div className={styles.parcelsTable}>
      <table className={styles.th}>      
      <thead> <tr> <th>Parcel ID</th> <th>Date</th> <th>Name</th> <th>Status</th> </tr>  </thead>
      <tbody>
        {parcels.map((parcel) => (
          
          <Parcel
            id={parcel.id}
            date={parcel.date}
            name={parcel.name}
            status={parcel.status}
            key={parcel.id}
          /> 
          
        ))}
      </tbody>
      </table>
      </div>
      
    </div>
  );
};

export default ParcelsView;
