
all: clean install test
	@:

install:
	@npm install

clean:
	@rm -rf node_modules

test:
	@node test.js

.PHONY: test
