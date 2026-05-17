// Import mysql2 with promise support
const mysql = require('mysql2/promise');

async function main() {
  // Create a connection
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kisan_registration'
  });

  console.log('Connected to MySQL');

  // Create table if not exists
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255)
    )
  `;
  await connection.execute(createTableQuery);
  console.log('Table created or exists');

  // Insert a row
  const insertQuery = 'INSERT INTO users (name, email) VALUES (?, ?)';
  const [result] = await connection.execute(insertQuery, ['Asmita', 'asmita@example.com']);
  console.log('Inserted user with ID:', result.insertId);

  // Fetch all users
  const [rows] = await connection.execute('SELECT * FROM users');
  console.log('Users:', rows);

  // Close connection
  await connection.end();
  console.log('Connection closed');
}

// Run the main function
main().catch(err => console.error(err));
