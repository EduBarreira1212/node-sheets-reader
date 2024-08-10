import React from 'react'
import { useNavigate } from 'react-router-dom'
import Submit from '../components/Submit';

const SearchUser = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen justify-center items-center gap-12 bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">Search User</h1>
            <form className="flex flex-col w-80 space-y-4">
                <label htmlFor="email" className="text-lg font-medium">E-mail</label>
                <input type="email" className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <label htmlFor="email" className="text-lg font-medium">Password</label>
                <input type="password" className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <Submit value="Search"/>
            </form>
            <section className="flex flex-col gap-3 border p-5 border-gray-300 rounded-lg">
                <p>Name:</p>
                <p>E-mail:</p>
                <p>Password:</p>
                <p>Phone:</p>
                <p>CEP:</p>
            </section>
            <button onClick={() => navigate("/")} className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300">Register New User</button>
        </div>
    )
}

export default SearchUser;