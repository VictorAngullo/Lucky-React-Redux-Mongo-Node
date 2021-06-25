const BASE_URL = "http://localhost:5000"

const registerUrl = `${BASE_URL}/auth/register`;
const loginUrl = `${BASE_URL}/auth/login`;
const checkSessionUrl = `${BASE_URL}/auth/check-session`;
const logoutUrl = `${BASE_URL}/auth/logout`;

export const register = async (form) => {
    const req = await fetch(registerUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        credentials: 'include',
        body: JSON.stringify(form),
    });

    const res = await req.json();

    if (!req.ok) console.log('ERROR: ', res.message);

    return res;
};

export const login = async (form) => {
    const req = await fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        credentials: 'include',
        body: JSON.stringify(form),
    });

    const res = await req.json();

    if (!req.ok) console.log('ERROR: ', res.message);

    return res;
};

export const logout = async () => {
    const req = await fetch(logoutUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        credentials: 'include',
    });

    const res = await req.json();

    if (!req.ok) console.log('ERROR: ', res.message);

    return res;
};

export const checkSession = async () => {
    const req = await fetch(checkSessionUrl, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        credentials: 'include',
    });

    return await req.json();
}