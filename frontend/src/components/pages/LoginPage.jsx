import React, { useState } from 'react'

export default function LoginPage() {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center text-center items-center">
      <div className="grid grid-row-6 gap-2 w-[500px] h-[300px] bg-slate-500 p-4 text-start rounded-md text-white">
        <div>email</div>
        <input
          className="h-[30px] text-black"
          type="text"
          placeholder="username / email"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <div>passowrd</div>
        <input
          className="h-[30px] text-black"
          type="text"
          placeholder="password"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <button type="button">submit</button>
        <p className="text-[0.9rem]">
          <b className=" underline text-blue-800"> New here? </b> Sign up now to
          get started!
        </p>
      </div>
    </div>
  )
}