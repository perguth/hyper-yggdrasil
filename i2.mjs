import net from 'net';
import DHT from 'hyperdht'

const node = new DHT()

const hyperSocket = node.connect(
'c398456445c238e56ec9a6ddd0aecb33e527b33ecf16293d53106e0f8cadbeb7'
)


var netServer = net.createServer(function(netSocket) {
	netSocket.pipe(hyperSocket).pipe(netSocket)
})


// Yggdrasil verbindet hier
netServer.listen(3001, '127.0.0.1');
