const c1 = () => import(/* webpackChunkName: "page--src--pages--new--products-vue" */ "/home/uayeb/Escritorio/gridsome-test1/src/pages/new/Products.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/home/uayeb/Escritorio/gridsome-test1/src/templates/Tag.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/home/uayeb/Escritorio/gridsome-test1/src/templates/Post.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/home/uayeb/Escritorio/gridsome-test1/src/pages/Blog.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--products-vue" */ "/home/uayeb/Escritorio/gridsome-test1/src/pages/Products.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--new--index-vue" */ "/home/uayeb/Escritorio/gridsome-test1/src/pages/new/Index.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/uayeb/Escritorio/gridsome-test1/src/pages/About.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/home/uayeb/Escritorio/gridsome-test1/src/pages/404.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/uayeb/Escritorio/gridsome-test1/src/pages/Index.vue")

export default [
  {
    path: "/new/products/",
    component: c1
  },
  {
    path: "/tags/:id/",
    component: c2
  },
  {
    path: "/posts/:title/",
    component: c3
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: c4
  },
  {
    path: "/products/",
    component: c5
  },
  {
    path: "/new/",
    component: c6
  },
  {
    path: "/about/",
    component: c7
  },
  {
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
