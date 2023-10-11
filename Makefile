install: # clean install
	npm ci
brain-games: #run the game
	node bin/brain-games.js
publish:
	npm publish --dry-run


