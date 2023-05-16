import React from "react";
import { useLoaderData, NavLink} from "react-router-dom";
import { ROUTES } from "./Routes";

export default function AlbumList() {
  const userAlbums = useLoaderData();  
  return (
    <ul className="album-list list">
       {userAlbums.map((item) => <li key={item.id} className="album-list__item">
        <p>User ID: {item.userId}</p>
        <p>Albom ID: {item.id}</p>
        <p>Title: {item.title}</p>
        <NavLink to={ROUTES.photos(item.id)}>Get photos</NavLink>
        </li>)}
    </ul>
  )
}