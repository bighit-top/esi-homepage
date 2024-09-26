export class CreateInspectionHistoryModel {
  serviceName: string;
  clientName: string;
  serviceDate: string;
  clientBuildingAddress: string;
  clientBuildingPurpose: string;
  clientBuildingArea: number;
  maintenance: boolean;
  performance: boolean;
  consignment: boolean;
  image: string;

  constructor(
    serviceName: string,
    clientName: string,
    serviceDate: string,
    clientBuildingAddress: string,
    clientBuildingPurpose: string,
    clientBuildingArea: number,
    maintenance: boolean,
    performance: boolean,
    consignment: boolean
  ) {
    this.serviceName = serviceName;
    this.clientName = clientName;
    this.serviceDate = serviceDate;
    this.clientBuildingAddress = clientBuildingAddress;
    this.clientBuildingPurpose = clientBuildingPurpose;
    this.clientBuildingArea = clientBuildingArea;
    this.maintenance = maintenance;
    this.performance = performance;
    this.consignment = consignment;
    this.image = "";
  }
}