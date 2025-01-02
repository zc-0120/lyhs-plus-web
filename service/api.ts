const API_URL = "https://api.lyhsca.org";

export const apiService = {
    async addNewUser(email: string, name: string) {
        try {
            const response = await fetch(`${API_URL}/addNewBetaUser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    name: name,
                }),
            });

            if (response.ok){
                console.log('User registered successfully');
            } else {
                const result = await response.json();
                throw new Error(result.error);
            }
        } catch (e) {
            console.error("Error during add user:", e);
            throw e;
        }
    }
}