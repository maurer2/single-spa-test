<template>
  <div class="app">
    <nav class="nav">
      <template v-for="route in $router.options.routes">
        <router-link
          :key="route.path"
          :to="route.path"
          class="nav-link"
          active-class="nav-link--is-active"
          exact-active-class="nav-link--is-exact-active"
        >
          {{ route.name }}
        </router-link>
      </template>
    </nav>
    <h2>Receiver</h2>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;

  &-link {
    color: #2c3e50;

    // &--is-active,
    &--is-exact-active {
      color: red;
    }
  }
}
</style>
