import React, { useEffect } from "react";
import { getParcelById } from "../parcels";
import {useParams,Link} from "react-router-dom";

const ParcelDetailsView = () => {

  
  const id = useParams().id;
  useEffect(() => {console.log(id)});

  const parcel = getParcelById(id);

  return (
    <div>
      <table> <caption>Parcel Details</caption>
      
      <tbody>
      <tr>
      <ul >
      <li>Sender Name: {parcel.name}</li>
      <li>Sender Email: {parcel.senderEmail}</li>
      <li>Sender Address: {parcel.senderAddress}</li>
      <li>Recipient Name: </li>
      <li>Recipient Email: {parcel.recipientEmail}</li>
      <li>Recipint Address: {parcel.recipientAddress}</li>
      </ul>   
      </tr>
      <tr>
      <ul >
      <li>Parcel ID: {parcel.id}</li>
      <li>Parcel Sizes: </li>
      <li>Parcel Weight: </li>
      <li>Drop Off: </li>
      <li>Pickup Location: </li>
      <li>Date: {parcel.date}</li>
      <li>Status: </li>
      <li>One-time code: </li>
      <Link to="/">Back to parcels</Link>
      </ul>    
      </tr>
      </tbody>
      </table>

      

      
    </div>
  );
};

export default ParcelDetailsView;
