import { NavLink, useLoaderData } from "react-router-dom";
import { ROUTES } from "./routesData/routes";

export default function UserList() {

const users = useLoaderData();    
return (
    <ul className="user-list list">
       {users.map((item) => <li key={item.name} className="user-list__item">
        <p>ID: {item.id}</p>
        <p>Name: {item.name}</p>
        <p>Username: {item.username}</p>
        <p>Email: {item.email}</p>
        <p>Phone: {item.phone}</p>
        <p>Website: {item.website}</p>
        <NavLink to={ROUTES.albums(item.id)}>Get albums</NavLink>
        </li>)}
    </ul>
)

}