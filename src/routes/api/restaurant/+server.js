import { createConnection } from '$lib/db/mysql.js';

async function auth(request) {
    const auth = request.headers.get('authorization');
    if (!auth || auth !== `Basic ${btoa(`${BASIC_AUTH_USER}:${BASIC_AUTH_PASSWORD}`)}`) {
        return new Response(null, {
                status: 401,
                headers: { 'www-authenticate': 'Basic realm="Secure Area"' }
            });
        }
    const base64Credentials = auth.split(' ')[1];
    const credentials = atob(base64Credentials);    
    const [username, password] = credentials.split(':');
        if (username !== BASIC_AUTH_USER || password !== BASIC_AUTH_PASSWORD) {
            return new Response(JSON.stringify({ message:'Access denied'}), {
                status: 401,
                headers: { 'www-authenticate': 'Basic realm="Secure Area"' }
            });
        }
        return null;
    }

export async function GET() {
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT * FROM Restaurant;');

    return new Response(JSON.stringify(rows), {
        status: 200,
        headers: { 'content-type': 'application/json' }
    });
}

export async function POST({ request }) {
    const authResponse = await auth(request);
    if (authResponse) return authResponse;

    const data = await request.json(); 
    const connection = await createConnection();
    try {
        const [result] = await connection.execute(
            'INSERT INTO Restaurant (name, phone, beschreibung) VALUES (?, ?, ?);',
            [data.name, data.phone, data.beschreibung]
        );
        const [newRestaurant] = await connection.execute(
            'SELECT * FROM Restaurant WHERE id = ?;',
            [result.insertId]
        );
        return new Response(JSON.stringify(newRestaurant[0]), {
            status: 201,
            headers: { 'content-type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
