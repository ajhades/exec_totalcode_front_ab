<template>
  <section class="about">
    <div class="container">
      <div class="row">
        <div class="card col-md-6 m-auto p-5">
          <h4 class="text-left">Your Site, Your Way.</h4>
          <p class="lead text-left">FILTROS</p>
          <v-select></v-select>
          <table class="table table-hover">
            <thead class="table-dark">
              <tr>
                <th scope="col">Cliente</th>
                <th scope="col">Número de Ordenes</th>
                <th scope="col">Monto ($ COP)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>21</td>
                  <td>190000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
