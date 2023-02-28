import React from 'react'
import logo from '../asset/image/logo.svg'
import google_logo from '../asset/image/google-logo.svg'
import {Routes,Route, Navigate, useNavigate, Link, NavLink} from 'react-router-dom'
import { useState } from 'react';
import './Login.css'
function Login() {
    const [step, setStep] = useState(1)

	const handelLogin = (e) => {
		e.preventDefault()
		setStep(2)

	} 

	const navigate = useNavigate()

	return (
		<section className='main-section'>
			<img src={logo} alt="logo" className='company-logo' />
			<div className='main-login-box'>
				<h1>{step === 1 ? "Login" : "Step 2:"}</h1>
				<form className='login-form'>
					<div className='form-row'>
						{
							step === 1 ? (
								<>
									<label htmlFor="email">Email</label>
									<input type="email" name="email" id="email" placeholder='Enter your mail address'/>
								</>
							) : (
								<>
									<label htmlFor="deploy">Deployment name</label>
									<input type="text" name="deploy" id="deploy" placeholder='Enter name'/>
								</>
							)
						}
					</div>
					<div className='form-row'>
						{
							step === 1 ? (
								<>
									<label htmlFor="password">Password</label>
									<input type="password" name="password" id="password" placeholder='Enter your password'/>
								</>
							) : (
								<>
									<label htmlFor="orgranisation">Organisation name</label>
									<input type="text" name="orgranisation" id="orgranisation" placeholder='Enter company name'/>
								</>
							)
						}
					</div>
					{
						step === 1 ? (
							<button className='login-btn' onClick={handelLogin}>Login</button>
						) : (
							<button className='login-btn' onClick={(e) =>{e.preventDefault(); navigate("/Home");}}>Deploy</button>
						)
					}
				</form>
				{
					step === 1 && (
						<>
							<span className='or-span'>-OR-</span>
							<button className='google-btn'>
								<img src={google_logo} alt="google-sign-button" />  
								<span>Sign with Google</span>
							</button>
						</>		
					)
				}
			</div>
		</section>
	);
}

export default Login