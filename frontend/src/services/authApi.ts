import { api } from "./api";
export const login = async (email: string, password: string) => (await api.post("/auth/login", { email, password })).data;
export const dashboardStats = async () => (await api.get("/dashboard/stats")).data;
