import * as fs from "fs";
import path from "path";
import readline from "readline";

const readFile = async (): Promise<any> => {
  const content = fs.readFileSync(path.join(__dirname, "input"), "utf-8");

  let result = 0;

  const parsed = content.match(/mul\([0-9]+,[0-9]+\)/g);

  parsed.map((elm) => {
    const [a, b] = elm
      .toString()
      .replace("mul(", "")
      .replace(")", "")
      .split(",");
    return (result += parseInt(a) * parseInt(b));
  });

  return result;
};

(async () => {
  const result = await readFile();
  console.log("result", result);
})();
