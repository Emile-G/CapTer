import { MetaTags } from '@redwoodjs/web'
import LoginForm from 'src/components/LoginForm'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="container -skew-y-6 mx-12 my-20 md:hidden lg:inline-block">
        <blockquote className="text-2xl leading-10 font-semibold italic text-justify text-stone-50">
          <span className="font-['Lobster'] font-light">CapTer</span> is a
          social network project based on RedWoodJS (V1.0). It's goal is to get
          myself to understand the in and out of the framework. And who is
          "myself" you may ask, well I'm
          <span className="ml-2 -mr-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-teal-400 relative inline-block">
            <span className="relative text-slate-700">Emile-G</span>
          </span>
          , a software engineer who is trying to get more towards the front-end
          end of things.
        </blockquote>
      </div>
      <LoginForm />
    </>
  )
}

export default HomePage
