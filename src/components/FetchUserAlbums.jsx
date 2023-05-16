

export function FetchUserAlbums({params}) {
    const fetchAlbums = fetch (`https://jsonplaceholder.typicode.com/albums?userId=${params.userId}`)
    .then(response => response.json())
    .then(result => result);
    return fetchAlbums;
}