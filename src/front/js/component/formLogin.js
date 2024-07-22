import React, { useState } from "react";
import Swal from "sweetalert2";

export const FormLogin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("https://friendly-space-pancake-g4xxvjw4qj57fppxr-3001.app.github.dev/api/login",{
                method:"POST",
                headers: {
                    "content-Type":"application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            if(!response.ok){
                throw await response.json()
            }
            const data = await response.json()
            localStorage.setItem('token',data.token)
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.msg,                
              });
            console.log(error)
        }
    }

    return (
        <form className="my-5 d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp"/>
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    )
}