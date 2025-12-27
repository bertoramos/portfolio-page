import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { CVType } from '../model/CV';

/**
 * Lee y parsea el archivo YAML del CV
 * @param filePath - Ruta al archivo YAML
 * @returns Objeto con los datos del CV
 */
function loadCV(filePath: string): CVType {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents) as CVType;
    return data;
  } catch (error) {
    console.error('Error leyendo el archivo YAML del CV:', error);
    throw error;
  }
}

export { loadCV };