const frames = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let delay = 0;
for (const x of frames) {
  setTimeout(() => {
    process.stdout.write(`\r${x}    `);
  }, delay);
  delay += 200
};
setTimeout(() => {
  process.stdout.write('\n');
}, delay);
