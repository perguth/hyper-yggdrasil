# Hyper-Yggdrasil

> Allow two [Yggdrasil](https://yggdrasil-network.github.io/) nodes to connect via [hyperdht](https://github.com/holepunchto/hyperdht).

```
Ygg#1
  -> tcp://localhost ->
    -> NodeJS: ( `net` -> `hyperdht` )
      -> INTERNET
        -> NodeJS: ( `hyperdht` -> `net` )
          -> tcp://localhost
            -> Ygg#2
```

## Screencast

![Screencast](screencast.gif)

It shows:

1. Two NodeJS scripts are connected via HyperDHT. They also open a local TCP port.
2. Yggdrasil is started connected to the local HyperDHT server/client via TCP.
3. IPv6 pings are sent via Yggdrasil.
4. Encrypted traffic is observed, pings succeed.

## Related

- About Yggdrasil: https://yggdrasil-network.github.io/
- A public node to play around: https://ygg.thingylabs.io/
- The two main clients:
   - Yggstack: https://github.com/yggdrasil-network/yggstack
   - Yggdrasil: https://github.com/yggdrasil-network/yggdrasil-go
   - Yggdrasil-JS (wip): https://github.com/Saiv46/yggdrasil-js
- Public peer list: https://github.com/yggdrasil-network/public-peers

***
👋 Idea kicked off at [Hackergarten Stuttgart](https://www.meetup.com/de-DE/hackergarten-stuttgart/).
