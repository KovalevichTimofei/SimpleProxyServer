# Description

Simple proxy server. It tosses all requests without changes.

# How to use

`node server.js host port changeOrigin`

`host` - host and port of the target server. For example `localhost:3000`.

`port` - port of the your proxy-server.

`changeOrigin` - set `true` if your target server works through `https`.
