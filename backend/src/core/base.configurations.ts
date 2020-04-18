import * as fs from 'fs';
let pathFolder = process.env.HRIS_HOME;
if (!pathFolder) {
  if (!fs.existsSync('./files')) {
    fs.mkdirSync('./files');
  }
  if (!fs.existsSync('./files/config.json')) {
    fs.writeFileSync(
      './files/config.json',
      fs.readFileSync('./config.example.json'),
    );
  }
  pathFolder = __dirname.split('/src/core/').join('') + '/files';
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
  const files = config.files || {};
  if (!config.port) {
    config.port = 3000;
  }

  return {
    ...config,
    ...files,
  };
}
