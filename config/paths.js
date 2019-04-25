const path = require('path');
const glob = require('fast-glob');
const { replaceExtension } = require('ds-toolbox-test/tasks/utils');

const OUTPUT_DIR = './static/temp';

const mappedStyles = async () => {
  // note: ignore '_' prefixed files
  const sassDirs = await glob([
    './static/sass/[^_]*.scss'
  ]);
  const styleDirs = sassDirs.map(file => ({
    in: file,
    out: path.join(OUTPUT_DIR, replaceExtension(path.basename(file), '.css')),
  }));
  return styleDirs;
};


const mappedIcons = [
  {
    in: 'ds-toolbox-test/tasks/base',
    out: `${OUTPUT_DIR}/svg-sprite.html`,
  }
];


module.exports = {
  mappedStyles,
  mappedIcons
};