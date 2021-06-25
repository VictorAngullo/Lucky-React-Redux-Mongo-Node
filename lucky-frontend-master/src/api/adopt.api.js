const adoptFormUrl = "http://localhost:5000/pets/:id/adopt";

export const adoptForm = async (form) => {
    const req = await fetch(adoptFormUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(form)
    });

    const res = await req.json();

    if (!req.ok) console.log('ERROR: ', res.message);

    return res;
}