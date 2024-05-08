import net from 'net'
import DHT from 'hyperdht'
import EventEmitter from 'events'

const e = new EventEmitter()
const node = new DHT()
const keyPair = DHT.keyPair()
const hyperServer = node.createServer()
console.log(keyPair.publicKey.toString('hex'))

const netServer = net.createServer(function (netSocket) {
  netSocket.on('data', function (data) {
    e.emit('net', data)
  })
  e.on('hyper', data => {
    netSocket.write(data)
  })
})

hyperServer.on('connection', function (hyperSocket) {
  console.log('connected')
  hyperSocket.on('data', function (data) {
    e.emit('hyper', data)
  })
  e.on('net', data => {
    hyperSocket.write(data)
  })
})

netServer.listen(3000, '127.0.0.1')

await hyperServer.listen(keyPair)
