import * as React from "react";

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Item 1", "Item 2", "Item 3", "Item 4"]);
        }, 2000);
    });
}

function StringListComponent({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

function App() {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        fetchData().then((data) => {
            setItems(data);
        });
    }, []);

    return (
        <div>
            <h1>String List</h1>
            <StringListComponent items={items} />
        </div>
    );
}

export default App;
