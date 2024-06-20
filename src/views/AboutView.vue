<template>
  <section class="about">
    <div class="container">
      <div class="row">
        <div class="card col-md-8 m-auto p-5">
          <h3 class="text-start fs-4">Clientes que han ordenado en la tienda</h3>
          <div class="d-inline-flex flex-wrap justify-content-start align-items-center my-4">
            <span class="d-inline filter text-start">Filtros:</span>
            <v-select @v-selected="onSelectedMonth" :options="getMonths" label="Mes"></v-select>
            <v-select @v-selected="onSelectedStatus" :options="getStatuses" label="Estado"></v-select>
            <span class="ms-auto p-2">Registros (<strong>{{ getOrders.length }}</strong>)</span>
          </div>
          <table class="table table-hover ">
            <thead class="bg-primary-color table-dark">
              <tr>
                <th scope="col">Cliente</th>
                <th scope="col">Número de Ordenes</th>
                <th scope="col">Monto ($ COP)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in getOrders">
                <td>
                  <div class="user_table">
                    <p class="m-0"><strong>{{ order.first_name }} {{order.last_name}}</strong></p>
                    <span class="fs-6">{{order.email}}</span>
                  </div>
                </td>
                <td>{{parseInt(order.ordered_quantity)}}</td>
                <td>{{ $filters.currencyCOP(order.total)}}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="text-end text-uppercase pe-5">Total</td>
                <td>{{ totalOrders() }}</td>
                <td>{{$filters.currencyCOP(totalValue())}}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getError', 'getMonths', 'getStatuses', 'getOrders']),
  },
  data() {
    return {
      month: 0,
      status:0,
      orders:[]
    }
  },
  created() {},
  methods: {
    ...mapActions(['fetchMonths', 'fetchStatuses', 'fetchOrders', 'fetchOrdersByMonth', 'setOrderStatusFilter', 'filterOrders']),
    onSelectedMonth(monthID){
      this.fetchOrdersByMonth(monthID);
      this.month = monthID;
    },
    onSelectedStatus(statusID){
      this.setOrderStatusFilter(statusID);
      this.filterOrders();
      this.status = statusID;
    },
    totalOrders(){
      let sum =  this.getOrders.reduce((s,f) => {
        return parseInt(s) + parseInt(f.ordered_quantity)
      },0)
      return sum;
    },
    totalValue(){
      let sum =  this.getOrders.reduce((s,f) => {
        return parseInt(s) + parseInt(f.total)
      },0)
      return sum;
    },
  },
  mounted() {
    this.fetchMonths()
    this.fetchStatuses()
    this.fetchOrders()
  }
}
</script>
<style>
.about{
  margin-top: 88px;
}
.filter{
  max-width: 100px;
}
.about .table thead{
  text-transform: uppercase;
}
.about .table>:not(caption)>*>*{
  background-color: transparent;
} 
@media screen and (max-width: 1024px) {
  .about{
    margin-top: 100px;
  }
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
