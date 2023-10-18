install: # clean install
	npm ci
brain-games: #run the testing game
	node bin/brain-games.js
brain-even: #run the even game
	node bin/brain-even.js
publish:
	npm publish --dry-run
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8
lint:
	npx eslint .
.PHONY: test
