import React, {useEffect, useState} from 'react'
import {
    useHistory
  } from "react-router-dom";
import './AdminLogin.css'
const AdminLogin = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [inputError, setinputError] = useState(['', ''])
    const [userAuthenticated, setuserAuthenticated] = useState(false)
    const formData = new FormData();
    const history = useHistory()
    // useEffect(() => {
    //     // testApi()
    // }, [])

    const SigninHandler = () => {
        
        if (email === '') {
            setinputError(['This field is required', '']);
            return;
        } else {
            formData.append('email', email)
        }

        if (password === '' || password.length < 6) {
            setinputError(['', 'Password must be greater than six']);
            return;
        } else {
            formData.append('password', password)
        }
        
        const url = 'http://localhost/Portfolio%20Backend/signin.php';
        fetch(url, {
            method: 'post',
            body: formData
        })
        .then((data) => data.json())
        .then((res) => {
            if (res === 'SUCCESS') {
                setuserAuthenticated(true)
                localStorage.setItem('user_auth', 'true')
                setinputError(['', '']);
                history.push('/admin')
            } else if (res === 'User Not Found') {
                setinputError([res, ''])
            } else {
                setinputError(['', res])
            }
        })
    }


    return (
        <React.Fragment>
            <div>
                <div className="auth_main">
                    <h1 className="admin_heading">Admin Signin</h1>
                    <div className="auth_inner">
                        <div className="img"></div>
                        <div className="main_form">
                            <div className="email">
                                <h3>Email</h3>
                                <input onChange={(val) => setemail(val.target.value)} placeholder="Enter E-mail Address" required type="email" name="" id=""/>
                                <p className='input_error_message'>{inputError[0]}</p>
                            </div>

                            <div className="password">
                                <h3>Password</h3>
                                <input onChange={(val) => setpassword(val.target.value)} placeholder="Enter Password" required type="password" name="" id=""/>
                                <p className='input_error_message'>{inputError[1]}</p>
                            </div>

                                <button onClick={() => SigninHandler()} className="submit_btn">Signin</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AdminLogin
