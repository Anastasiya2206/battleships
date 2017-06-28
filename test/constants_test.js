import { ItemTypes } from '../src/helpers/constants'
import { expect } from 'chai'

describe('ItemTypes', () => {
  it('returns the drag and drop ItemTypes', () => {
    expect(ItemTypes).to.eql({BATTLESHIP: 'battleship'});
  })
})
