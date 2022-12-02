import { React, useState } from 'react';
import axios from 'axios'

const Registration = () => {

    const [data, setdata] = useState({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: "true"
    });

    const myHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const mySubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/accounts/register", data)
            .then(r => {
                console.log(r.data);
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <form onSubmit={mySubmit} className=' p-3 '>
                <label>Title:</label>
                <input type="text" name="title" className='form-control' onChange={myHandler} /><br />
                <label>First name:</label>
                <input type="text" name="firstName" className='form-control' onChange={myHandler} /><br />
                <label>Last name:</label>
                <input type="text" name="lastName" className='form-control' onChange={myHandler} /><br />
                <label>Email:</label>
                <input type="email" name="email" className='form-control' onChange={myHandler} /><br />
                <label>Password:</label>
                <input type="password" name="password" className='form-control' onChange={myHandler} /><br />
                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" className='form-control' onChange={myHandler} /><br />

                <input type="submit" value="save" className='form-control btn btn-outline-primary' />
            </form>
        </div>
    );
}

export default Registration;

