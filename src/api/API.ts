/*
 * Filename: API.ts
 * Author: Dharmesh Tarapore <dharmesh@eonrides.com>
 * Description: API wrapper for the Eon Api.
 */

let API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/v1';

export const retrieveCities = async () => {
    const response = await fetch(`${API_BASE_URL}/rental_locations/cities`);
    return response.json();
}
