<template>
  <section class="orders">
    <div class="container">
      <div class="row">
        <div class="card col-md-8 m-auto p-5">
          <h3 class="text-start fs-4">Clientes que han ordenado en la tienda</h3>
          <div class="d-inline-flex flex-wrap justify-content-start align-items-center my-4">
            <span class="d-inline filter text-start">Filtros:</span>
            <v-select @v-selected="onSelectedMonth" :options="getMonths" label="Mes"></v-select>
            <v-select
              @v-selected="onSelectedStatus"
              :options="getStatuses"
              label="Estado"
            ></v-select>
            <span class="ms-auto p-2"
              >Registros (<strong>{{ getOrders.length }}</strong
              >)</span
            >
          </div>
          <TableOrders :orders="getOrders" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getError', 'getMonths', 'getStatuses', 'getOrders'])
  },
  data() {
    return {
      month: 0,
      status: 0,
      orders: []
    }
  },
  created() {},
  methods: {
    ...mapActions([
      'fetchMonths',
      'fetchStatuses',
      'fetchOrders',
      'fetchOrdersByMonth',
      'setOrderStatusFilter',
      'filterOrders'
    ]),
    onSelectedMonth(monthID) {
      this.fetchOrdersByMonth(monthID)
      this.month = monthID
    },
    onSelectedStatus(statusID) {
      this.setOrderStatusFilter(statusID)
      this.filterOrders()
      this.status = statusID
    },
    totalOrders() {
      let sum = this.getOrders.reduce((s, f) => {
        return parseInt(s) + parseInt(f.ordered_quantity)
      }, 0)
      return sum
    },
    totalValue() {
      let sum = this.getOrders.reduce((s, f) => {
        return parseInt(s) + parseInt(f.total)
      }, 0)
      return sum
    }
  },
  mounted() {
    this.fetchMonths()
    this.fetchStatuses()
    this.fetchOrders()
  }
}
</script>
<style>
.orders {
  margin-top: 88px;
}
.filter {
  max-width: 100px;
}
.orders .table thead {
  text-transform: uppercase;
}
.orders .table > :not(caption) > * > * {
  background-color: transparent;
}
@media screen and (max-width: 1024px) {
  .orders {
    margin-top: 100px;
  }
}

@media (min-width: 1024px) {
  .orders {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
