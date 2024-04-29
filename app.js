const fs = require("fs");
const axios = require("axios");
const puppeteer = require("puppeteer");
const readline = require("readline");

async function main() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  interface.question("Masukkan URL: ", async (inputURL) => {
    await page.goto(inputURL);
    await page.waitForSelector("video");

    const videoUrl = await page.evaluate(() => {
      const video = document.querySelector("video");
      return video.src;
    });

    // Meminta pengguna untuk memasukkan nama file yang diinginkan
    interface.question("Masukkan nama file output (tanpa ekstensi): ", async (fileName) => {
      const outputPath = `output/${fileName}.mp4`;

      // Writer
      const writer = fs.createWriteStream(outputPath);
      const response = await axios({
        url: videoUrl,
        method: "GET",
        responseType: "stream",
      });

      response.data.pipe(writer);
      console.log(`Video berhasil disimpan sebagai ${outputPath}!`);

      browser.close();
      interface.close();
    });
  });
}

main();

// contoh input:
// Video URL: https://www.instagram.com/reel/C6UMCIIvHHd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
// Nama File (tanpa ekstensi): kucing_nyanyi