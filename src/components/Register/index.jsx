import React from 'react'
import candado from '../../assets/candado.png'
import email from '../../assets/email.png'
import googlee from '../../assets/social.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/gorjeo.png'
import github from '../../assets/github.png'

export const Register = () => {
    return (
        <>
            <div className=' w-scren h-screen flex justify-center items-center ' >
                <div className=' bg-cyan-50 w-[474px] h-[634px] border-2 border-[#BDBDBD] rounded-3xl p-[60px] ' >
                    <h1 className=' font-bold text-[18px] text-[#333333] font-noto my-[10px] ' >Join thousands of learners from around the world</h1>
                    <h2 className=' font-noto text-[16px] text-[#333333] font-normal my-[16px] ' >Master web development by making real-life projects. There are multiple paths for you to choose</h2>
                    <div className=' flex flex-col gap-4 ' >
                        <div className=' flex border-2 h-12 rounded-lg border-[#BDBDBD] items-center gap-3 px-3 ' >
                            <img className=' w-6 h-6 ' src={email} alt="" />
                            <input className=' h-11 focus:outline-none ' type="text" placeholder='Email' />
                        </div>
                        <div className=' flex border-2 h-12 rounded-lg border-[#BDBDBD] items-center gap-3 px-3 ' >
                            <img className=' w-6 h-6 ' src={candado} alt="" />
                            <input className=' h-11 focus:outline-none ' type="text" placeholder='Password' />
                        </div>
                    </div>
                    <button className='  cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-full my-5 ' >Start coding now</button>
                    <div className=' flex flex-col justify-center items-center ' >
                        <h3 className=' font-noto font-normal text-[14px] text-[#828282] ' >or continue with these social profile</h3>
                        <div className=' flex gap-8 py-[20px] ' >
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
                            <h3 className=' font-noto font-normal text-[14px] text-[#828282] ' >Already a member? </h3>
                            <span className=' font-noto font-normal text-[14px] text-[#0D99FF] cursor-pointer ' >Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
