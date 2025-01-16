import * as React from "react";

function ApiCallSimulation(){
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve ({id: 1, name: "Divyanshu"})
        },5000);
    });
}

function ApiTesting(){
    const [id,setId]= React.useState("Loading....");
    const [name,setName] = React.useState("Loading...");
    React.useEffect(()=>{
        ApiCallSimulation().then((user)=>{
            setId(user.id);
            setName(user.name);
        });
    });

    return(

        <div>
        User:{name} <br/>
        Id:{id} <br/>
        
        </div>
    );
}

export default ApiTesting



//create a functional component that will accept array of strings as an argument 
// convert array into unordered list fetch data fuction should return array of strings