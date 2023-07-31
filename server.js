//console.log("hi");
//console.log(global);
//const os = require("os");

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

//const fs = require("fs");
const path = require("path");
const fsPromises = require("fs/promises");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "foldernode", "renamestart.txt"),
      "utf8"
    );
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
fileOps();
// fs.readFile(
//   path.join(__dirname, "foldernode", "start.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );
// fs.writeFile(
//   path.join(__dirname, "foldernode", "newfile.txt"),
//   " created new file",
//   (err) => {
//     if (err) throw err;
//     console.log("write complete");
//     fs.appendFile(
//       path.join(__dirname, "foldernode", "start.txt"),
//       "first append in fisrt file",
//       (err) => {
//         if (err) throw err;
//         console.log("append completed in the first file");
//         fs.rename(
//           path.join(__dirname, "foldernode", "start.txt"),
//           path.join(__dirname, "foldernode", "renamestart.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log(" rename completed in the first file");
//           }
//         );
//       }
//     );
//   }
//);
