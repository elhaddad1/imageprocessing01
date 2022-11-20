import sharp from 'sharp';
import fs from 'fs';

export async function convertTograyscale(imgPath: string, newPath: string) {
  //'./images/full/fjord.jpg'
  //__dirname + '/images/resized_images/fjord_new.jpg'
  await sharp(imgPath)
    .grayscale() // or .greyscale()
    .toFile(newPath)
}



export async function tintImage(imgPath: string, newPath: string) {
  //'./images/robo.jpg'
  //__dirname + '/processed_images/tint_robo.jpg'
  await sharp(imgPath)
    .tint({ r: 255, g: 0, b: 0 })
    .toFile(newPath)
}

export async function imageMetadata(imgPath: string) {
  const metadata = await sharp(imgPath).metadata()

  console.log(metadata)
}

export  function resizeImage(imgPath: string, newPath: string, width: number | null, height: number | null): Promise<string>  {
  return new Promise((resolve) => {
    setTimeout(() => {
  try {
    const readStream: fs.ReadStream = fs.createReadStream(imgPath);
    const writeStream: fs.WriteStream = fs.createWriteStream(process.cwd() + newPath);   
    let resizeSharp: sharp.Sharp = sharp();
    resizeSharp = resizeSharp
      .resize(width, height)
      .on('info', () => console.log('Image Resized..'));
      readStream.pipe(resizeSharp).pipe(writeStream);
      resolve('slow');
  } catch (error) {
    console.log(error); 
  }
}, 1000);
});
}
export async function getMetadata() {
  try {
    const metadata = await sharp("sammy.png").metadata();
    console.log(metadata);
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }
}


