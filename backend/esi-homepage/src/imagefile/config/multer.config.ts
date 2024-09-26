import { MulterOptionsFactory } from '@nestjs/platform-express';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import * as multer from 'multer';
import * as path from 'path';
import * as fs from 'fs';

export class MulterConfigService implements MulterOptionsFactory {
  dirPath: string;

  constructor() {
    this.dirPath = path.join(process.cwd(), 'uploads');
    this.mkdir();
  }

  mkdir() {
    try {
      fs.readdirSync(this.dirPath);
    } catch (err) {
      fs.mkdirSync(this.dirPath);
    }
  }

  createMulterOptions(): MulterOptions {
    const dirPath = this.dirPath;
    const option: MulterOptions = {
      storage: multer.diskStorage({
        destination(req, file, done) {
          done(null, dirPath);
        },
        filename(req, file, done) {
          const ext = path.extname(file.originalname);
          const name = path.basename(file.originalname, ext);
          done(null, `${name}_${Date.now()}${ext}`);
        },
      }),
      limits: { fileSize: 10 * 1024 * 1024 },
    };
    console.log(option);
    return option;
  }
}
