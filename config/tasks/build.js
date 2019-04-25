// lib
const stylesRunner = require('ds-toolbox-test/tasks/styles');
const iconsRunner = require('ds-toolbox-test/tasks/icons');

const { mappedStyles, mappedIcons } = require('../paths.js');

async function build() {
  // compile styles
  const mappedStylesArr = await mappedStyles();
  await stylesRunner(mappedStylesArr);

  // compile icons
  await iconsRunner(mappedIcons);
}

build()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Success!');
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.log(err);
    process.exit(1);
  });
