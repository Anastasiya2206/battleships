import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import Cell from '../src/components/cell'

describe('<Cell />', () => {
  it('returns a single cell', () => {
    const wrapper = shallow(<Cell index={1} x={1} y={1} connectDropTarget={() => {}}/>)

    expect(wrapper.find('.cell-grid')).to.have.length(1)
  })
})

