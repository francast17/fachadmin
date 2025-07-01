document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioDatos');
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('closeModal');
    const okModalButton = document.getElementById('okModal');
    const modalFachaPorc = document.getElementById('modal-facha-porc');
    const modalHeymmyJorge = document.getElementById('modal-heymmy-jorge');
    const modalAgelaFran = document.getElementById('modal-angela-fran');
    const modalFachaTotal = document.getElementById('modal-facha-total');



    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const angela = parseFloat(document.getElementById('manicurista1').value);
        const fran = parseFloat(document.getElementById('barbero1').value);
        const lester = parseFloat(document.getElementById('barbero2').value);
        const otros = parseFloat(document.getElementById('otros').value);
        const gastos = parseFloat(document.getElementById('gastos').value);
        const fondo_anterior = parseFloat(document.getElementById('anterior').value);
        

        //calculos:

        let angela_fran = angela + fran;
        let lester_mitad = lester / 2; 
        let otros_mitad = otros / 2;
        let facha20porc = (angela + fran + lester + otros) * 0.20;
        let heymmy_jorge_total = ((angela_fran * 0.40) + lester_mitad + otros_mitad) - (facha20porc/2);
        let angela_fran_total = ((angela_fran * 0.60) + lester_mitad + otros_mitad) - (facha20porc/2);
        let facha_total = (fondo_anterior + facha20porc) - gastos;

        // Si las validaciones pasan, inyectar los datos en el modal

        modalFachaPorc.textContent = facha20porc;
        modalHeymmyJorge.textContent = heymmy_jorge_total;
        modalAgelaFran.textContent = angela_fran_total;
        modalFachaTotal.textContent = facha_total;

        // NO inyectes la contraseña en un modal visible por seguridad.

        // 2. Mostrar el modal
        modal.classList.add('active'); // Añade la clase 'active' para mostrar el modal

        // 3. Opcional: Resetear el formulario después de procesar
        formulario.reset();
    });

    // 4. Lógica para cerrar el modal
    const closeModal = () => {
        modal.classList.remove('active'); // Quita la clase 'active' para ocultar el modal
    };

    closeModalButton.addEventListener('click', closeModal); // Botón 'x'
    okModalButton.addEventListener('click', closeModal);   // Botón 'Cerrar'
    
    // Cierra el modal si se hace clic fuera de su contenido
    modal.addEventListener('click', (event) => {
        if (event.target === modal) { // Si el clic es directamente en el overlay
            closeModal();
        }
    });

    // Cierra el modal con la tecla Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});