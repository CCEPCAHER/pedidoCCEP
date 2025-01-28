document.getElementById('pedidoForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const cantidad = document.getElementById('cantidad').value;
    const cliente = document.getElementById('cliente').value;
    const direccion = document.getElementById('direccion').value;

    const pedido = {
        cantidad: cantidad,
        cliente: cliente,
        direccion: direccion
    };

    try {
        const response = await fetch('/guardar-pedido', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pedido)
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al enviar el pedido.');
    }
});
