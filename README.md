# Ziel:

> Ygg Go <-> Hyper JS

## Verbingung zwischen zwei Rechnern ueber Yggdrasil

User#1:
- Yggrasil Config:
  - hyper://key2

- Keypair
b14b434054df8d01cf6a3aafd054f00fd0e843c77ac6209e40aeeb18d6d1ecb7
583536a2d3e921ed1984b54848cfd3d1a26af1db165643119d06bdbec7657b50b14b434054df8d01cf6a3aafd054f00fd0e843c77ac6209e40aeeb18d6d1ecb7

User#2:
- Keypair

ec00d3bb64ac5811c460d14bbd135ce83eba53b0aae7b98eacabd8f91e2bf2be
259905d8c1696667af49dbb795d7b2addc9318ff601622be4aa847c304e3a87fec00d3bb64ac5811c460d14bbd135ce83eba53b0aae7b98eacabd8f91e2bf2be

## Frage 1

Wie TCP Traffik in JS entgegen nehmen? 

- NodeJS App (1) macht nen Port auf fuer TCP-Verbindungen.
- Yggdrasil Go App (2) verbindent auf diesen Port (tcp://localhost:PORT/key).
- (1) nimmt Traffik und schickt diesen durch HyperDHT an Ziel: key.

Ygg#1 -> Localhost - (buffer) -> NodeJS: net (o.O) -> hyperdht -> hyperdht -> NodeJS: net -> localhost -> Ygg#2
