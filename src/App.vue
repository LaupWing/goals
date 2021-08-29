<template>
   <div class="flex flex-col w-screen h-screen">
      <main-nav/>
      <router-view />
   </div>
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