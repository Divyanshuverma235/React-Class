import * as React from 'react';
import { useContext } from 'react'; 
import { UserContext } from './useContext';

function UserDetail() {
    const user = useContext(UserContext); 
    return (
        <div>
            <h2>User Details</h2>
            <p>Name: {user.name}</p>
            <p>Id: {user.id}</p>
        </div>
    );
}

export function Page1() {
    return (
        <div>
            <h1>Page 1</h1>
            <UserDetail />
        </div>
    );
}

export function Page2() {
    return (
        <div>
            <h1>Page 2</h1>
            <UserDetail />
        </div>
    );
}

export function Page3() {
    return (
        <div>
            <h1>Page 3</h1>
            <UserDetail />
        </div>
    );
}
