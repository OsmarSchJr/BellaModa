require('dotenv').config();

module.exports = {
    dialect: 'mysql2',
    host: process.env.DATABASE_HOST,
    port: DATABASE_PORT,
    username:DATABASE_USERNAME,
    password:DATABASE_PASSWORD,
    database:DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        'createdAt': 'created_at',
        'updatedAt': 'updated_at',
    },
    dialectOptions: {
        timezone: 'America/Sao_Paulo'
    },
    timezone: 'America/Sao_Paulo'
};