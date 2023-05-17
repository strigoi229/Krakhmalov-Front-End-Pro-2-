import React from "react";
import { createBrowserRouter } from "react-router-dom";
import UserList  from "./UserList";
import AlbumList from "./AlbumList";
import PhotoList from "./PhotoList";
import Main from "./Main";
import { FetchAllUsers } from "./appRequests";
import { FetchUserAlbums } from "./appRequests";
import { FetchAlbumPhoto } from "./appRequests";
import { ROUTES } from "./routes";




export const router = createBrowserRouter([
    { path: ROUTES.users, 
    element: <Main></Main>, 
    children: [
        {
        element: <UserList/>,
        index: true,
        loader: FetchAllUsers,
        },
        {
         element: <AlbumList/>,
         path: ROUTES.albums(),
         loader: FetchUserAlbums,
        }, 
          {
            element: <PhotoList/>,
            path: ROUTES.photos(),
            loader: FetchAlbumPhoto,
           }
         
        
]},

  ]);
  
