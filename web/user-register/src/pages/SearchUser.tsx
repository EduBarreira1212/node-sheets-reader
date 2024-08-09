import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchUser = () => {
    const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen justify-center items-center">
        <h1>Search User</h1>
        <form className="flex flex-col justify-center items-center">
            <input type="email" />
            <input type="password" />
            <input type="submit" value="Search" />
        </form>
        <button onClick={() => navigate("/")}>Register New User</button>
    </div>
  )
}

export default SearchUser;