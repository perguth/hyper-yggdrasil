import net from 'net';
import DHT from 'hyperdht'
import EventEmitter from 'events'

const node = new DHT()
const e = new EventEmitter()

let hyperSocket = node.connect(process.argv[2])

hyperSocket.on('open', function () {
  console.log('Client connected!')
})

var netServer = net.createServer(function(netSocket) {
        console.log('listening')
        netSocket.on('data', function (data) {
                console.log('net:', data)
		hyperSocket.write(data)
        })
        hyperSocket.on('data', function (data) {
                console.log('hyper:', data)
                netSocket.write(data)
        })
	hyperSocket.on('close', _ => {
		hyperSocket = node.connect(process.argv[2])
	})
})


netServer.listen(3001, '127.0.0.1');
