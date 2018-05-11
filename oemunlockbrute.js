const Combinatorics = require('js-combinatorics');
const { exec } = require('child_process');

'use strict';
const fouCmd = 'fastboot oem unlock ';
const ffuCmd = 'fastboot flashing unlock';
const chrs = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const baseN = Combinatorics.baseN(chrs, 20);
let iteration = 0;


// Start here by running: fastboot flashing unlock
const flashingUnlock = () => {
	exec(ffuCmd, () => {
		tryNext();
	});
};

// Iterate through: fastboot oem unlock
const tryNext = () => {
	const nxt = baseN.next();
	const cCmd = `${fouCmd}${nxt.join('')}`;
	exec(cCmd, (error, stdout, stderror) => {
		// console.log('error', error);
		// console.log('stdout', stdout);
		// always returns in stderror, not sure why
		console.log(`Iteration: ${iteration++}`);
		console.log(`Tried: ${nxt.join('')}`);
		console.log(`Returned: ${stderror}`);
		if (/Code validation failure/.test(stderror)) {
			tryNext();
		}
	});
}

flashingUnlock();
