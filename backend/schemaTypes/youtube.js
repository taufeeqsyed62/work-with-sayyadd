export default {
    name: 'youtube',
    title: 'youtube',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
       
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'videoUrl',
        title: 'Video URL',
        type: 'url',
      
      },
      {
        name: 'thumbnail',
        title: 'Thumbnail',
        type: 'image',
        options: {
          hotspot: false,
        },
      },
      {
        name: 'notesLink',
        title: 'Notes Link',
        type: 'url',
      },
    ],
  }
  