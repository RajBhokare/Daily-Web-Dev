import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type your URL",
      name: "url"
    }
  ])
  .then((answers) => {
    const url = answers.url;

    qr.image(url).pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile('message.txt', url, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

    console.log("QR code generated successfully!");
  })
  .catch((error) => {
    console.log(error);
  });