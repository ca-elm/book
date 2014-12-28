elm.js: *.elm **/*.elm Native/*.js Katex/*
	elm-make Main.elm

gh-pages:
	git checkout gh-pages
	git checkout master -- "*"
	git rm -f .gitignore
	git add --all
	git commit --amend --no-edit
	git checkout -

publish: gh-pages
	git push origin gh-pages --force

.PHONY: gh-pages publish
