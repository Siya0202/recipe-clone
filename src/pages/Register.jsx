import { Input,Button } from 'antd';
import React, { useState } from 'react';

const Register = () => {
    const [user, setuser] = useState("");
    const [pass, setpass] = useState("");


    function handleChange(event){
    const username = event.target.value;
    const password = event.target.value;
    console.log(event.target.name);
    if(event.target.name=='username')
    setuser(username);
    else if(event.target.name=='password')
    setpass(pass);
}
function handleClick(){

    console.log(user);
    console.log(pass);

    if(user.match(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g)!=null)
    {
        console.log("Match Found")
    }
    else 
    console.log("Not Found")    
}


    return (
        <>
            <Input name='username' placeholder="Username" onChange={handleChange} value={user} />
            <Input name='password' placeholder="Username" onChange={handleChange} value={pass} />
            <Button onClick={handleClick} type="primary">Submit</Button>
    
        </>
    );
}

export default Register;
