import { MetaTags } from '@redwoodjs/web'
import LoginForm from 'src/components/LoginForm/LoginForm'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="container mx-auto md:mr-8 my-8 flex place-content-start"></div>
      <LoginForm />
    </>
  )
}

export default HomePage
