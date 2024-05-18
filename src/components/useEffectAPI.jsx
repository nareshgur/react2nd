//import React from 'react'

import { useEffect, useState } from "react"

function UseEffectAPI() {
    const [users,setUsers] = useState([]);
    const getUsers = async ()=>{
        const response = await fetch('https://api.github.com/users');
        
         setUsers(await response.json());
        
    }
    useEffect(()=>{
        getUsers();
    },[])
    return (
        
        <>
             <h2> List Of GithHub Users</h2>
             <div className='container-fluid mt-5'>
                <div className='row  text-center'>
                    {
                        users.map((curElem)=>{
                            return(
                                
                                    <div className='col-10 col-md-4 mt-5' key={curElem.id}>
                        <div className='card p-2'>
                            <div className='d-flex align-items-center'>
                                <div className="image"><img src={curElem.avatar_url} className='rounded' width='155'/></div>
                                <div className='ml-3 w-100'>
                                    <h4 className='mb-0 mt-0 text-left' >{curElem.login}</h4><span className='textLeft'>{curElem.id}</span>
                                    <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                                    <div className='d-flex flex-col'><span className='articles'>User Code</span><span className='number1'>{curElem.node_id}</span></div>
                                    <div className='d-flex flex-col'><span className='followers'>Account Type</span><span className='number1'>{curElem.type}</span></div>
                                    <div className='d-flex flex-col'><span className='rating'>Site Admin</span><span className='number1'>{curElem.site_admin}</span></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                                
                            )
                        })
                    }
                    
                </div>
             </div>
        </>
    )
}

export default UseEffectAPI
