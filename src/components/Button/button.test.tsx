import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonType, ButtonProps, ButtonSize} from './button'

const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'klass'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

test('my first react test', () => {
  
})

describe('test button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>wulei</Button>)
    const element = wrapper.getByText('wulei') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element.disabled).toBeFalsy()
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct default based on different props', () => {
    const wrapper = render(<Button {...testProps}>wulei</Button>)
    const element = wrapper.getByText('wulei')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-lg btn-primary klass')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href="http://www.baidu.com">Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn-link btn')
  })
  it('should render a disabled button', () => {
    const wrapper = render(<Button {...disabledProps}>nice</Button>)
    const element = wrapper.getByText('nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(defaultProps.onClick).not.toHaveBeenCalled()
  })
})