import React, { useState } from 'react'
import './login.scss'
import { Link, useNavigate } from 'react-router-dom';
import Validation from './Validation';
import { toast } from 'react-toastify';
import { auth, db } from '../firebase/fibefire';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
const Login = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState({
        email: '',
        pass: '',
    });
    const [error, setError] = useState({});
    const [errorButton, setErrorButton] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        setError({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(Validation(value));
        setErrorButton('');

        if (Object.keys(error).length === 0 && value.email !== '' && value.pass !== '') {
            setIsSubmitting(true);

            try {
                const data = await signInWithEmailAndPassword(auth, value.email, value.pass);

                toast.success(`Đăng nhập thành công`, {
                    autoClose: 4000,
                    position: 'top-left',
                });

                setTimeout(() => {
                    navigate('/login');
                }, 5000);

                const userRef = collection(db, 'users');
                const userInfo = {
                    email: value.email,
                    accessToken: data.user.accessToken,
                };

                sessionStorage.setItem('watch-user', JSON.stringify(userInfo));

                await addDoc(userRef, userInfo);

                setIsSubmitting(false);
            } catch (error) {
                setIsSubmitting(false);
                if (error.code === 'auth/too-many-requests') {
                    setErrorButton('Sai quá nhiều lần vui lòng thử lại sau');
                } else if (error.code === 'auth/wrong-password') {
                    setErrorButton('Email hoặc mật khẩu không đúng');
                }
            }
        }
    };
    return (
        <div className="login">
            <form className='login_form' >
                <h1>Wecome back</h1>
                <p>Email</p>
                <input type="text" placeholder='Enter your email' name='email'
                    onChange={handleChange}
                    value={value.email}
                />
                {error.email && <span>{error.email}</span>}
                <p>Password</p>
                <input type="password" placeholder='Enter your password' name='pass'
                    onChange={handleChange}
                    value={value.pass}
                />
                {error.pass && <span>{error.pass}</span>}
                <span>{
                    Object.keys(error).length === 1 && errorButton
                }</span>
                <Link to='/reset'>Forget passsword</Link> <br />
                <button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? 'Đang đăng nhập...' : 'Đăng nhập'}
                </button>
                <div className="login_gignup">
                    <p>Don't have an account ? <Link to='/signup'>Sign up</Link></p>
                </div>
            </form>
        </div>
    )
}
export default Login
