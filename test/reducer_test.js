import { expect } from 'chai'
import battleshipApp from '../src/redux/reducer'
import defaultState from '../src/redux/state'
import * as actions from '../src/redux/actions'

describe('Battleship app reducer', () => {
  it('returns the initial state', () => {
    expect(battleshipApp(undefined, {})).to.eql(
      defaultState
    )
  })

  it('handles the START_GATE action', () => {
    expect(battleshipApp(defaultState, actions.gameStarted)).to.eql(
      Object.assign(defaultState, { gameStarted: true })
    )
  })

  it('handles the END_GATE action', () => {
    expect(battleshipApp(defaultState, actions.gameOver)).to.eql(
      Object.assign(defaultState, { gameOver: true })
    )
  })
})
