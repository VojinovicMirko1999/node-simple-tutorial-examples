const { readFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(data);
      }
    });
  });
};

const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
