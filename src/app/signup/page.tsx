"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";





export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup  = async () => {

    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <br />
            <label htmlFor="username"> USERNAME</label>
            <input className="p-2 border border-gray-300"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            />

            <label htmlFor="email"> Email</label>
            <input className="p-2 border border-gray-300"
            id="email"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />


            <label htmlFor="password"> Password</label>
            <input className="p-2 border border-gray-300"
            id="password"
            type="password"
            value={user.username}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onSignup} 
            className="px-4 py-2 bg-blue-500 hover:bg-red-600 text-white 
            font-semibold rounded shadow-md transition duration-300 ease-in-out"
            >
                Signup</button>
                <Link href="/login">Visit login</Link>
        </div>
    )
}