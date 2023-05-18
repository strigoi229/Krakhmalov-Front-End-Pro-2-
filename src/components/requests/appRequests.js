export function FetchAllUsers() {
  const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((result) => result);

  return fetchUsers;
}

export function FetchUserAlbums({ params }) {
  const fetchAlbums = fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${params.userId}`
  )
    .then((response) => response.json())
    .then((result) => result);
  return fetchAlbums;
}

export function FetchAlbumPhoto({ params }) {
  const fetchPhoto = fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${params.albumId}`
  )
    .then((response) => response.json())
    .then((result) => result);
  return fetchPhoto;
}
