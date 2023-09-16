export const aboutSchema = {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'resume',
      type: 'file',
      title: 'Resume',
      description: 'Must be a pdf',
      accept: '.pdf',
    },
  ],
};
