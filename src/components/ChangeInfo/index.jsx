import React from 'react'
import photou from '../../assets/photou.jpg'
import logou from '../../assets/logodev.png'
import photo2 from '../../assets/mexicociudad.jpg'
import camara from '../../assets/camara.png'

export const ChangeInfo = () => {
    return (
        <>
            <div>
                <header className=' flex justify-between h-[80px] items-center px-[60px] ' >
                    <img className=' w-[130px] h-[30px] ' src={logou} alt="" />
                    <div className=' flex gap-3 items-center cursor-pointer ' >
                        <img className=' w-8 h-8 ' src={photou} alt="" />
                        <h1 className=' font-noto font-bold ' >Xanthe Neal</h1>
                        <p className=' font-noto font-bold ' >↓</p>
                    </div>
                </header>
                <div className=' flex flex-col px-[290px] justify-start gap-4 mt-6 ' >
                    <div>
                        <span className=' cursor-pointer font-noto font-normal text-[18px] text-[#2D9CDB] ' >&lt; Back</span>
                    </div>
                    <div className=' flex flex-col w-[846px] h-[827px] border-2 gap-5 py-8 px-14  rounded-xl mb-9 ' >
                        <div className=' flex flex-col gap-1 ' >
                            <h2 className='font-noto font-normal text-[24px] ' >Change Info</h2>
                            <h4 className='font-noto font-medium text-[13px] text-[#828282] ' >Changes will be reflected to every services</h4>
                        </div>
                        <div className=' flex gap-6 items-center ' >
                            <div className=' cursor-pointer flex justify-center items-center ' >
                                <img className=' absolute w-6 h-6 ' src={camara} alt="" />
                                <img className=' w-[74px] h-[74px] rounded-lg ' src={photo2} alt="" />
                            </div>
                            <h3 className=' font-noto font-medium text-[13px] text-[#828282] ' >CHANGE PHOTO</h3>
                        </div>
                        <div className=' flex flex-col gap-1 ' >
                            <h2 className=' ml-1 font-noto text-[13px] font-medium ' >Name</h2>
                            <input className=' w-[417px] h-[52px] border-[1px] rounded-xl border-[#828282] px-4 ' type="text" placeholder='Enter your name...' />
                        </div>
                        <div className=' flex flex-col gap-1 ' >
                            <h2 className=' ml-1 font-noto text-[13px] font-medium' >Bio</h2>
                            <input className=' w-[417px] h-[92px] border-[1px] border-[#828282] rounded-xl px-4  ' type="text" placeholder='Enter your bio...' />
                        </div>
                        <div className=' flex flex-col gap-1 ' >
                            <h2 className=' ml-1 font-noto text-[13px] font-medium' >Phone</h2>
                            <input className=' w-[417px] h-[52px] border-[1px] border-[#828282] rounded-xl px-4 ' type="text" placeholder='Enter your phone...' />
                        </div>
                        <div className=' flex flex-col gap-1 ' >
                            <h2 className=' ml-1 font-noto text-[13px] font-medium' >Email</h2>
                            <input className=' w-[417px] h-[52px] border-[1px] border-[#828282] rounded-xl px-4 ' type="text" placeholder='Enter your email...' />
                        </div>
                        <div className=' flex flex-col gap-1 ' >
                            <h2 className=' ml-1 font-noto text-[13px] font-medium' >Password</h2>
                            <input className=' w-[417px] h-[52px] border-[1px] border-[#828282] rounded-xl px-4 ' type="password" placeholder='Enter your new password...' />
                        </div>
                        <button className=' w-[82px] h-[38px] rounded-lg bg-[#2F80ED] text-white ' >Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
