#!/usr/bin/env node

const word = require('../index')

function writeToConsole() {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(word());
}

console.log("Choosing a word for you...");

(async function demo() {
  for (let i = 0; i < 500; i++) {
    await new Promise(resolve => setTimeout(resolve, 5));
    writeToConsole();
  }
})();
