import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register!!</h2>
            <input type="submit" value="SignIn With Google" />
            <form>
                <input type="text" placeholder='Enter Your Name' />
                <br />
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;