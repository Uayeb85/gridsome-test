<template>
    <footer>
      <span class="texto-footer">Derechos Reservados {{getCurrentYear}} by <a :href="href"> IAmUayeb </a></span>
    </footer>
</template>

<script>
export default {
    data:() =>({
        href: 'http://iamuayeb.com'
    }),
    computed:{
        getCurrentYear(){
            return new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  padding: 4rem 2rem;
  background-color: #553C9A
;
}

.texto-footer{
    color: #FaF5ff;
    text-align: center;
    font-size: 1.8rem;
}

a{
    color: #FaF5ff;
    text-decoration: none;
}

</style>