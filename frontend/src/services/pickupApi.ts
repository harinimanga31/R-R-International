import { api } from "./api";
export const submitPickup = async (data: any) => (await api.post("/pickups", data)).data;
export const listPickups = async () => (await api.get("/pickups")).data;
export const updatePickup = async (id: string, data: any) => (await api.put(`/pickups/${id}`, data)).data;
