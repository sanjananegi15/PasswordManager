import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Manager = () => {
  const ref = useRef();
  
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("password");
    // let passwordArray;
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showpassword = () => {
    ref.current
    console.log(ref.current.src);
    if (ref.current.src.includes("icons/eye close.png")) {
      ref.current.src = "icons/eye open.png";
    } else {
      ref.current.src = "icons/eye close.png";
    }
  };
  const savepassword = () => {
    console.log(form);
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-purple-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div className=" mycontainer ">
        <h1 className="text-4xl text font-bold text-center">
          {" "}
          <span className="text-purple-500 "> &lt;</span>
          <span>Pass</span>
          <span className="text-purple-500">OP/&gt;</span>
        </h1>
        <p className="text-purple-900 text-lg text-center ">
          Your Own Password Manager
        </p>

        <div
          value={form.site}
          className="flex flex-col p-4 text text-black gap-8 items-center"
        >
          <input
            placeholder="Enter Website URL"
            className="rounded-full border border-purple-500 w-full px-4 py-1"
            type="text"
            name="site"
            id=""
          />
          <div
            value={form.username}
            onChange={handleChange}
            className="flex w-full justify-between gap-8"
          >
            <input
              placeholder="Enter Username"
              className="rounded-full border border-purple-500 w-full px-4 py-1"
              type="text"
              name="username"
              id=""
            />
            <div
              value={form.password}
              onChange={handleChange}
              className="relative"
            >
              <input
                placeholder="Enter Password"
                className="rounded-full border border-purple-500 w-full px-4 py-1"
                type="password"
                name="password"
                id=""
              />
              <span
                className="absolute right-[1px] top-[1px] cursor-pointer"
                onClick={showpassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  src="icons/eye open.png"
                  alt="eye"
                  width={30}
                />
              </span>
            </div>
          </div>
          <button
            onClick={savepassword}
            // onChange={handleChange}
            className="flex  justify-center items-center gap-2 bg-purple-300 hover:bg-purple-400 rounded-full px-8 border border-purple-500 py-2 w-fit ">
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>

        <div className="passwords">
          <h2 className="font-bold text-xl py-4">Your Passwords</h2>
          {/* {passwordArray.length === 0 && <div> No Passwords To Show </div>}
          {passwordArray.length !=0 && <table className="table-auto w-full rounded-md overflow-hidden"> */}
            {passwordArray.length === 0 && <div> No passwords to show</div>}
            {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
            <thead className="bg-purple-800 text-white className='text-center w-32' ">
              <tr>
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
              </tr>
            </thead>
            <tbody className="bg-purple-200 ">
              {passwordArray.map((item, index)=>{
                return <tr key= {index}>
                <td className='py-2 text-center w-32' ><a href={item.site} target='_blank'>{item.site}</a></td>
                <td className='py-2 text-center w-32' >{item.username}</td>
                <td className='py-2 text-center w-32' >{item.password}</td>
             </tr>
                 })}
            </tbody>
          </table>}
        </div>
      </div>
    </>
  )
}

export default Manager;
