import * as fs from 'fs';
let pathFolder = process.env.NABIN;
if (!pathFolder) {
  if (!fs.existsSync('./api')) {
    fs.mkdirSync('./api');
  }
  if (!fs.existsSync('./api/config.json')) {
    fs.writeFileSync('./api/config.json', fs.readFileSync('./config.example.json'));
  }
  pathFolder = __dirname.split('/src/core').join('') + '/api';
}
const config = JSON.parse(
  fs.readFileSync(pathFolder + '/' + 'config.json', 'utf8'),
);

export function getDataBaseConfiguration() {
  return {
    ...config.database,
    entities: ['src/**/*.entity{.ts,.js}'],
    migrations: ['src/database/migration/*.ts'],
  };
}
export function getConfiguration() {
  const api = config.api || {};
  if (!config.port) {
    config.port = 3000
  }

  return {
    ...config,
    ...api,
  };
}
