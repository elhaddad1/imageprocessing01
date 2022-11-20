
import { Router, Request, Response } from 'express';
import fs from 'fs';
import * as imgService from '../services/image_services'
export const ResizeImageController: Router = Router();

ResizeImageController.get(
  '/resizeimage',
  async (req: Request, res: Response) => {
    var fullUrl = req.protocol + '://' + req.get('host');
    let imgPath = fullUrl + '/' + req.query.imgpath as string;
    let filename = imgPath.replace(/^.*[\\\/]/, '')
    let newPath = fullUrl + '/imagesfiles/resized_images/'//new_' //+ filename;
    const width: number | null = req.query.width ? parseInt(req.query.width as string, 10) : null;
    const height: number | null = req.query.height ? parseInt(req.query.height as string, 10) : null;


    await imgService.resize(imgPath, newPath,width, height);

    /*imgService.resizeImage(imgPath, newPath, 200, 200).then((value) => {
      let inputFiles: string[] = fs.readdirSync(newPath);
      res.status(200);
      res.render('index', {
        data: inputFiles
      });
    }
    )*/
  }
);


