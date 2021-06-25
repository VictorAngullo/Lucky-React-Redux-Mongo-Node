export const getAllPets = async (petsUrl) => {
    const req = await fetch(petsUrl, {
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

export const getPet = async (id) => {
    const req = await fetch(`http://localhost:5000/pets/${id}`, {
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

// const fetchUrl = async (url) => {
//     const req = await fetch(url, {
//         method: 'GET',
//         headers: {
//          'Accept': 'application/json',
//          'Content-Type': 'application/json',
//          'Access-Control-Allow-Origin': '*'
//         },
//         credentials: 'include',
//     });
 
//     return await req.json();

// }

// export const getPetFilter = async (locationFilter, specieFilter) => {
//     let url = '';
//     if(locationFilter && specieFilter) {
//         url = `http://localhost:5000/pets?location=${locationFilter}&species=${specieFilter}`;
//         await fetchUrl(url);
//     } else if (locationFilter && !specieFilter) {
//         url = `http://localhost:5000/pets?location=${locationFilter}`;
//         await fetchUrl(url);
//     } else if (!locationFilter && specieFilter) {
//         url = `http://localhost:5000/pets?species=${specieFilter}`;
//         await fetchUrl(url);
//     } else {
//         url = 'http://localhost:5000/pets';
//         await fetchUrl(url);
//     }
// }