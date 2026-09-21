import { api } from "./api";
export const submitQuote = async (data: any) => (await api.post("/quotes", data)).data;
export const listQuotes = async () => (await api.get("/quotes")).data;
export const updateQuote = async (id: string, data: any) => (await api.put(`/quotes/${id}`, data)).data;
