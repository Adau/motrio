<template>
  <footer class="footer">
    <b-row>
      <b-col md="3">
        <ul class="list-unstyled">
          <li><font-awesome-icon icon="chevron-right" /> <b-link href="#">Recherche par référence</b-link></li>
          <li><font-awesome-icon icon="chevron-right" /> <b-link href="#">Recherche par véhicule</b-link></li>
          <li><font-awesome-icon icon="chevron-right" /> <b-link href="#">Véhicules compatibles Motrio</b-link></li>
          <li><font-awesome-icon icon="chevron-right" /> <b-link href="#">Références compatibles Motrio</b-link></li>
        </ul>
      </b-col>
      <b-col md="3">
        <ul class="list-unstyled">
          <li><font-awesome-icon icon="chevron-right" /> <b-link href="#">Page d'accueil</b-link></li>
          <li><font-awesome-icon icon="chevron-right" /> <b-link href="#">La marque</b-link></li>
          <li><font-awesome-icon icon="chevron-right" /> <b-link href="#">Le réseau</b-link></li>
          <li><font-awesome-icon icon="chevron-right" /> <b-link href="#">La gamme</b-link></li>
        </ul>
      </b-col>
      <b-col md="3">
        <ul class="list-unstyled">
          <li><font-awesome-icon icon="chevron-right" /> <b-link href="#">Nous contacter</b-link></li>
          <li><font-awesome-icon icon="chevron-right" /> <b-link href="#">Mentions légales</b-link></li>
        </ul>
      </b-col>
      <b-col md="3">
        <ul class="list-unstyled">
          <li><font-awesome-icon icon="chevron-right" /> <b-link href="#">Site national</b-link></li>
        </ul>
      </b-col>
    </b-row>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.footer {
  padding: $spacer;
  background-color: theme-color('dark');
  color: color('white');
  font-size: $small-font-size;

  a {
    color: color('white');
  }
}
</style>
