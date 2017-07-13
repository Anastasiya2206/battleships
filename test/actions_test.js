import { expect } from 'chai'
import { startPositioning, gameStarted, gameOver, updateBattleshipPosition } from '../src/redux/actions'

describe('Actions', () => {

  it('creates a startPositioning action', () => {
    const type = 'small'

    expect(startPositioning('small')).to.eql({type: 'START_POSITIONING', battleshipType: type})
  })

  it('creates a gameStarted action', () => {
    expect(gameStarted()).to.eql({type: 'GAME_STARTED'})
  })

  it('creates a gameOver action', () => {
    expect(gameOver()).to.eql({type: 'GAME_OVER'})
  })

  it('creates an updateBattleshipPosition action', () => {
    const type = 'tiny'
    const position = [5,5]
    const playerId = 'player1'
    const dataInfo = {
      players: {
        byId: {
          [playerId]: {
            battleShips: {
              byType: {
                [type] : { position: position }
              }
            }
          }
        }
      }
    }
    expect(updateBattleshipPosition(playerId, type, position)).to.eql({
      type: 'UPDATE_POSITION',
      data: dataInfo
    })
  })
})
