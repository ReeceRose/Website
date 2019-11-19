<template>
  <section id="Navigation">
    <nav class="navbar navbar-expand-md navbar-dark"> 
        <router-link class="navbar-brand" to="/">Reece Rose</router-link> 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarRight" value="Navigation bar toggler" aria-label="Navigation bar toggler">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarRight"> 
          <ul class="navbar-nav ml-auto"> 
            <li class="nav-item"> 
              <router-link class="nav-link" to="/#About">About</router-link> 
            </li> 
            <li class="nav-item"> 
              <router-link class="nav-link" :to="this.$route.name == 'Home' ? '/#Projects' : '/Projects'">Projects</router-link>
            </li> 
            <li class="nav-item"> 
              <router-link class="nav-link" to="/#Contact">Contact</router-link>
            </li> 
          </ul>
        </div> 
    </nav> 
  </section>
</template>

<script>
export default 
{
  name: 'Navigation'
}
</script>

<style lang="scss">
@import "@/assets/colors.scss";

.navbar-dark 
{
  padding-top: 0;
  .navbar-nav {
    .nav-link {
      color: get-color(mainText);
      font-size: 1.2em;
      font-weight: 700;

      &:hover {
        color: get-color(mainTextHover);
      }

      &:focus {
        color: inherit;
      }
    }
  }
  .navbar-brand {
    font-size: 2em;
    font-weight: 800;
    color: get-color(mainText);

    &:hover {
      color: get-color(mainTextHover);
    }
    &:focus {
      color: inherit;
    }
  }
}
</style>