export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '629a3e116e89b80058b47b9e',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-xyserrrg',
                  apiId: 'd2682b4d-682f-4d58-8150-b691bbefa6fb'
                },
                {
                  buildHookId: '629a3e11047cc100838c75d9',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-xbd94qdo',
                  apiId: '0150cfa0-5420-4b30-9ce9-08adecdfdbab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bigscotia10/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-xbd94qdo.netlify.app', category: 'apps'}
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
