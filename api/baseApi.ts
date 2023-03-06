const BASE_PATH = "http://178.63.13.157:8090/mock-api/api"; // TODO This should be an ENV variable

export interface APIResult {
    code: string;
    error?: string;
    data: any;
};

async function get(endpoint: string): Promise<APIResult> {
    const res = await fetch(`${BASE_PATH}${endpoint}`, {
        method: 'GET'
    });
    const data = await res.json();
    return data as APIResult;
}

async function post(endpoint: string, payload: any): Promise<APIResult> {
    const res = await fetch(`${BASE_PATH}${endpoint}`, {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data as APIResult;
}

export default {
    get,
    post,
}
