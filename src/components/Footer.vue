<template>
  <footer class="footer">
    <b-row>
      <b-col md="3">
        <ul class="list-unstyled">
          <li><b-link href="#">Recherche par référence</b-link></li>
          <li><b-link href="#">Recherche par véhicule</b-link></li>
          <li><b-link href="#">Véhicules compatibles Motrio</b-link></li>
          <li><b-link href="#">Références compatibles Motrio</b-link></li>
        </ul>
      </b-col>
      <b-col md="3">
        <ul class="list-unstyled">
          <li><b-link href="#">Page d'accueil</b-link></li>
          <li><b-link href="#">La marque</b-link></li>
          <li><b-link href="#">Le réseau</b-link></li>
          <li><b-link href="#">La gamme</b-link></li>
        </ul>
      </b-col>
      <b-col md="3">
        <ul class="list-unstyled">
          <li><b-link href="#">Nous contacter</b-link></li>
          <li><b-link href="#">Mentions légales</b-link></li>
        </ul>
      </b-col>
      <b-col md="3">
        <ul class="list-unstyled">
          <li><b-link href="#">Site national</b-link></li>
        </ul>
      </b-col>
    </b-row>
  </footer>
</template>

<style lang="scss">
@import "../assets/scss/bootstrap-variables";
@import "~bootstrap/scss/bootstrap";

.footer {
  padding: map-get($spacers, 3);
  background-color: theme-color('dark');
  color: color('white');
  font-size: $small-font-size;

  a {
    color: color('white');
  }
}
</style>
