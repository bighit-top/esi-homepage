export class OfficeModel {
    officeId: number;

    name: string;

    address: string;

    latitude: number;

    longitude: number;

    phoneNumber: string;

    faxNumber: string;

    constructor(officeId: number, name: string, address: string, latitude: number, longitude: number, phoneNumber: string, faxNumber: string) {
        this.officeId = officeId;
        this.name = name;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.phoneNumber = phoneNumber;
        this.faxNumber = faxNumber;
    }
}

