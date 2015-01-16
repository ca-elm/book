elm.js: $(wildcard src/*.elm) $(wildcard src/**/*.elm) $(wildcard src/Native/*.js) $(wildcard base/src/*.elm) $(wildcard base/src/**/*.elm) $(wildcard base/src/Native/*.js)
	elm-package install --yes
	elm-make --yes src/Main.elm

gh-pages:
	$(eval sha = $(shell git rev-parse HEAD))
	git checkout --detach --quiet
	git symbolic-ref HEAD refs/heads/gh-pages
	$(MAKE) elm.js
	git checkout gh-pages -- .gitignore
	git rm -r --force --quiet --cached .
	git add .
	git commit --quiet --allow-empty -m 'Build $(sha)'$$'\n\n''This branch should not have any history. It is automatically generated by the gh-pages target of the makefile on the master branch.'
	git checkout -
	$(MAKE) elm.js

publish: gh-pages
	git push origin gh-pages --force

.PHONY: gh-pages publish
