import React, { useEffect, useState } from 'react'
import './login.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { LoginEMailPass } from '../redux/action/authAction';
const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSignIn = (e) => {
        e.preventDefault()
      dispatch(LoginEMailPass(email,pass))
    }
    const accessToken = useSelector(state => state.auth.accessToken)
    useEffect(() => {
        if (accessToken) {
            navigate('/')
        }
    }, [accessToken,navigate])
    return (
        <div className="login">
            <form className='login_form'>
                <h1>Wecome back</h1>
                <p>Email</p>
                <input type="text" placeholder='Enter your email'   onChange={(e) => setEmail(e.target.value)} />
                <p>Password</p>
                <input type="password" placeholder='Enter your passsword'  onChange={(e) => setPass(e.target.value)}  />
                <Link to='/reset'>Forget passsword</Link> <br />
                <button type='submit' onClick={handleSignIn}>Sign in</button>
            </form>
            <div className="login_google">
                <button>Sign in with Google</button>
            </div>
            <div className="login_gignup">
                <p>Don't have an account ? <Link to='/signup'>Sign up</Link></p>
            </div>
        </div>

    )
}

export default Login