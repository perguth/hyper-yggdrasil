# Hyper-Yggdrasil

> Allow two Yggdrasil nodes to connect via [hyperdht](https://github.com/holepunchto/hyperdht).

```
Ygg#1
  -> tcp://localhost ->
    -> NodeJS: ( `net` -> `hyperdht` )
      -> INTERNET
        -> NodeJS: ( `hyperdht` -> `net` )
          -> tcp://localhost
            -> Ygg#2
```

![Screencast](screencast.gif)
