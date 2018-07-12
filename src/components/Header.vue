<template>
  <header class="header">
    <b-navbar toggleable="md" variant="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">
        <b-img src="../assets/img/logo.jpg" fluid alt="logo" width="50" />
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#">La marque</b-nav-item>
          <b-nav-item href="#">Le réseau</b-nav-item>
          <b-nav-item href="#">La gamme</b-nav-item>
          <b-nav-item-dropdown text="Rechercher des pièces Motrio" right>
            <b-dropdown-item href="#">Rechercher par véhicule</b-dropdown-item>
            <b-dropdown-item href="#">Rechercher par référence</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<style lang="scss">
@import "../assets/scss/bootstrap-variables";
@import "~bootstrap/scss/bootstrap";

.navbar-nav {
  flex: 1;
}

.nav-item {
  flex: 1;
  text-align: center;
}
</style>
