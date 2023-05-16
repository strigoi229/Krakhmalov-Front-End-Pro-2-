export const ROUTES = {
    users: "/",
    albums: (userId) => (userId ? `/albums/${userId}` : "/albums/:userId"), 
    photos: (albumId) => (albumId ? `/albums/photos/${albumId}` : "/albums/photos/:albumId")
  }