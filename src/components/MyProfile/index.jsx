import React, { useEffect, useState } from 'react'
import photou from '../../assets/photou.jpg'
import logou from '../../assets/logodev.png'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

const dataUser = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:3000/myprofile', null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user data');
    }
};

export const MyProfile = () => {
    return (
        <>
            <div>
                <header className=' flex justify-between h-[80px] items-center px-[60px] ' >
                    <img className=' w-[130px] h-[30px] ' src={logou} alt="" />
                    <div className=' flex gap-3 items-center ' >
                        <img className=' w-8 h-8 ' src={photou} alt="" />
                        <h1 className=' font-noto font-bold ' >Xanthe Neal</h1>
                        <p className=' font-noto font-bold ' >↓</p>
                    </div>
                </header>
                <div>
                    <div className=' flex flex-col justify-center items-center gap-2 ' >
                        <div className=' flex flex-col justify-center items-center gap-4 ' >
                            <h1 className=' font-noto font-normal text-4xl ' >Personal info</h1>
                            <h3 className=' font-noto font-light text-lg ' >Basic info, like your name and photo</h3>
                        </div>
                        <div className=' p-10' >
                            <table className=' w-[846px] h-[580px] border-[2px] rounded-2xl' >
                                <tbody className=' w-[846px] h-[580px] ' >
                                    <tr>
                                        <td className=' px-10 py-8 flex justify-between items-center w-full gap-6 border-b-2 ' >
                                            <div>
                                                <h1 className=' font-noto font-normal text-2xl ' >Profile</h1>
                                                <h3 className=' font-noto font-medium text-[13px] text-[#828282] ' >Some info may be visible to other people</h3>
                                            </div>
                                            <button className=' w-[95px] h-[38px] border-[1px] border-[#828282] text-[#828282] font-noto font-medium text-base rounded-xl ' >Edit</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className=' h-[82px] px-10 flex items-center border-b-2' >
                                            <h2 className=' w-[250px] font-noto font-medium text-sm text-[#BDBDBD]' >PHOTO</h2>
                                            <div>
                                                <img className=' w-[72px] ' src={photou} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className=' h-[82px] px-10 flex items-center border-b-2' >
                                            <h2 className=' w-[250px] font-noto font-medium text-sm text-[#BDBDBD] ' >NAME</h2>
                                            <div>
                                                <h1 className=' font-noto font-medium text-lg ' >Xanthe Neal</h1>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className=' h-[82px] px-10 flex items-center border-b-2' >
                                            <h2 className=' w-[250px] font-noto font-medium text-sm text-[#BDBDBD]' >BIO</h2>
                                            <div>
                                                <h1 className=' font-noto font-medium text-lg ' >I am a software developer and a big fan</h1>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className=' h-[82px] px-10 flex items-center border-b-2' >
                                            <h2 className=' w-[250px] font-noto font-medium text-sm text-[#BDBDBD]' >PHONE</h2>
                                            <div>
                                                <h1 className=' font-noto font-medium text-lg ' >908249274292</h1>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className=' h-[82px] px-10 flex items-center border-b-2' >
                                            <h2 className=' w-[250px] font-noto font-medium text-sm text-[#BDBDBD]' >EMAIL</h2>
                                            <div>
                                                <h1 className=' font-noto font-medium text-lg ' >{userData.email}</h1>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className=' h-[82px] px-10 flex items-center' >
                                            <h2 className=' w-[250px] font-noto font-medium text-sm text-[#BDBDBD]' >PASSWORD</h2>
                                            <div>
                                                <h1 className=' font-noto font-medium text-lg ' >*********</h1>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
