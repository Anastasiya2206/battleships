import { range } from '../src/helpers/functions'
import { expect } from 'chai'

describe('range', () => {
  it('returns a range', () => {
    expect(range(5)).to.eql([0,1,2,3,4]);
  })
})
