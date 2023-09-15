export const projectSchema = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'designLink',
      type: 'string',
      title: 'Design Link',
    },
    {
      name: 'codeLink',
      type: 'string',
      title: 'Code Link',
    },
    {
      name: 'deployLink',
      type: 'string',
      title: 'Deployment Link',
    },
  ],
};
