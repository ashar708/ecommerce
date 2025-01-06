import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import role from '../common/role';
import summaryApi from '../common';
import {toast} from 'react-toastify';

const ChangeUserRole = ({
    name,email,roles,onClose,userId,callFunc
}) => {
    const [userRole,setUserRole] = useState(roles);
    const handleOnChangeSelect =  (e) => {
        setUserRole(e.target.value);
        console.log(e.target.value);
    }
    const updateUserRole = async () => {
        const userDate = await fetch(summaryApi.updateUser.url,{
            method: summaryApi.updateUser.method,
            credentials: "include",
            headers: {
                "content-type": "application/json",
            },  
            body: JSON.stringify({
                userId: userId,
                role: userRole,
            })
        })

        const responseData = await userDate.json();

        if(responseData.success){
            toast.success(responseData.message);
            onClose();
            callFunc();
        }

        console.log("role updated", responseData);

    }
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-center items-center bg-slate-200 bg-opacity-50'>
        <div className='fit mx-auto bg-white shadow-md p-4 w-full max-w-sm'>
            <button className='block ml-auto' onClick={()=>onClose()}>
                <IoMdClose/>
            </button>
            <h1 className='pb-4 font-medium text-lg'>Change User Role</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <div className='flex items-center justify-between my-4'>
            <p>Role :</p>
            <select className='border px-4 py-1' value={userRole} onChange={handleOnChangeSelect}>
                {
                    Object.values(role).map((i)=>{
                        return (
                            <option value={i} key={i}>{i}</option>
                        )
                    })
                }
                
            </select>
            </div>
            <button className='w-fit mx-auto block py-1 px-3 rounded-full bg-red-600 text-white hover:bg-red-700' onClick={updateUserRole}>Change Role</button>
        </div>
    </div>
  )
}

export default ChangeUserRole