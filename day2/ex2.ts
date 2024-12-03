import * as fs from "fs";
import path from "path";
import readline from "readline";

function isMonotonic(arr: number[]): boolean {
  if (arr.length <= 1) {
    return true;
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

function isMonotonicRemovingOneElement(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    const newArr = arr.slice(0, i).concat(arr.slice(i + 1));
    if (isMonotonic(newArr)) {
      return true;
    }
  }

  return false;
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
    } else if (isMonotonicRemovingOneElement(numbers)) {
      result += 1;
    }
  }

  return result;
};

(async () => {
  const result = await readLineByLine();
  console.log("result", result);
})();
