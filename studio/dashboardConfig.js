export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fea36676173a9008c7285ac',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-94obwdwz',
                  apiId: '9e549f6e-27f8-4bda-8691-8055647da7bc'
                },
                {
                  buildHookId: '5fea3667143d2b00ff4e3feb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gicywhad',
                  apiId: '44c5098f-7679-46cc-8459-d5829a86b94a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/intecfrontend/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gicywhad.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
