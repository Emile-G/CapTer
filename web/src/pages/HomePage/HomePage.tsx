import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="container mx-auto md:mr-8 my-8 flex place-content-end">
        <form className="w-1/2 h-fit px-8 pt-6 pb-8 rounded-tr-xl rounded-bl-xl bg-slate-700 drop-shadow-lg">
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
              className="bg-teal-400 hover:bg-teal-500 text-gray-700 hover:text-stone-50 group py-2 px-14 sm:px-8 rounded-tl-xl rounded-br-xl focus:outline-none focus:shadow-outline"
              type="button"
            >
              LOGIN
              <span className="w-3 h-3 ml-2 rounded-full inline-block border-t-2 border-l-2 border-gray-700 group-hover:border-stone-50"></span>
              <span className="w-3 h-3 -ml-1.5 rounded-full inline-block border-r-2 border-b-2 border-gray-700 group-hover:border-stone-50"></span>
            </button>
            <a
              className="inline-block align-baseline font-light text-sm text-teal-400 hover:text-stone-50"
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
    </>
  )
}

export default HomePage
