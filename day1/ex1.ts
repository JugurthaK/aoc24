import * as fs from "fs";
import path from "path";
import readline from "readline";

const readLineByLine = async (): Promise<any> => {
  const fileStream = fs.createReadStream(path.join(__dirname, "input"));
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const left = [];
  const right = [];
  let result = 0;

  for await (const line of rl) {
    const [a, b] = line.split("   ");
    left.push(parseInt(a));
    left.sort((a, b) => a - b);
    right.push(parseInt(b));
    right.sort((a, b) => a - b);
  }

  left.forEach((a: number, index: number) => {
    result += Math.abs(a - right[index]);
  });

  return result;
};

(async () => {
  const result = await readLineByLine();
  console.log("result", result);
})();
