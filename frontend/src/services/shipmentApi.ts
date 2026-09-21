import { api } from "./api";
export const trackShipment = async (awb: string) => (await api.get(`/tracking/${encodeURIComponent(awb)}`)).data;
export const listShipments = async () => (await api.get("/shipments")).data;
export const createShipment = async (data: any) => (await api.post("/shipments", data)).data;
export const updateShipment = async (id: string, data: any) => (await api.put(`/shipments/${id}`, data)).data;
export const deleteShipment = async (id: string) => (await api.delete(`/shipments/${id}`)).data;
export const addTrackingEvent = async (id: string, data: any) => (await api.post(`/shipments/${id}/events`, data)).data;
