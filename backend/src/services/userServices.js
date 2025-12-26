
import { query } from "../db.js";

export const getUsers = async() => {
    const {rows} = await query('SELECT * FROM users');
    return rows;
}

export const createUser = async(userData) => {
    const { firstName, middleName, lastName, email, age, } = userData;
    const {rows} = await query(
        `INSERT INTO users (first_name, middle_name, last_name, email, age)
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
         [firstName, middleName, lastName, email, age]
    );
    
    return rows[0];
}

export const updateUser = async(userData, userId) => {
    const { firstName, middleName, lastName, email, age } = userData;
    const {rows} = await query(
        `UPDATE users SET first_name = $1, middle_name = $2, last_name = $3, email = $4, age = $5
         WHERE id = $6 RETURNING *`,
         [firstName, middleName, lastName, email, age, userId]
    );

    return rows[0];
}

export const deleteUser = async(userId) => {
    const {rowCount} = await query(
        `DELETE FROM users WHERE id = $1 RETURNING *`, 
        [userId]
    );

    return rowCount > 0;
}