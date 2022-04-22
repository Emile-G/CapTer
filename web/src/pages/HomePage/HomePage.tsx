import { MetaTags } from '@redwoodjs/web'
import LoginForm from 'src/components/LoginForm/LoginForm'
import Textlanding from 'src/components/Textlanding/Textlanding'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="w-full h-full lg:h-1/2 flex">
        <Textlanding />
        <LoginForm />
      </div>
      <div className="hidden lg:flex h-1/2 w-full">
        <div className="m-auto">
          <span className="w-28 h-28 rounded-full inline-block border-t-8 border-l-8 border-teal-400 animate-pulse"></span>
          <span className="w-28 h-28 -ml-10 rounded-full inline-block border-r-8 border-b-8 border-teal-400 animate-pulse"></span>
        </div>
      </div>
    </>
  )
}

export default HomePage
