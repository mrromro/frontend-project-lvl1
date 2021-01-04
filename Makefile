.PHONY: install brain-games publish

install:
	npm install

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/game.js even

brain-calc:
	node bin/game.js calc

brain-gcd:
	node bin/game.js gcd

brain-progression:
	node bin/game.js progression

brain-prime:
	node bin/game.js prime

publish:
	npm publish --dry-run

lint:
	npx eslint . --ignore-path .gitignore
