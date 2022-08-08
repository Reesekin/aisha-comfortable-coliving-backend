/* eslint-disable prettier/prettier */
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

import fs from 'fs';
import FileType from 'file-type';

import path = require('path');
import { HttpException, HttpStatus } from '@nestjs/common';

type validExt = 'png' | 'jpg' | 'jpeg';
type validMime = 'image/png' | 'image/jpg' | 'image/jpeg';

const validExts : validExt[] = [
    'png',
    'jpg',
    'jpeg'
];
const validMimes : validMime[] = [
    'image/png', 
    'image/jpg', 
    'image/jpeg'
];

export const storePfp = {
    storage: diskStorage({
        destination: './uploads/Pfp',
        filename: (req, file, cb) => {
        const fExt: string = path.extname(file.originalname);
        const fName: string = uuidv4() + fExt;
        cb(null, fName);
        }
    }),
    fileFilter: (req, file, cb) => {
        const fExt = file.originalname.split('.').pop();
        const exception = new HttpException('ERROR: INVALID FILE EXTENSION', HttpStatus.BAD_REQUEST);
        if (!validExts.includes(fExt)){
            throw exception;
            cb(`File type not accepted: ${fExt}`, exception);
        }
        validMimes.includes(file.mimetype) ? cb(null, true) : cb('File mime type is not an image.', false);
    }
}