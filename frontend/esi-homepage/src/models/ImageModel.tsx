export class ImageModel {
    fileId: number;
    fileName: string;
    filePath: string;

    constructor(fileId: number, fileName: string, filePath: string) {
        this.fileId = fileId;
        this.fileName = fileName;
        this.filePath = filePath;
    }
}
