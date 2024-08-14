import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Submit from '../components/Submit';
import { SubmitHandler, useForm } from 'react-hook-form';
import ErrorMessage from '../components/ErrorMessage';
import Label from '../components/Label';
import getUser from '../services/getUser';

interface Inputs {
    email: string
    password: string
}

interface IUser {
    name: string
    email: string
    password: string
    phone: string
    CEP: string
};

const SearchUser = () => {
    const [user, setUser] = useState<IUser>();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const user = await getUser(data);
        setUser(user);
    };

    return (
        <div className="flex flex-col min-h-screen justify-center items-center gap-12 bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">Search User</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-80 space-y-4">
                <Label>E-mail</Label>
                <input
                    type="email"
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("email", { required: true })}
                />
                {errors.email && <ErrorMessage />}
                <Label>Password</Label>
                <input
                    type="password"
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("password", { required: true })}
                />
                {errors.password && <ErrorMessage />}
                <Submit value="Search" />
            </form>
            {user &&
                <section className="flex flex-col gap-3 border p-5 border-gray-300 rounded-lg">
                    <p>Name: {user.name}</p>
                    <p>E-mail: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>CEP: {user.CEP}</p>
                </section>}
            <button onClick={() => navigate("/user-register")} className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300">Register New User</button>
        </div>
    )
}

export default SearchUser;