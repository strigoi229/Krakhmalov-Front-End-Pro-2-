import React from "react";
import { useLoaderData} from "react-router-dom";


export default function PhotoList() {
  const albumPhoto = useLoaderData();  
  return (
    <ul className="photo-list list">
         {albumPhoto.map((item) => <li key={item.id} className="photo-list__item">
        <img src={`${item.thumbnailUrl}`}></img>
        </li>)}
    </ul>
  )
}

