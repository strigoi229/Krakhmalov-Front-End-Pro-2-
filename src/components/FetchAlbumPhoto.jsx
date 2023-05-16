export  function FetchAlbumPhoto({params}) {
    const fetchPhoto = fetch (`https://jsonplaceholder.typicode.com/photos?albumId=${params.albumId}`)
    .then(response => response.json())
    .then(result => result);
    return fetchPhoto;
}