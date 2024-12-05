import React from 'react'

const BillingAddress = () => {
  return (
    <div>
        <div className="w-[984px] h-[533px] border-[1px] mt-6 ml-[340px] ">
          <form action="#">
            <h1 className="text-Body-XL font-500 p-5">Billing Address</h1>
            <hr />
            <div className="mt-[20px] flex gap-4 ml-6">
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  First name
                </p>
                <input
                  type="text"
                  placeholder="your first name"
                  className="border-[1px] mt-2 w-[280px] h-[49px] rounded-[6px] p-2"
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  Last name
                </p>
                <input
                  type="text"
                  placeholder="your last name"
                  className="border-[1px] mt-2 w-[280px] h-[49px] rounded-[6px] p-2"
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  Company name
                </p>
                <input
                  type="text"
                  placeholder="Company name"
                  className="border-[1px] mt-2 w-[280px] h-[49px] rounded-[6px] p-2"
                />
              </div>
            </div>
            <p className="text-Body-Small font-400 text-Gray-9 mt-4 ml-6">
              Street Address
            </p>
            <input
              type="text"
              placeholder="Email"
              className="w-[872px] h-[49px] border-[1px] rounded-[6px] p-2 ml-6"
            />
            <div className="mt-[20px] flex gap-4 ml-6">
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  Country / Region
                </p>
                <input
                  type="text"
                  placeholder="your first name"
                  className="border-[1px] mt-2 w-[280px] h-[49px] rounded-[6px] p-2"
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">States</p>
                <input
                  type="text"
                  placeholder="your last name"
                  className="border-[1px] mt-2 w-[280px] h-[49px] rounded-[6px] p-2"
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">Zip code</p>
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="border-[1px] mt-2 w-[302px] h-[49px] rounded-[6px] p-2"
                />
              </div>
            </div>
            {/* for email and Phone */}
          <div className=" flex gap-4 ml-6 mt-4 ">
          <div>
          <p htmlFor="Email">Email</p>
          <input type="text" placeholder="dianne.russell@gmail.com" className="w-[460px] p-2 h-[49px] border-[1px] rounded-[6px]" />
      
          </div>
          <div>
          <p htmlFor="Email">Phone</p>
          <input type="text" placeholder="(603) 555-0123" className="w-[460px] p-2  h-[49px] border-[1px] rounded-[6px]" />
      
          </div>
          </div>
          <button className="m-6 w-[167px] h-[45px] rounded-[43px] bg-primary text-white text-Body-Small font-600 ">Save Changes</button>
          </form>
        </div>
    </div>
  )
}

export default BillingAddress