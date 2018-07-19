<template>
  <div>
    <div class="text-right">
      <b-button variant="outline-dark" href="#">Nos revendeurs</b-button>
    </div>

    <h4 class="text-primary">
      {{ products.length }} {{ products.length | pluralize('résultat') }}
    </h4>

    <b-table
      v-if="products.length"
      :fields="fields"
      :items="products"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      head-variant="light"
      responsive="md"
    >
      <template slot="link" slot-scope="row">
        <b-link v-b-modal.modal @click="setProduct(row.item)">
          <font-awesome-icon icon="external-link-alt" size="lg" />
        </b-link>
      </template>
    </b-table>

    <ProductListItem
      :product="selectedProduct"
      :category="category"
    />
  </div>
</template>

<script>
import axios from 'axios'
import ProductListItem from './ProductListItem.vue'

export default {
  name: 'ProductList',
  components: {
    ProductListItem
  },
  filters: {
    pluralize: function (total, word) {
      return total >= 1 ? `${word}s` : word
    }
  },
  props: {
    category: {
      type: Object,
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
        { key: 'description', label: 'Caractéristiques', sortable: true },
        { key: 'link', label: ' ' },
      ],
      products: [],
      selectedProduct: {}
    }
  },
  watch: {
    category: function () {
      this.setProducts()
    }
  },
  created () {
    this.setProducts()
  },
  methods: {
    setProducts () {
      axios.get('/search/product_by_category', {
        params: {
          category: this.category.categoryId
        }
      })
      .then(response => {
        this.products = response.data.products.products
      })
      .catch(error => {
        console.error(error)
      })
    },
    setProduct (product) {
      this.selectedProduct = product
      this.$root.$emit('bv::show::modal', 'modal')
    }
  }
}
</script>
