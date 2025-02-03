import * as React from 'react';
import { UserProvider } from './useContext';
import { Page1, Page2, Page3 } from './useContext2';

function SelectPage({ v1 }) {
    const Pages = [Page1, Page2, Page3]; // ✅ Use 'Pages' instead of 'Page'
    const SelectedPage = Pages[v1]; // ✅ Get correct component
    return <SelectedPage />;
}

export default function UserContextFinal() {
    const [page, setPage] = React.useState(0);
    return (
        <UserProvider>
            <button onClick={() => setPage(0)} disabled={page === 0}>Page1</button>
            <button onClick={() => setPage(1)} disabled={page === 1}>Page2</button>
            <button onClick={() => setPage(2)} disabled={page === 2}>Page3</button>
            <SelectPage v1={page} />
        </UserProvider>
    );
}
