elm.js: *.elm **/*.elm Native/*.js Katex/*
	elm-make Main.elm

gh-pages:
	git checkout --detach
	git symbolic-ref HEAD refs/heads/gh-pages
	git rm -f .gitignore
	make elm.js
	git add elm.js
	git commit --amend --no-edit
	git checkout -
	make elm.js

publish: gh-pages
	git push origin gh-pages --force

.PHONY: gh-pages publish
