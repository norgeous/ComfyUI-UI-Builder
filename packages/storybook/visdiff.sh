#!/bin/bash

cd ../../
rm -r ./packages/storybook/visdiff-report/ # delete the old report
mkdir ./packages/storybook/visdiff-report/

git checkout main _storycaps_ # checkout the _storycaps_ folder from main to current branch
cp -r ./_storycaps_ ./packages/storybook/visdiff-report/expected/ # copy main's baseline in the report's /expected/ folder

rm -r ./_storycaps_/ # remove the _storycaps_ currently on branch, as a story might have been removed
npm run storycap -w packages/storybook # generate a new _storycaps_ baseline

npm run regression -w packages/storybook # generate the report
npm run serve:visdiff -w packages/storybook # serve the report
