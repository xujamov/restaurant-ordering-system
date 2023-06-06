import pgPromise from 'pg-promise';

// create an instance of pg-promise
const pgp = pgPromise();

// create the connection to the database
const db = pgp({
    host: 'localhost',
    user: 'restaurant',
    password: '123',
    database: 'db_restaurant',
    port: 5432, // default PostgreSQL port
});

db.connect()
    .then(() => {
        console.log('Successfully connected to the database.');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });

export default db;
