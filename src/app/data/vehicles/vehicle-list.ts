import { Item } from "app/models/equipment";

export const VehicleList: Item[] = [];

export const LandVehicles: Item = new Item();
Object.assign(LandVehicles, { name: "Land Vehicles" });
VehicleList.push(LandVehicles);

export const WaterVehicles: Item = new Item();
Object.assign(WaterVehicles, { name: "Water Vehicles" });
VehicleList.push(WaterVehicles);