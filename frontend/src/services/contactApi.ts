import { api } from "./api";

export const listEnquiries = async () => (await api.get("/enquiries")).data;
