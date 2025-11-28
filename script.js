function calcularEdad() {
    const fechaInput = document.getElementById("fecha").value;
    const resultado = document.getElementById("resultado");

    if (!fechaInput) {
        resultado.textContent = "⚠️ Por favor selecciona tu fecha de nacimiento.";
        resultado.style.color = "red";
        return;
    }

    const nacimiento = new Date(fechaInput);
    const hoy = new Date();

    if (nacimiento > hoy) {
        resultado.textContent = "⚠️ La fecha no puede ser futura.";
        resultado.style.color = "red";
        return;
    }

    let años = hoy.getFullYear() - nacimiento.getFullYear();
    let meses = hoy.getMonth() - nacimiento.getMonth();
    let dias = hoy.getDate() - nacimiento.getDate();

    if (dias < 0) {
        meses--;
        dias += diasEnMes(hoy.getMonth() - 1, hoy.getFullYear());
    }

    if (meses < 0) {
        años--;
        meses += 12;
    }

    resultado.style.color = "black";
    resultado.innerHTML = `Tienes <strong>${años}</strong> años, <strong>${meses}</strong> meses y <strong>${dias}</strong> días.`;
}

function diasEnMes(mes, año) {
    return new Date(año, mes + 1, 0).getDate();
}
