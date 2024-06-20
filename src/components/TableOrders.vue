<template>
  <table class="table table-hover">
    <thead class="bg-primary-color table-dark">
      <tr>
        <th scope="col">Cliente</th>
        <th scope="col">Número de Ordenes</th>
        <th scope="col">Monto ($ COP)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.order_num">
        <td>
          <div class="user_table">
            <p class="m-0">
              <strong>{{ order.first_name }} {{ order.last_name }}</strong>
            </p>
            <span class="fs-6">{{ order.email }}</span>
          </div>
        </td>
        <td>{{ parseInt(order.ordered_quantity) }}</td>
        <td>{{ $filters.currencyCOP(order.total) }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td class="text-end text-uppercase pe-5">Total</td>
        <td>{{ totalOrders() }}</td>
        <td>{{ $filters.currencyCOP(totalValue()) }}</td>
      </tr>
    </tfoot>
  </table>
</template>
<script>
export default {
  props: ['orders'],
  data() {
    return {}
  },
  created() {},
  methods: {
    totalOrders() {
      let sum = this.orders.reduce((s, f) => {
        return parseInt(s) + parseInt(f.ordered_quantity)
      }, 0)
      return sum
    },
    totalValue() {
      let sum = this.orders.reduce((s, f) => {
        return parseInt(s) + parseInt(f.total)
      }, 0)
      return sum
    }
  }
}
</script>
<style>
.table thead {
  text-transform: uppercase;
}
.table > :not(caption) > * > th {
  font-weight: 600;
  background-color: transparent;
}
.table > :not(caption) > * > td {
  color: grey;
}
.user_table strong,
tfoot td {
  color: black !important;
  font-weight: 600;
}
</style>
