import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.TINA_BRANCH || process.env.HEAD || 'master',
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'service',
        label: 'Tjänster',
        path: 'src/content/services',
        format: 'yaml',
        fields: [
          { name: 'title', label: 'Titel', type: 'string', required: true, isTitle: true },
          { name: 'shortTitle', label: 'Kort titel', type: 'string', required: true },
          { name: 'slug', label: 'Slug (URL)', type: 'string', required: true },
          { name: 'metaTitle', label: 'SEO-titel', type: 'string', required: true },
          {
            name: 'metaDescription',
            label: 'SEO-beskrivning',
            type: 'string',
            required: true,
            ui: { component: 'textarea' },
          },
          {
            name: 'excerpt',
            label: 'Sammanfattning',
            type: 'string',
            required: true,
            ui: { component: 'textarea' },
          },
          {
            name: 'introduction',
            label: 'Introduktion',
            type: 'string',
            required: true,
            ui: { component: 'textarea' },
          },
          {
            name: 'benefits',
            label: 'Fördelar',
            type: 'object',
            list: true,
            fields: [
              { name: 'title', label: 'Titel', type: 'string', required: true },
              {
                name: 'description',
                label: 'Beskrivning',
                type: 'string',
                required: true,
                ui: { component: 'textarea' },
              },
            ],
          },
          {
            name: 'process',
            label: 'Process',
            type: 'object',
            list: true,
            fields: [
              { name: 'step', label: 'Steg', type: 'number', required: true },
              { name: 'title', label: 'Titel', type: 'string', required: true },
              {
                name: 'description',
                label: 'Beskrivning',
                type: 'string',
                required: true,
                ui: { component: 'textarea' },
              },
            ],
          },
          {
            name: 'deliverables',
            label: 'Leverabler',
            type: 'string',
            list: true,
          },
          {
            name: 'relatedServices',
            label: 'Relaterade tjänster',
            type: 'string',
            list: true,
          },
          { name: 'ctaText', label: 'CTA-text', type: 'string' },
          { name: 'order', label: 'Ordning', type: 'number', required: true },
        ],
        ui: {
          filename: {
            slugify: (values) => values?.slug || '',
          },
        },
      },

      {
        name: 'insight',
        label: 'Insikter',
        path: 'src/content/insights',
        format: 'md',
        fields: [
          { name: 'title', label: 'Titel', type: 'string', required: true, isTitle: true },
          {
            name: 'description',
            label: 'Beskrivning',
            type: 'string',
            required: true,
            ui: { component: 'textarea' },
          },
          { name: 'date', label: 'Datum', type: 'datetime', required: true },
          { name: 'author', label: 'Författare', type: 'string', required: true },
          { name: 'category', label: 'Kategori', type: 'string', required: true },
          { name: 'draft', label: 'Utkast', type: 'boolean' },
          { name: 'body', label: 'Innehåll', type: 'rich-text', isBody: true },
        ],
      },

      {
        name: 'teamMember',
        label: 'Team',
        path: 'src/content/team',
        format: 'yaml',
        fields: [
          { name: 'name', label: 'Namn', type: 'string', required: true, isTitle: true },
          { name: 'role', label: 'Roll', type: 'string', required: true },
          {
            name: 'bio',
            label: 'Bio',
            type: 'string',
            ui: { component: 'textarea' },
          },
          { name: 'linkedin', label: 'LinkedIn URL', type: 'string' },
          { name: 'order', label: 'Ordning', type: 'number', required: true },
        ],
      },

      {
        name: 'industry',
        label: 'Branscher',
        path: 'src/content/industries',
        format: 'yaml',
        fields: [
          { name: 'name', label: 'Namn', type: 'string', required: true, isTitle: true },
          { name: 'slug', label: 'Slug (URL)', type: 'string', required: true },
          {
            name: 'description',
            label: 'Kort beskrivning',
            type: 'string',
            required: true,
            ui: { component: 'textarea' },
          },
          { name: 'displayTitle', label: 'Visningstitel', type: 'string', required: true },
          {
            name: 'longDescription',
            label: 'Lång beskrivning',
            type: 'string',
            required: true,
            ui: { component: 'textarea' },
          },
          {
            name: 'applicableServices',
            label: 'Tillämpliga tjänster',
            type: 'string',
            list: true,
          },
          {
            name: 'challenges',
            label: 'Utmaningar',
            type: 'string',
            list: true,
          },
          { name: 'order', label: 'Ordning', type: 'number', required: true },
        ],
      },
    ],
  },
});
