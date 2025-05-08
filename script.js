function calcularTriangulo() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const A = parseFloat(document.getElementById("A").value);
  const B = parseFloat(document.getElementById("B").value);
  const C = parseFloat(document.getElementById("C").value);

  let lados = [a, b, c].filter(n => !isNaN(n));
  let angulos = [A, B, C].filter(n => !isNaN(n));

  const res = document.getElementById("resultado");
  res.innerHTML = "";

  if (lados.length < 1 || lados.length + angulos.length < 3) {
    res.innerHTML = "Debes ingresar al menos 3 datos, incluyendo al menos un lado.";
    return;
  }

  // Identificar el tipo de triángulo (solo si hay 3 lados)
  let tipo = "No definido";
  if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    if (a === b && b === c) {
      tipo = "Equilátero";
    } else if (a === b || b === c || a === c) {
      tipo = "Isósceles";
    } else {
      tipo = "Escaleno";
    }
  }

  res.innerHTML = `
    <strong>Datos ingresados:</strong><br/>
    Lado a: ${isNaN(a) ? "?" : a}<br/>
    Lado b: ${isNaN(b) ? "?" : b}<br/>
    Lado c: ${isNaN(c) ? "?" : c}<br/>
    Ángulo A: ${isNaN(A) ? "?" : A}°<br/>
    Ángulo B: ${isNaN(B) ? "?" : B}°<br/>
    Ángulo C: ${isNaN(C) ? "?" : C}°<br/><br/>
    <strong>Tipo de triángulo:</strong> ${tipo}
  `;
}

function resetear() {
  ["a", "b", "c", "A", "B", "C"].forEach(id => document.getElementById(id).value = "");
  document.getElementById("resultado").innerHTML = "";
}
