import { expect } from 'chai'
import { startPositioning, gameStarted, gameOver, updateBattleshipPosition } from '../src/redux/actions'

describe('startPositioning', () => {
  it('creates a startPositioning action', () => {
    const type = 'small'

    expect(startPositioning('small')).to.eql({type: 'START_POSITIONING', battleshipType: type})
  })
})

describe('gameStarted', () => {
  it('creates a gameStarted action', () => {
    expect(gameStarted()).to.eql({type: 'GAME_STARTED'})
  })
})

describe('gameOver', () => {
  it('creates a gameOver action', () => {
    expect(gameOver()).to.eql({type: 'GAME_OVER'})
  })
})

describe('updateBattleshipPosition', () => {
  it('creates an updateBattleshipPosition action', () => {
    
  })
})
