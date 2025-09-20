import { Suspense, use } from "react"; 

interface User {
    id: number;
    firstName: string;
    lastName: string;
}

interface UserResponse {
    users: User[];
}

function getUsers(): Promise<UserResponse> {
    return fetch('https://dummyjson.com/users')
        .then(res => res.json()); 
}

function UseHookExample() {
    const userPromise = getUsers();

    return (
        <div>
            <h1>Use Hook Example</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <UserList usersPromise={userPromise} />
            </Suspense>
        </div>
    );
}

function UserList({ usersPromise }: { usersPromise: Promise<UserResponse> }) {
    const { users } = use(usersPromise); // Suspense will handle loading

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.firstName} {user.lastName}
                </li>
            ))}
        </ul>
    );
}

export default UseHookExample;
