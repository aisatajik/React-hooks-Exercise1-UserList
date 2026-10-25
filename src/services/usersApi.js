const API_URL = "https://jsonplaceholder.typicode.com/users";

/**
 * Fetches users from the API and keeps only the fields we need.
 * @returns {Promise<{ id: number, name: string, email: string }[]>}
 */
export async function fetchUsers() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Failed to load users (status ${response.status}).`);
  }

  const data = await response.json();
  return data.map(({ id, name, email }) => ({ id, name, email }));
}
