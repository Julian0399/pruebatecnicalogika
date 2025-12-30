export async function login(credentials: { username: string; password: string }) {
    try {
        const URL = "https://dev.apinetbo.bekindnetwork.com/api/Authentication/Login"
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
         if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
        }

        const token = await response.text();
        return token
    } catch (error) {
        console.error('There was a problem with the login request:', error)
        throw error       
    }
    
}