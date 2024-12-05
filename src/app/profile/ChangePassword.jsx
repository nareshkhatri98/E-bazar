import React from 'react'

const ChangePassword = () => {
    return (
        <div>
            <div className="w-[984px] h-[349px] border-[1px] mt-6 ml-[340px] ">
                <form action="#">


                    <h1 className="text-Body-XL font-500 text-Gray-9 p-4">Change Password</h1>
                    <hr />
                    <div className="m-6 relative">
                        <p>Current password</p>
                        <input type="password" placeholder="password " className="w-[936px] mt-[6px] h-[49px] border-[1px] rounded-[6px] p-4" />

                    </div>
                    <div className="ml-6 mt-4 flex gap-4">
                        <div>
                            <p>New Password Password</p>
                            <input type="text" className="w-[460px] h-[49px]  border-[1px] p-3" placeholder="password" />
                        </div>
                        <div>
                            <p>Confirm Password</p>
                            <input type="text" className="w-[460px] h-[49px]  border-[1px] p-3" placeholder="password" />
                        </div>
                    </div>
                    <button className="m-6 w-[194px] h-[45px] rounded-[43px] bg-primary text-white text-Body-Small font-600 ">Change Password</button>
                </form>

            </div>

        </div>
    )
}

export default ChangePassword