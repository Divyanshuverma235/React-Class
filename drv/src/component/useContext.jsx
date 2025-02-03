import * as React from 'react';
export const UserContext = React.createContext();

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Divyanshu" });
        }, 5000);
    });
}

// eslint-disable-next-line react/prop-types
export function UserProvider({ children }) {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetchUser().then((user) => {
            setUser(user);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
