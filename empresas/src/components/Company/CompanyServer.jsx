const API_URL="http://127.0.0.1:8000/api/companies/";

export const listCompanies = async () => {
    return await fetch(API_URL);
};

export const registerCompany = async (newCompany) => {
    return await fetch(API_URL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({//convertir objeto a JSON
            "name": String(newCompany.name).trim(),
            "foundation": parseInt(newCompany.foundation),
            "website": String(newCompany.website).trim(),
        })
    });
};
export const deleteCompany = async (companyId) => {
    return await fetch(`${API_URL}${companyId}`,{
        method: 'DELETE',

    });
};