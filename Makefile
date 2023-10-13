install: # clean install
	npm ci
brain-games: #run the game
	node bin/brain-games.js
publish:
	npm publish --dry-run
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8
lint:
	npm eslint .
.PHONY: test
