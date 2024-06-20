<template>
  <section class="about">
    <div class="container">
      <div class="row">
        <div class="card col-md-8 m-auto p-5">
          <h3 class="text-start fs-4">Clientes que han ordenado en la tienda</h3>
          <div class="d-inline-flex flex-wrap justify-content-start align-items-center my-4">
            <span class="d-inline filter text-start">Filtros:</span>
            <v-select :options="options" label="Mes"></v-select>
            <v-select :options="options" label="Estado"></v-select>
            <span class="ms-auto p-2">Registros (<strong>{{ orders.length }}</strong>)</span>
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
              <tr v-for="order in orders">
                <td>
                  <div class="user_table">
                    <p class="m-0">{{ order.first_name }} {{order.last_name}}</p>
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
                <td>{{$filters.currencyCOP(23050400)}}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      options: [
        { id: 53, name: 'foo' },
        { id: 55, name: 'footoo' },
        { id: 56, name: 'doodoo' },
        { id: 54, name: 'barbaz' },
        { id: 57, name: 'barbars' }
      ],
      orders: [
        {first_name: 'ALEJANDRO', last_name: 'RECIO', email: 'alejandrors87@gmail.com', total: '109900.00', ordered_quantity: '2.00'},
        {first_name: 'CARMENZA', last_name: 'GARCIA', email: 'clodas@gmail.com', total: '72400.00', ordered_quantity: '1.00'},
        {first_name: 'DIEGO', last_name: 'REINOSO', email: 'dreinoso@totalcode.com', total: '109900.00', ordered_quantity: '1.00'},
        {first_name: 'SANDRA', last_name: 'MARQUEZ', email: 'sandramarquezsvc@gmail.com', total: '281300', ordered_quantity: '3.00'},
      ]
    }
  },
  created() {},
  methods: {
    totalOrders(){
      let sum =  this.orders.reduce((s,f) => {
        return parseInt(s) + parseInt(f.ordered_quantity)
      },0)
      return sum;
    }
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
.about .table{

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
