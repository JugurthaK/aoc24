import * as fs from "fs";
import path from "path";
import readline from "readline";

const readFile = async (): Promise<any> => {
  const input = fs.readFileSync(path.join(__dirname, "input"), "utf-8");

  const left = [];
  const right = [];
  let result = 0;

  input
    .toString()
    .split("\n")
    .forEach((line) => {
      const [a, b] = line.split("   ");
      left.push(a);

      right.push(b);
    });

  left.forEach((num: number) => {
    const occurences = right.filter((b) => b === num).length;
    result += occurences * num;
  });

  return result;
};

(async () => {
  const result = await readFile();
  console.log("result", result);
})();
