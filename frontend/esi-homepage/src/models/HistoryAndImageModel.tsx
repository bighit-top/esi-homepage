export class HistoryAndImageModel {
    id: number;
    clientBuildingAddress: string;
    clientBuildingArea: number;
    clientName: string;
    serviceName: string;
    image: string;

    constructor(id: number, clientBuildingAddress: string, clientBuildingArea: number, clientName: string, serviceName: string, image: string) {
        this.id = id;
        this.clientBuildingAddress = clientBuildingAddress;
        this.clientBuildingArea = clientBuildingArea;
        this.clientName = clientName;
        this.serviceName = serviceName;
        this.image = image;
    }
}