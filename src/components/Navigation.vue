<template>
  <v-container>

    <v-layout class="overflow-visible" style="height: 56px;">
      <v-bottom-navigation v-model="value" color="primary" horizontal>
        <v-btn>
          <v-icon>mdi-history</v-icon>

          Recents
        </v-btn>

        <router-link to="/about">
          <v-btn>
            <v-icon>mdi-heart</v-icon>

            Favorites
          </v-btn>
        </router-link>

        <router-link to="/">
          <v-btn>
            <v-icon>mdi-map-marker</v-icon>
            Nearby
          </v-btn>
        </router-link>
      </v-bottom-navigation>
    </v-layout>


  </v-container>
</template>

<script setup>
import {ref} from "@vue/composition-api";

const value = ref(0)

</script>

<style>
a {
  text-decoration: none;
}
</style>