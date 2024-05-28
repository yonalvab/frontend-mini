import React from 'react'
import axios from 'axios'
import candado from '../../assets/candado.png'
import email from '../../assets/email.png'
import googlee from '../../assets/social.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/gorjeo.png'
import github from '../../assets/github.png'
import { Link, useNavigate } from 'react-router-dom'



export const Login = () => {

    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault();

        const formData = {
            email: e.target[0].value,
            password: e.target[1].value
        };
        console.log(formData);

        try {
            const res = await axios.post('http://localhost:3000/', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Token recibido:', res.data.token);
            localStorage.setItem('token', res.data.token);

            navigate('/myprofile')
        } catch (error) {
            console.error('Error:', error);
            alert('Error en la autenticación. Verifica tus credenciales.');
        }
    };

    return (
        <>
            <div className=' w-scren h-screen flex justify-center items-center ' >
                <div className=' bg-cyan-50 w-[474px] h-[544px] border-2 border-[#BDBDBD] rounded-3xl p-[70px] ' >
                    <h1 className=' font-bold text-[22px] text-[#333333] font-noto mb-[35px] ' >Login</h1>
                    <form className=' flex flex-col gap-4 ' onSubmit={handleSubmit} >
                        <div className=' flex border-2 h-12 rounded-lg border-[#BDBDBD] items-center gap-3 px-3 ' >
                            <img className=' w-6 h-6 ' src={email} alt="" />
                            <input className=' h-11 focus:outline-none ' type="email" name='name' placeholder='Email' />
                        </div>
                        <div className=' flex border-2 h-12 rounded-lg border-[#BDBDBD] items-center gap-3 px-3 ' >
                            <img className=' w-6 h-6 ' src={candado} alt="" />
                            <input className=' h-11 focus:outline-none ' type="password" name='password' placeholder='Password' />
                        </div>
                        <button className='  cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-full my-8 ' type='submit' >Start coding now</button>
                    </form>
                    <div className=' flex flex-col justify-center items-center ' >
                        <h3 className=' font-noto font-normal text-[14px] text-[#828282] ' >or continue with these social profile</h3>
                        <div className=' flex gap-8 py-6 ' >
                            <div className=' w-[42px] h-[42px] border-[1px] border-[#828282] rounded-full flex items-center justify-center cursor-pointer' >
                                <img className=' h-[18px] w-[18px] ' src={googlee} alt="" />
                            </div>
                            <div className=' w-[42px] h-[42px] border-[1px] border-[#828282] rounded-full flex items-center justify-center cursor-pointer' >
                                <img className=' h-[18px] w-[18px] ' src={facebook} alt="" />
                            </div>
                            <div className=' w-[42px] h-[42px] border-[1px] border-[#828282] rounded-full flex items-center justify-center cursor-pointer' >
                                <img className=' h-[18px] w-[18px] ' src={twitter} alt="" />
                            </div>
                            <div className=' w-[42px] h-[42px] border-[1px] border-[#828282] rounded-full flex items-center justify-center cursor-pointer' >
                                <img className=' h-[18px] w-[18px] ' src={github} alt="" />
                            </div>
                        </div>
                        <div className='flex' >
                            <h3 className=' font-noto font-normal text-[14px] text-[#828282] ' >Don't have an account yet? </h3>
                            <Link to='/register' >
                                <span className=' font-noto font-normal text-[14px] text-[#0D99FF] cursor-pointer ' >Register</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
