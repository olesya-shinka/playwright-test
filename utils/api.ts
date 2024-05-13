import { AuthUser } from '../types/types';

export async function login(user: AuthUser): Promise<boolean> {
    const response = await fetch(`https://agro-management.itcase.pro/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    return response.ok;
}

export default login;