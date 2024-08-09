
function UserRegister() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">User Register</h1>
      <form className="flex flex-col w-80 space-y-4">
        <label htmlFor="name" className="text-lg font-medium">Name</label>
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="email" className="text-lg font-medium">Email</label>
        <input
          type="email"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="password" className="text-lg font-medium">Password</label>
        <input
          type="password"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="phone" className="text-lg font-medium">Phone</label>
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="cep" className="text-lg font-medium">CEP</label>
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="submit"
          value="Register"
          className="mt-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 cursor-pointer transition duration-300"
        />
      </form>
    </div>

  );
}

export default UserRegister;