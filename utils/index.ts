import * as fs from "fs";
import path from "path";
import readline from "readline";

const readLineByLine = async (
  dirname: string,
  filePath: string,
  method: Function
): Promise<any> => {
  const fileStream = fs.createReadStream(path.join(dirname, filePath));
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    return method(line);
  }
};

export { readLineByLine };
