import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import Login from '../src/components/login'

describe('<Login />', () => {
  it('returns the html form', () => {
    const wrapper = shallow(<Login />)

    expect(wrapper.find('.login-box')).to.have.length(1)
  })
})
