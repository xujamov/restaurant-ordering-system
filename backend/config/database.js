import pgPromise from 'pg-promise';

// create an instance of pg-promise
const pgp = pgPromise();

// create the connection to the database
const db = pgp({
    host: 'dpg-cikg4a5gkuvinfiv11o0-a.oregon-postgres.render.com',
    user: 'restaurant',
    password: 'BBBHXuNnIyb20iEGRYRvxiqcMsSa8jSA',
    database: 'db_restaurant_rccf',
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
