export class HistoryModel {
    id: number;
    clientBuildingAddress: string;
    clientBuildingArea: number;
    clientBuildingPurpose: string;
    clientName: string;
    serviceName: string;
    serviceDate: string;
    maintenance: boolean;
    performance: boolean;
    consignment: boolean;
    updateAt: Date;

    constructor(id: number, clientBuildingAddress: string, clientBuildingArea: number, clientBuildingPurpose:
        string, clientName: string, serviceName: string, serviceDate: string, maintenance: boolean, performance: boolean, consignment: boolean, updatedAt: Date) {
        this.id = id;
        this.clientBuildingAddress = clientBuildingAddress;
        this.clientBuildingArea = clientBuildingArea;
        this.clientBuildingPurpose = clientBuildingPurpose;
        this.clientName = clientName;
        this.serviceName = serviceName;
        this.serviceDate = serviceDate;
        this.maintenance = maintenance;
        this.performance = performance;
        this.consignment = consignment
        this.updateAt = updatedAt;
    }
}
