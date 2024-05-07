import net from 'net';
import DHT from 'hyperdht'
import b4a from 'b4a'

const node = new DHT()
const keyPair = DHT.keyPair()
const hyperServer = node.createServer()
console.log(keyPair.publicKey.toString('hex'))

var netServer = net.createServer(function(netSocket) {
	hyperServer.on('connection', function (hyperSocket) {
		// HyperDHT connects here
		netSocket.pipe(hyperSocket).pipe(netSocket)
	})
})


// Yggdrasil verbindet hier
netServer.listen(3000, '127.0.0.1');

hyperServer.listen(keyPair)
