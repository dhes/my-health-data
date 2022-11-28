#!/bin/bash
npx parcel build src/*.html  --public-url https://dhes.github.io/my-health-data/
git checkout gh-pages
git rm *.html *.js *.map
cp -r dist/* .
git add *.js *.html *.map
git commit -m "Build"
git push
git checkout master