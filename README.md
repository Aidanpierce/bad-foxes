# bad-foxes
A silly little 3-file website that creates breaking bad foxes. See the GitHub Page [here](https://aidanpierce.github.io/bad-foxes/)!

## API Usage
This website uses apis from this [public api repository](https://github.com/public-apis/public-apis) for its content.

Specifically, credit to [breaking-bad-quotes](https://github.com/shevabam/breaking-bad-quotes) and [randomfox.ca](https://github.com/xinitrc-dev/randomfox.ca) for the two apis I used.

## Lessons Learned
Surprisingly this project has actually led to some knowledge gained! As it turns out, if you have a file that was validly served in one deployment of your page, you cannot change where GitHub retrieves it from. Only by renaming the deployed file to something else can you make GitHub reevaluate which file should be served. After this is done, however, you can rename the changed file to have its original name again.

What occurred was:
* I served a GitHub Page with README.md content from the root folder of the main branch.
* I renamed my src folder containing index.html to docs and set the deployment target of GitHub Pages to the /docs folder.
* At this point the deployed page did not change - it was still the README.md content.
* I then changed the name of README.md to README_.md, and the deployed page changed to the content of index.html.
* Then I changed README_.md to README.md once more, and the index.html page remained the page that was served.

Kind of odd!

## Trigger warning
If you aren't aware, breaking bad quotes are sometimes graphic. Probably don't open this page if you're under 16.

## Authors
Written by Aidan Behn-Wehner, with the help of claude AI.
