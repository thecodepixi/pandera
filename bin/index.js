import word from "../index.js";

function writeToConsole(output) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(output);
}

console.log("Choosing a word for you...");

(async function demo() {
  for (let i = 0; i < 500; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await new Promise((resolve) => setTimeout(resolve, 5));
    const spinner = ["/ ", "—", "\\ ", "| "];
    const output = spinner[i % 4] + word();
    writeToConsole(output);
  }
})().then(() => writeToConsole(`=> ${word()}\n`));
