import React from 'react';
import useFirebase from '../../hook/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login!!</h2>
            <div>
                <input onClick={signInWithGoogle} type="submit" value="SignIn With Google" />
            </div>
            <form>

                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;