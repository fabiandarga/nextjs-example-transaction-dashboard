import baseApi from "./baseApi";

export interface Project {
    projectId: string;
    userIds: string[];
    rule:string;
    gatewayIds: string[];
    structure: string;
    industry: string;
    website: string;
    description: string;
    image: string;
    name: string;
}

async function getProjects(): Promise<Project[]> {
    const payload = await baseApi.get('/projects');
    if (payload.code != "200") {
        throw new Error("could not fetch projects: " + payload.error);
    }
    return payload.data;
}

export default {};