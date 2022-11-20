
import { Router, Request, Response } from 'express';
import fs from 'fs';
import * as imgService from '../services/image_services'
export const ResizeImageController: Router = Router();

ResizeImageController.get(
  '/resizeimage',
  async (req: Request, res: Response) => {
    var fullUrl = req.protocol + '://' + req.get('host');
    let imgPath = (req.query.imgpath as string);
    let filename = imgPath.replace(/^.*[\\\/]/, '')
    let newPath = '\\images\\resized_images\\' + 'new_' + filename;

    const width: number | null = req.query.width ? parseInt((req.query.width as string).replace(/\D/g, ""), 10) : null;
    const height: number | null = req.query.height ? parseInt((req.query.height as string).replace(/\D/g, ""), 10) : null;

    console.log('width : ' + width)
    await imgService.resizeImage(imgPath, newPath, width, height);

    res.status(200);
    res.json({
      message: 'Image Resized with name : ' + 'new_' + filename
    });
  }
);


