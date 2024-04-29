# How to Run JavaScript File with Node.js

This guide will help you execute the provided JavaScript file (`app.js`) using Node.js. The script allows you to download videos from a specified URL.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) - JavaScript runtime environment

## Steps

1. **Clone the Repository**: Clone or download the repository containing the JavaScript file to your local machine.

    ```bash
    $ git clone https://github.com/yaffawijaya/instagram-reels-downloader.git
    ```

2. **Install Dependencies**: Open your terminal or command prompt, navigate to the repository directory, and run the following command to install the required dependencies:

    ```bash
    $ npm i axios puppeteer readline
    ```

3. **Modify the Script (Optional)**: If needed, open the `app.js` file and adjust the script according to your requirements. You can customize the file naming, output directory, etc.

4. **Run the Script**: In your terminal or command prompt, navigate to the directory containing the `app.js` file, and execute the following command:

    ```bash
    $ node app.js
    ```

5. **Follow Instructions**: The script will prompt you to enter the URL of the video you want to download. Paste the URL and press Enter.

6. **Provide File Name**: Next, the script will ask you to enter the desired output file name (without the extension). Enter the name and press Enter.

7. **Download Complete**: Once the download is complete, the script will display a success message along with the file path where the video is saved.

8. **Verify Output**: Navigate to the specified output directory to verify that the video has been successfully downloaded.

## Example Input

- Video URL: `https://www.instagram.com/reel/C6UMCIIvHHd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==`
- File Name (without extension): `kucing_nyanyi`
