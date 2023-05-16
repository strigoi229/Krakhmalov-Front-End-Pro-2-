

export  function FetchAllUsers() {
    const fetchUsers = fetch ("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(result => result);

    return fetchUsers;
}