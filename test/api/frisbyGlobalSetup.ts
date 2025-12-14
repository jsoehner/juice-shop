import * as frisby from 'frisby'

// Increase frisby/node-fetch request timeout to 20s to reduce CI flakiness
frisby.globalSetup({
  request: {
    timeout: 20000
  }
})
