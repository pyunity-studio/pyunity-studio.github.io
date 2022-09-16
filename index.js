const execSync = require('child_process').execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules

const install_n8n = execSync('npm install n8n -g', { encoding: 'utf-8' });  // the default is 'buffer'
console.log('Output was:\n', install_n8n);
const run_n8n = execSync('n8n start --tunnel', { encoding: 'utf-8' });  // the default is 'buffer'
console.log('Output was:\n', run_n8n);

