import { createConnection } from '$lib/db/mysql.js';

export async function GET() {
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT * FROM Restaurant;');

    return new Response(JSON.stringify(rows), {
        status: 200,
        headers: { 'content-type': 'application/json' }
    });
}

export async function POST({ request }) {
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
