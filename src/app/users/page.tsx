type Users = {
    "id": number,
    "name": string,
    "username": string,
    "email": string
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: {
            revalidate: 10
        }
    })
    const users: Users[] = await res.json()

    return (
        <div>
            <h1>Users</h1>
            {users.map((user) => (
                <li key={user.id}>
                    <span>
                        {user.name}
                    </span> {" "}
                    <span>{user.username}</span>{" "}
                    <span>
                        {user.email}
                    </span>

                </li>
            ))}
        </div>
    );
};

export default UsersPage
