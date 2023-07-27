"use client";
import Link from "next/link";
import React, { useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";






export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setloading] = React.useState(false);

    const onSignup  = async () => {
        try {
            setloading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");

        } catch (error: any) {
            console.log("Signup failed", error.message);
            toast.error(error.message);
        }finally {
            setloading(false)
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        }else {
            setButtonDisabled(true);
        }
    }, [user])


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? "Processing" : "Signup"}</h1>
            <br />
            <label htmlFor="username"> USERNAME</label>
            <input className="p-2 border border-gray-300 text-black"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            />

            <label htmlFor="email"> Email</label>
            <input className="p-2 border border-gray-300 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />


            <label htmlFor="password"> Password</label>
            <input className="p-2 border border-gray-300 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onSignup} 
            className="px-4 py-2 bg-blue-500 hover:bg-red-600 text-white 
            font-semibold rounded shadow-md transition duration-300 ease-in-out mt-4 mb-4"
            >{buttonDisabled ? "No signup" : "Signup done"}
                </button>
                <Link href="/login">Visit login</Link>
        </div>
    )
}