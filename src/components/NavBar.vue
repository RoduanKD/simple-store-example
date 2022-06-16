<template>
<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item" active-class="is-active" exact>
          Home
        </router-link>

        <router-link to="/about" class="navbar-item" active-class="is-active">
          About
        </router-link>

        <router-link to="/contact" class="navbar-item" active-class="is-active">
          Contact
        </router-link>
      </div>
    </div>
</div>
</nav>
</template>
