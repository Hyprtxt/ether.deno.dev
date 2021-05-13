# Gaslight.dev

Server side coding, that feel like client side react coding, without the lame parts. Except it's serverless. Wait, I mean isomorphic!

`/public` is client side assets
`/elements` and `gaslight.js` are isomorphic and may be loaded server side or client side
`*.ts` Most of the other bits are Deno typescript
`website.ts` is the entry point for your… application

Don't get confused!

## What it is

https://github.com/developit/htm
https://github.com/developit/vhtml
https://deno.land/x/sift

* server side scaffolding for Deno serverless JavaScript

## What it isn't 

* React/JSX
* Preact
* A client side framework
* Compatible with Internet Exploder

## How To

Install Deno: from source `cargo install deno --locked` or https://deno.land/#installation

Install deployctl: `deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -r -f https://deno.land/x/deploy/deployctl.ts`

clone the project, open up your favorite editor and run `make develop`

### Works with Deno Deploy

Sign Up at: http://deno.dev/ to deploy things live.
You'll need bring your own static asset hosting though...
