const { DataSource } = require('typeorm');
const { join } = require('path');

require('dotenv').config({
  path: join(__dirname, '../../.env'),
});

const dataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  entities: ['apps/**/*.entity.ts'],
  migrations: ['database/migrations/*.ts'],
};

const dataSource = new DataSource(dataSourceOptions);

module.exports = {
  default: dataSource,
  dataSourceOptions,
};
