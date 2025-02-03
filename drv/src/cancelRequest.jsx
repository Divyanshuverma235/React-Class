import { useState, useEffect } from "react";
import Bluebird from "bluebird";

Bluebird.config({ cancellation: true });

function FetchUser(){
    return new Bluebird((resolve) =>{
        setTimeout(() => {
            resolve({ id: 1, name: "Divyanshu" });
        }, 5000);
    });
}

function CancelRequest() {
    const [user, setUser] = useState("loading...");
    const [id, setId] = useState("loading...");

    useEffect(() => {
        const promise = FetchUser().then((var1) => {
            setUser(var1.name);
            setId(var1.id);
        });

        return () => {
            promise.cancel();
        };
    }, []); 

    return (
        <div>
            User ID: {id}
            <br />
            User Name: {user}
        </div>
    );
}

export default CancelRequest;
