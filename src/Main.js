import React, { useState } from 'react'
import Card from './Card';
import Navbar from './Navbar';
import post from './data';

function Main() {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState("");
    console.log(user)
  return (

    <div className="main">
        {user!=""?(
        <>
        <Navbar></Navbar>
        {post.map((p)=>{
           return  <Card key={p.id} post={p}></Card>
        })}
        
        <span className='username'>
            {user}
        </span>
        
        </> ):(
        <div className='login'>
            <input type="text" placeholder="username"
            name="name" id="name"  onChange={(e)=>setUsername(e.target.value)}/>
            <button onClick={()=>setUser(username)}>Login</button>
        </div>
     
  )
}
</div>
  
)
}

export default Main