import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string
  name: string
  password: string
  phone: string
  CEP: string
}

function UserRegister() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex flex-col justify-center items-center max-h-screen gap-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">User Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-80 space-y-4">
        <label htmlFor="name" className="text-lg font-medium">Name</label>
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <label htmlFor="email" className="text-lg font-medium">Email</label>
        <input
          type="email"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <label htmlFor="password" className="text-lg font-medium">Password</label>
        <input
          type="password"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <label htmlFor="phone" className="text-lg font-medium">Phone</label>
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("phone", { required: true })}
        />
        {errors.phone && <span>This field is required</span>}
        <label htmlFor="cep" className="text-lg font-medium">CEP</label>
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("CEP", { required: true })}
        />
        {errors.CEP && <span>This field is required</span>}
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