#!/usr/bin/env node

const http = require('http');
const httpProxy = require('http-proxy');

const args = process.argv.slice(2);
const [host, port, changeOrigin] = args;

const proxy = httpProxy.createProxyServer({ target: host, changeOrigin, }).listen(port);

proxy.on('error', (error) => {
  console.log(error);
});

proxy.on('proxyRes', (ProxyReq, req, res) => {
  console.log(`Incoming request: ${req.method} http://${req.headers.host}${req.url}`);
  console.log(`Outcoming request: ${req.method} ${host}${req.url}`);
});
