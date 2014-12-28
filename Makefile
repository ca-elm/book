elm.js: src/*.elm src/**/*.elm src/Native/*.js
	elm-make src/Main.elm

gh-pages:
	git checkout --detach
	git symbolic-ref HEAD refs/heads/gh-pages
	make elm.js
	git rm -rf .gitignore Makefile elm-package.json src "Book.sublime-*"
	git add elm.js
	git commit --amend --no-edit
	git checkout -
	make elm.js

publish: gh-pages
	git push origin gh-pages --force

.PHONY: gh-pages publish
