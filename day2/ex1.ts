import * as fs from "fs";
import path from "path";
import readline from "readline";

function isMonotonic(arr: number[]): boolean {
  if (arr.length <= 1) {
    return true; // Une liste vide ou avec un seul élément est considérée monotone.
  }

  const isIncreasing = arr.every(
    (val, index, arr) =>
      index === 0 || (val > arr[index - 1] && val - arr[index - 1] < 4)
  );
  const isDecreasing = arr.every(
    (val, index, arr) =>
      index === 0 || (val < arr[index - 1] && arr[index - 1] - val < 4)
  );

  return isIncreasing || isDecreasing;
}

const readLineByLine = async (): Promise<any> => {
  const fileStream = fs.createReadStream(path.join(__dirname, "input"));
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let result = 0;

  for await (const line of rl) {
    const numbers = line.split(" ").map((n) => parseInt(n));
    if (isMonotonic(numbers)) {
      result += 1;
    }
  }

  return result;
};

(async () => {
  const result = await readLineByLine();
  console.log("result", result);
})();
