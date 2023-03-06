import { useEffect, useState } from "react";
import projectsApi from "../api/project-api";
import { Project } from "../types/entities";

export default function useProjects(): Project[] {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        projectsApi.fetchProjects().then((results) => {
            setProjects(results)
        }).catch((error) => {
            console.log(error); // TODO add proper logging & UI output
        })
    }, []);

    return projects;
}