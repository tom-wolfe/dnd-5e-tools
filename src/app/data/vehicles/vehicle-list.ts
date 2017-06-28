import { Item } from "app/models/equipment";

export const VehicleList: Item[] = [];

export const LandVehicles: Item = new Item({ name: "Land Vehicles" });
VehicleList.push(LandVehicles);

export const WaterVehicles: Item = new Item({ name: "Water Vehicles" });
VehicleList.push(WaterVehicles);