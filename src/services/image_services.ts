import sharp from 'sharp';
import fs from 'fs';
  
  export async function convertTograyscale(imgPath : string,newPath : string){
      //'./images/full/fjord.jpg'
      //__dirname + '/images/resized_images/fjord_new.jpg'
      await  sharp(imgPath)
    .grayscale() // or .greyscale()
    .toFile(newPath)
  }
  
  
  
 export async function tintImage(imgPath : string,newPath : string){
      //'./images/robo.jpg'
      //__dirname + '/processed_images/tint_robo.jpg'
      await  sharp (imgPath)
      .tint({r: 255, g: 0, b: 0})
      .toFile(newPath)
    }
  
   export async function  imageMetadata(imgPath : string){
      const metadata =await  sharp(imgPath).metadata()
    
      console.log(metadata)
    }
  
   export async function resizeImage(imgPath : string,newPath : string, width:number , height : number){
    try {
      return await sharp( imgPath)
        .resize(width, height)
        .toFile(newPath);
    } catch (error) {
      console.log(error);
    }
    }
  export async function getMetadata() {
    try {
      const metadata = await sharp("sammy.png").metadata();
      console.log(metadata);
    } catch (error) {
      console.log(`An error occurred during processing: ${error}`);
    }
  }



  export function resize(
    inputPath: string,
    outputPath: string,
    width: number | null,
    height: number | null
  ): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const readStream: fs.ReadStream = fs.createReadStream(inputPath);
        const writeStream: fs.WriteStream = fs.createWriteStream(outputPath);
  const format : string = 'jpg';
        writeStream.on('error', () => console.log('Error!'));
        writeStream.on('close', () => console.log('Image saved'));
  
        let transform: sharp.Sharp = sharp();
        if (format === 'jpeg' || format === 'png') {
          transform = transform.toFormat(format);
        }
  
        transform = transform
          .resize(width, height)
          .on('info', () => console.log('Image Resized..'));
  
          console.log(1);
          console.log(transform);
          console.log(writeStream);
        readStream.pipe(transform).pipe(writeStream);
        resolve('slow');
      }, 1000);
    });
  }