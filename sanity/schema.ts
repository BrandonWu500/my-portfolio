import { aboutSchema } from '@/sanity/schemas/about';
import { projectSchema } from '@/sanity/schemas/project';
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema, aboutSchema],
};
