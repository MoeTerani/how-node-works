const fs = require('fs');

fs.writeFileSync(
  './test-answer.txt',
  'This the first line writen by fs.writeFileSync.'
);

fs.appendFileSync(
  './test-answer.txt',
  ' This the secong line added by appendix'
);
