<template>
  <div class="container-fluid">
    <!-- Fixed navigation bar with Bootstrap -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">{{ $t('home') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/recette/new" class="nav-link">{{ $t('new_recipe') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/recette-list" class="nav-link">{{ $t('recipe_list') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/categories" class="nav-link">{{ $t('categories') }}</router-link>
            </li>
          </ul>
         
          <ul class="navbar-nav">
            <li class="nav-item">
              <!-- Language selector -->
              <select @change="changeLanguage($event)" class="form-select bg-dark text-white">
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main content -->
    <div class="content" style="margin-top: 80px;">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

function changeLanguage(event) {
  locale.value = event.target.value
}


</script>

<style scoped>
/* Adjust top margin to prevent overlap with the navigation bar */
.content {
  padding-top: 20px;
}
</style>
