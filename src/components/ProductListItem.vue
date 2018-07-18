<template>
  <b-modal id="modal" size="lg" centered hide-footer>
    <b-row>
      <b-col md="auto" class="py-3 bg-light text-center">
        <b-img
          :src="'https://motrio.com/uploads/categories/' + category.categoryPicto"
          width="150"
          height="150"
          alt="icon"
        />
      </b-col>
      <b-col class="py-3">
        <ul class="list-unstyled mb-5">
          <li>
            Produit: <b>{{ this.category.category }}</b>
          </li>
          <li
            v-for="(value, key) in filteredProduct"
            :key="key"
          >
            {{ properties[key] }} : <b>{{ value }}</b>
          </li>
        </ul>

        <p class="text-primary">
          Référence motrio : <b>{{ product.refMotrio }}</b>
        </p>

        <b-button variant="primary" class="mb-3 mb-md-0">
          Copier les informations
        </b-button>

        <b-button variant="outline-dark" href="#">Nos revendeurs</b-button>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {
  name: 'ProductListItem',
  props: {
    product: {
      type: Object,
      required: true
    },
    category: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      properties: {
        'refCel': 'Référence Constructeur',
        'description': 'Caractéristiques'
      }
    }
  },
  computed: {
    filteredProduct () {
      return Object.keys(this.product)
        .filter(key => Object.keys(this.properties).includes(key))
        .reduce((obj, key) => {
          obj[key] = this.product[key]
          return obj
        }, {})
    }
  }
}
</script>
