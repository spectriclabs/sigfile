/**
 * This is an example of using bluefile.js in a node.js context
 */
const { bluefile } = require('../dist/sigfile');
const fs = require('fs');

fs.readFile('../tests/dat/ramp.tmp', function (err, buf) {
  console.log('');

  const hdr = new bluefile.BlueHeader(buf.buffer);

  // Print out some header information
  console.log('Number of elements      :  ' + hdr.size);
  console.log('File type               :  ' + hdr.type);
  console.log('Data format             :  ' + hdr.format);
  console.log('Abscissa units          :  ' + hdr.xunits);
  console.log('Abscissa start          :  ' + hdr.xstart);
  console.log('Abscissa delta          :  ' + hdr.xdelta);

  // Blank line
  console.log('');

  // Print out 10 rows of data in columns of 4
  for (let i = 0; i < hdr.size; ++i) {
    if (i >= 40) {
      break;
    }

    if (i % 4 === 0 && i > 0) {
      process.stdout.write('\n');
    }

    process.stdout.write(hdr.dview[i] + '\t');
  }

  // Blank line
  console.log('');
  console.log('');
});
