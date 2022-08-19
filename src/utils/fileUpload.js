import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const fileUpload = async (file, pathname) => {
  const { createReadStream, filename, mimetype, encoding } = await file;

  console.log(createReadStream, filename, mimetype, encoding, "OKOKOKK");
  const stream = createReadStream();
  await stream.pipe(fs.createWriteStream(pathname + filename));
  return filename;
};
