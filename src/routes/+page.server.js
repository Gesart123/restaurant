import { createConnection } from "$lib/db/mysql";

export async function load(){
    let connection = await createConnection();
    let [types] = await connection.execute('Select * from Restaurant');

    return {
        restaurants: types
    }

}