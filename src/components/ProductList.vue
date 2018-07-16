<template>
  <div>
    <div class="text-right">
      <a class="btn btn-outline-dark" href="#" role="button">Nos revendeurs</a>
    </div>

    <h4 class="text-primary">
      {{ products.length }} {{ products.length | pluralize('résultat') }}
    </h4>

    <b-table
      :fields="fields"
      :items="products"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      head-variant="light"
    >
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProductList',
  filters: {
    pluralize: function (total, word) {
      return total >= 1 ? `${word}s` : word
    }
  },
  props: {
    categoryId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      sortBy: 'refMotrio',
      sortDesc: false,
      fields: [
        { key: 'refMotrio', label: 'Référence Motrio', sortable: true },
        { key: 'refCel', label: 'Référence Constructeur', sortable: true },
        { key: 'description', label: 'Caractéristiques', sortable: true }
      ],
      products: []
    }
  },
  watch: {
    categoryId: function () {
      this.setProducts()
    }
  },
  methods: {
    setProducts () {
      axios.get('/search/product_by_category', {
        params: {
          category: this.categoryId
        }
      })
      .then(response => {
        this.products = response.data.products.products
      })
      .catch(error => {
        console.error(error)
      })
    }
  }
}
</script>
