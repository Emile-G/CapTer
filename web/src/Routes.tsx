import { Router, Route, Set } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={BlogLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
