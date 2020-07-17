// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Uayeb',
  siteDescription: 'La mejor tienda del mundo',
   plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: '', // required
        accessToken: '', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
        refs: {
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: 'Tag',
            create: true
          }
        },
 
        remark: {
          // remark options
        },
      },
    },
  ],
  templates: {
    Post: [
      {
        path: "/posts/:title",
        component: "./src/templates/Post.vue",
      },
    ],
    Tag:[
      {
        path:"/tags/:id",
        component:"./src/templates/Tag.vue",
      },
    ],
  },
  ContentfulProduct: "/product/:slug"
}
