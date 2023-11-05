import React from "react";
import styles from "./Parcel.module.css";
import { Link } from "react-router-dom";

/* This component is used to display a single parcel in the parcels view. */

export default function Parcel({ id, date, name, status }) {
  return (
    <tr className={styles.th} data-testid={`parcel-${id}`}>
      
      
      
      <td> <Link to={`/parcels/${id}`}> {id}</Link> </td> <td> {date} </td> <td> {name} </td> <td> {status} </td> 
      
      
     
    </tr>
  );
}
