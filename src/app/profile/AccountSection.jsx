import React from 'react'
import Image from 'next/image'
import { Avatar } from '@/assets/icons'
import { useSelector } from 'react-redux'


const AccountSection = () => {
  const authData = useSelector((state)=>state.auth);
  const { userData} = authData
  return (
    <div>
         <div className="w-[984px] h-[533px] border-[1px] mt-8 rounded-[8px] ">
            <h1 className="text-Body-XL font-500 text-Gray-900 p-5">
              Account Settings
            </h1>
            <hr />
  
            <div className=" flex  items-center gap-[112px]">
              {/* for form */}
              <form action="#">
              <div className="w-[512px] h-[352px]">
                <div className="m-6">
                  <label htmlFor="First name">First name</label>
                  <input
                    type="text"
                    value={userData.firstName}
                    placeholder="Dianne"
                    className="w-[512px] h-[49px] border-[1px] rounded-[6px] p-3"
                  />
                </div>
                <div className="ml-6 mt-4">
                  <label htmlFor="Last Name">Last Name</label>
                  <input
                    type="text"
                    value={userData.lastName}
                    placeholder="Russell"
                    className="w-[512px] h-[49px] border-[1px] rounded-[6px] p-3"
                  />
                </div>

                <div className="ml-6 mt-4">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="text"
                    value={userData.email}
                    placeholder="dianne.russell@gmail.com"
                    className="w-[512px] h-[49px] border-[1px] rounded-[6px] p-3"
                  />
                </div>
                <div className="ml-6 mt-4">
                  <label htmlFor="Phone Number">Phone</label>
                  <input
                    type="text"
                   
                    placeholder="(603) 555-0123"
                    className="w-[512px] h-[49px] border-[1px] rounded-[6px] p-3"
                  />
                </div>
                <button className="w-[167px] h-[45px] bg-primary rounded-[43px] m-6 text-white text-Body-Small font-600">
                  Save Changes
                </button>
              </div>
              </form>
              {/* for image section */}
              <div>
                <Image src={Avatar} alt="avatar" />
                <button className="w-[159px] h-[45px] mt-5 border-[2px]  ml-10 rounded-[43px] text-primary border-primary">
                  Chose Image
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default AccountSection