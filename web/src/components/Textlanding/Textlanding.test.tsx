import { render } from '@redwoodjs/testing/web'

import Textlanding from './Textlanding'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Textlanding', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Textlanding />)
    }).not.toThrow()
  })
})
