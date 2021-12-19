import HelloModule from './HelloModule'
import {render} from '@testing-library/react'

describe('HelloModule', () => {
  test('it renders', () => {
    const {getByText} = render(<HelloModule />)
    expect(getByText('Hello Ergofund')).toBeDefined()
  })
})
