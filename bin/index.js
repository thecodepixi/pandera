#!/usr/bin/env node

const word = require('../index')

function writeToConsole(output) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(output);
}

console.log("Choosing a word for you...");

(async function demo() {
  for (let i = 0; i < 500; i++) {
    await new Promise(resolve => setTimeout(resolve, 5));
    let spinner = ["/ ", "—", "\\ ", "| "]
    output = spinner[i % 4] + word()
    writeToConsole(output);
  }
})().then( () => writeToConsole("=> " + word() + "\n") );

