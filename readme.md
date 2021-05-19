# Gaslight.dev

Server side coding, that feels like client side react coding, without the lame parts. Except it's serverless isomorphic javascript. So of course it lives on whole ton of servers on the cloud. Also some of the JS works client side!

* `/public` is client side assets
* `/elements` and `gaslight.js` are isomorphic and may be loaded server side or client side
* `*.ts` Most of the other bits are Deno typescript
* `website.ts` is the entry point for your… application
* Don't get confused!

## What it is

* isomorphic server side scaffolding for Deno serverless JavaScript

`gaslight.js`

https://github.com/developit/htm
https://github.com/developit/vhtml

I ~stole and~ combined these projects, just like the instructions on the readme.md of htm instructs you to do. I call it `gaslight.js` because isomorphic serverless js projects are really easy to understand.

`sift.ts`

https://deno.land/x/sift

I tore out all of the (p)react and JSX stuff; Commented out the caching; And added this magical line `/// <reference lib="dom" />` to make it all work again. That last bit wasn't easy. Thinking about calling it `grate.ts` if I do a rename.


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
