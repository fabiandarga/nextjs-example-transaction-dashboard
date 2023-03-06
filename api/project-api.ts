import { Project } from "../types/entities";
import baseApi from "./baseApi";

async function fetchProjects(): Promise<Project[]> {
    const payload = await baseApi.get('/projects');
    if (payload.code != "200") {
        throw new Error("could not fetch projects: " + payload.error);
    }
    return payload.data;
}

export default {
    fetchProjects,
};