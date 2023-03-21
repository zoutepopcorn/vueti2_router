<template>
  <div id="app">

    <router-view/>

    <nav>
      <Navigation></Navigation>
    </nav>
  </div>
</template>


<script setup>
import Calendar from "@/components/Calendar.vue";
import Navigation from "@/components/Navigation.vue";
</script>