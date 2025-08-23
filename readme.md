# CPC Website

This is the website for the Competitive Programming Club (https://cpcosu.github.io).

The setup is a bit jank right now. The root of this repository is what is used for Github pages, so the root contains the built HTML files. The source code for the website can be found in `new-website`. If any changes are made to that, running the `deploy.sh` inside that folder will build the site and move the built HTML files to the root, which you can then commit and push. Github Actions will do the rest.
