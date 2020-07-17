<template>    
    <Layout>
    <h1>Products</h1>
    <div 
    style="text-align: center;"
    v-for="edge in $page.allContentfulProduct.edges" 
    :key="edge.node.id">
        <h2 style="margin-bottom: 0.25em;">{{edge.node.name}}</h2>
        <g-image 
        :src="edge.node.image.file.url" 
        style="width:100%; height:300px; object-fit:contain;"
        :alt="edge.node.image.title"/>
      <g-link to="/blog">  <p>{{edge.node.description}}</p> </g-link>
    </div>
    </Layout>
</template>

<page-query>
{
allContentfulProduct{
  edges{
    node{
      id
      name
      price
      description
      image{
        title
        file{
          url
        }
      }
    }
  }
}
}

</page-query>

<script>

export default {
    metaInfo:{
        title: "Products",
        meta:[
            { charset: 'utf-8'},
            {name:"author", content: "I am Uayeb"},
            {name:"description", content:"La mejor tienda de ropa del planeta"},
            {name:"keywords", content:"lentes, chamarras, sudaderas"}
        ]
    }
}
</script>

<style  scoped>
.pager{
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  padding: 40px 20px;
}
</style>