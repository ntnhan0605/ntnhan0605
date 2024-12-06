const { resolve } = require('path');
const fs = require('fs/promises');

var colors = require(resolve(__dirname, '../tailwindThemeExtend.js'));
var variablesFile = resolve(__dirname, '../styles/variables.module.scss');

function generateVariablesContentSCSS(colors) {
  var variablesContent = '';
  Object.keys(colors).map((key) => {
    const value = colors[key];
    if (typeof value === 'string') {
      variablesContent += `$${key}: ${value};\n`;
    } else if (Object.keys(value).length) {
      variablesContent += `${generateVariablesContentSCSS(value)}\n`;
    }
  });
  return variablesContent;
}

function generateExportContentSCSS(colors, lvl = 0) {
  var content = '';
  var tab = '\t'.repeat(lvl);
  Object.keys(colors).map((key) => {
    const value = colors[key];
    if (typeof value === 'string') {
      content += `${tab}\t${key}: ${colors[key]};\n`;
    } else if (Object.keys(value).length) {
      tab = `\t`.repeat(lvl + 1);
      content += `${tab}${key}: {\n`;
      content += generateExportContentSCSS(value, lvl + 1);
      content += `${tab}}\n`;
    }
  });
  return content;
}

async function writeVariablesFileSCSS(colors) {
  let content = generateVariablesContentSCSS(colors);
  content += `:export {\n` + generateExportContentSCSS(colors) + '}';
  await fs.writeFile(variablesFile, content);
}

writeVariablesFileSCSS(colors);
