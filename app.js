// Función para encriptar el texto
function encriptarTexto(texto) {
    if (texto.trim() === "") {
        alert("El campo de texto está vacío. Por favor, ingrese un texto.");
        return "";
    }
    // Validar que el texto solo contenga letras minúsculas sin acentos ni caracteres especiales
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
        return "";
    }
    // Mapa de encriptación
    let mapa = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    return texto.replace(/[aeiou]/g, letra => mapa[letra]);
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    // Validar que el texto solo contenga letras minúsculas sin acentos ni caracteres especiales
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
        return "";
    }
    // Mapa de desencriptación
    let mapa = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    return texto.replace(/ai|enter|imes|ober|ufat/g, codigo => mapa[codigo]);
}

// Función para mostrar el texto desencriptado/encriptado en el área de texto correspondiente
function mostrarTextoDesencriptado(texto) {
    let output = document.getElementById('desencriptar');
    output.style.display = 'block';
    output.value = texto;

    let botonCopiar = document.querySelector('.contenedor__right__button');
    botonCopiar.style.display = 'block';

    document.querySelector('.contenedor__right img').style.display = 'none';
    document.querySelector('.contenedor__right__mensaje').style.display = 'none';
    document.querySelector('.contenedor__right__mensaje__aux').style.display = 'none';
}

// Encriptar al hacer clic en el botón de encriptar
document.querySelector('.contenedor__left__button__encriptar').addEventListener('click', () => {
    let texto = document.getElementById('encriptar').value;
    let textoEncriptado = encriptarTexto(texto);
    mostrarTextoDesencriptado(textoEncriptado);
});

// Desencriptar al hacer clic en el botón de desencriptar
document.querySelector('.contenedor__left__button__desencriptar').addEventListener('click', () => {
    let texto = document.getElementById('encriptar').value;
    let textoDesencriptado = desencriptarTexto(texto);
    mostrarTextoDesencriptado(textoDesencriptado);
});

// Función para copiar el texto desencriptado al portapapeles
document.querySelector('.contenedor__right__button').addEventListener('click', () => {
    let texto = document.getElementById('desencriptar').value;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado al portapapeles');
    });
});
