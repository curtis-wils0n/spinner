const wheel = ['🌕', '🌔', '🌓', '🌒' ,'🌑', '🌘', '🌗', '🌖'];
let interval = 200;
let timeoutClock = 0;
const rotations = 2;

for (let i = 0; i <= wheel.length * rotations; i++) {
  setTimeout(() => {
    i < wheel.length * rotations ? process.stdout.write(`\r${wheel[i % wheel.length]}   `) : process.stdout.write(`\r${wheel[0]}   \n`);
  }, timeoutClock += interval);
}