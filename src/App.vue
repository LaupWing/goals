<template>
   <main-nav/>
   <router-view />
</template>

<script>
import MainNav from "@/components/MainNav"

export default {
   name: 'App',
   components:{
      MainNav
   }
}
</script>