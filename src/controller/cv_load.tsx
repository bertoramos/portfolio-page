
import yaml from 'js-yaml';
import type { CVType } from '../model/CV';

export async function loadCV(filePath: string): Promise<CVType> {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch CV: ${response.statusText}`);
        }
        const yamlText = await response.text();
        const cvData = yaml.load(yamlText) as CVType;
        return cvData;
    } catch (error) {
        console.error('Error reading CV YAML file:', error);
        throw error;
    }
}
