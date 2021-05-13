welcome:
	cat Makefile
run: 
	deployctl run --libs=ns,fetchevent --watch website.ts
# deployctl run --unstable --libs=ns,fetchevent --watch website.ts
static:
	deno run --quiet --allow-read --allow-net https://deno.land/std/http/file_server.ts . --cors --port 8081 --no-dotfiles
develop:
	make static &
	make run
	