const popup = document.getElementById("modal").innerHTML=`
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Carrito</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <table  class="table" id="checkout">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody id="itemsCarrito"></tbody>
                        <tfoot id="footerTotal">
                            <th scope="row" colspan="5"></th>
                        </tfoot>
                    </table>
                    <div class="row" id="cards"></div>
                </div>
            
                <div id="footerModal" class="modal-footer btn-group">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button id="vaciar-carrito" type="button" class="btn btn-danger"
                        data-bs-dismiss="modal">Vaciar carrito</button>
                    <button id="finalizarCompra" type="button" class="btn btn-warning">Finalizar Compra
                        <i class="fa fa-shopping-cart"></i></button>
        </div>
    </div>
</div>`