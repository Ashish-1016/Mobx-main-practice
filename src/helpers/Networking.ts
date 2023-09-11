
export class Networking {
    async get<T>(url: string): Promise<T | null> {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.log('Response error')
            }
            const data: T = await response.json();
            return data;
        } catch (error) {
            console.error('GET request error:', error);
            return null;
        }
    }

    async post<T>(url: string, data: any): Promise<T | null> {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`POST request failed with status ${response.status}`);
            }
            const responseData: T = await response.json();
            return responseData;
        } catch (error) {
            // Handle error (e.g., log or throw)
            console.error('POST request error:', error);
            return null;
        }
    }

    async delete<T>(url: string): Promise<T | null> {
        try {
            const response = await fetch(url, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`DELETE request failed with status ${response.status}`);
            }
            const responseData: T = await response.json();
            return responseData;
        } catch (error) {
            // Handle error (e.g., log or throw)
            console.error('DELETE request error:', error);
            return null;
        }
    }
}
