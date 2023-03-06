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

export interface Gateway {
    gatewayId: string;
    userIds: string[];
    name: string;
    type: string;
    apiKey: string;
    secondaryApiKey: string;
    description: string;
}

export interface Report {
    paymentId: string;
    projectId: string,
    userIds: string[];
    gatewayId: string;
    amount: number;
    modified: string;
    created: string;
}

export interface EnrichedReport extends Report {
    gateway: Gateway;
    project: Project;
}
