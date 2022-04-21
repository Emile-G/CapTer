const LoginForm = () => {
  return (
    <div className="container mx-auto px-12 pr-24 py-12 flex place-content-end">
      <form className="w-full xl:w-8/12 h-fit px-8 pt-6 pb-6 rounded-tr-xl rounded-bl-xl bg-slate-700 drop-shadow-lg">
        <p className="font-['Lobster'] underline text-2xl text-center text-stone-50">
          Go se CapTer !
        </p>
        <div className="mb-4">
          <label
            className="block text-md font-light mb-2 pt-2 text-stone-50"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline rounded-md"
            type="text"
            name="username"
            id=""
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-md font-light mb-2 text-stone-50"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full rounded-md border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />
        </div>

        <div className="flex items-center justify-between mb-5">
          <button
            className="bg-teal-400 hover:bg-teal-500 text-gray-700 hover:text-stone-50 group md:py-2 md:px-14 md:font-normal sm:px-6 sm:font-light sm:py-1 rounded-tl-xl rounded-br-xl focus:outline-none focus:shadow-outline"
            type="button"
          >
            LOGIN
            <span className="md:hidden xl:inline-block w-3 h-3 ml-2 rounded-full inline-block border-t-2 border-l-2 border-gray-700 group-hover:border-stone-50"></span>
            <span className="md:hidden xl:inline-block w-3 h-3 -ml-1.5 rounded-full inline-block border-r-2 border-b-2 border-gray-700 group-hover:border-stone-50"></span>
          </button>
          <a
            className="inline-block align-baseline font-light text-sm text-teal-400 hover:text-stone-50 sm:ml-2"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <p className="text-center text-md font-light text-stone-50">
          Don't have an account?{' '}
          <a className="font-light text-md text-teal-400 hover:text-stone-50">
            Create one here!
          </a>
        </p>
      </form>
    </div>
  )
}

export default LoginForm
