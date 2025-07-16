const cursos = [
  // Primer año
  { id: "B0106", nombre: "Biología General", prerrequisitos: [] },
  { id: "B0107", nombre: "Laboratorio de Biología General", prerrequisitos: [] },
  { id: "EF", nombre: "Actividad Deportiva", prerrequisitos: [] },
  { id: "EG-I", nombre: "Humanidades I", prerrequisitos: [] },
  { id: "MA1210", nombre: "Cálculo I", prerrequisitos: [] },
  { id: "QU0114", nombre: "Química General", prerrequisitos: [] },
  { id: "QU0115", nombre: "Lab. Química General", prerrequisitos: [] },

  { id: "B0111", nombre: "Botánica Agrícola I", prerrequisitos: ["B0106", "B0107"] },
  { id: "EG-II", nombre: "Humanidades II", prerrequisitos: ["EG-I"] },
  { id: "QU0200", nombre: "Química Analítica Cuantitativa I", prerrequisitos: ["QU0114"] },
  { id: "QU0201", nombre: "Lab. Química Analítica Cuantitativa I", prerrequisitos: ["QU0115"] },
  { id: "QU0210", nombre: "Fundamentos de Química Orgánica", prerrequisitos: ["QU0114"] },
  { id: "QU0211", nombre: "Lab. Fundamentos de Química Orgánica", prerrequisitos: ["QU0115"] },

  { id: "AF0104", nombre: "Métodos de Investigación Agrícola", prerrequisitos: ["MA1210"] },
  { id: "AF0106", nombre: "Práctica Agrícola I", prerrequisitos: ["B0111"] },

  // Segundo año
  { id: "EG-ARTE", nombre: "Curso de Arte", prerrequisitos: [] },
  { id: "AF0105", nombre: "Fisiología Vegetal", prerrequisitos: ["B0111", "QU0201", "QU0210", "QU0211", "AF0104"] },
  { id: "AF0107", nombre: "Fitogenética", prerrequisitos: ["B0111", "QU0210", "QU0211"] },
  { id: "AF0108", nombre: "Relación Suelo-Planta", prerrequisitos: ["QU0200", "QU0201", "AF0104"] },
  { id: "FS0103", nombre: "Física para Ciencias de la Vida I", prerrequisitos: [] },

  { id: "AF0111", nombre: "Biología de Malezas", prerrequisitos: ["AF0105", "AF0107"] },
  { id: "AF0109", nombre: "Fitopatología", prerrequisitos: ["AF0105", "AF0107"] },
  { id: "AF0110", nombre: "Entomología Agrícola", prerrequisitos: ["AF0105", "AF0107"] },
  { id: "AF0108", nombre: "Agroecología", prerrequisitos: ["AF0108"] },
  { id: "AF0112", nombre: "Productividad de Suelos", prerrequisitos: ["AF0108", "AF0108"] },

  { id: "AF0113", nombre: "Práctica Agrícola II", prerrequisitos: ["AF0111", "AF0109", "AF0110", "AF0108"] },
  { id: "AF0114", nombre: "Elementos de Economía Agrícola", prerrequisitos: ["AF0108"] },

  // Tercer año
  { id: "SR-I", nombre: "Seminario Realidad Nacional I", prerrequisitos: ["EG-II"] },
  { id: "AF3410", nombre: "Fisiología de los Cultivos", prerrequisitos: ["AF0113"] },
  { id: "AF0118", nombre: "Manejo Integrado de Problemas Fitosanitarios", prerrequisitos: ["AF0113"] },
  { id: "AF0119", nombre: "Conservación de Suelos", prerrequisitos: ["AF0112"] },
  { id: "AF0116", nombre: "Manejo de Aguas Agrícolas", prerrequisitos: ["FS0103", "AF0112"] },
  { id: "AF0201", nombre: "Gestión y Administración de Empresas Agrícolas", prerrequisitos: ["AF0114"] },

  { id: "SR-II", nombre: "Seminario Realidad Nacional II", prerrequisitos: ["SR-I"] },
  { id: "OPT951", nombre: "Optativos del Plan", prerrequisitos: [] },
  { id: "AF0117", nombre: "Sistemas de Producción de Cultivos", prerrequisitos: ["AF3410", "AF0118", "AF0201"] },
  { id: "AF0115", nombre: "Equipos Agrícolas y Mecanización", prerrequisitos: ["AF0119", "AF0116"] },
  { id: "AF0202", nombre: "Práctica Agrícola III", prerrequisitos: ["AF0118", "AF0201"] },

  // Cuarto año
  { id: "RP", nombre: "Repertorio", prerrequisitos: [] },
  { id: "AF0212", nombre: "Diseño de Experimentos I", prerrequisitos: ["AF0117"] },
  { id: "AF0206", nombre: "Proyecto Productivo", prerrequisitos: ["AF0117", "AF0202"] },

  { id: "AF0220", nombre: "Taller de Formulación de Proyectos", prerrequisitos: ["AF0212"] },
  { id: "AF0207", nombre: "Pasantía", prerrequisitos: ["AF0206"] },

  // Licenciatura
  { id: "AF0221", nombre: "Taller de Investigación I", prerrequisitos: ["AF0220", "AF0207"] },
  { id: "AF0222", nombre: "Taller de Investigación II", prerrequisitos: ["AF0221"] },
  { id: "AF5413", nombre: "Seminario de Agronomía", prerrequisitos: ["AF0207"] },

  { id: "AF9500", nombre: "Investigación Dirigida I", prerrequisitos: [] },
  { id: "AF9600", nombre: "Seminario de Graduación I", prerrequisitos: ["AF9500"] },
  { id: "AF9501", nombre: "Investigación Dirigida II", prerrequisitos: ["AF9500"] },
  { id: "AF9601", nombre: "Seminario de Graduación II", prerrequisitos: ["AF9600"] },
  { id: "AF9602", nombre: "Seminario de Graduación III", prerrequisitos: ["AF9600"] },
  { id: "AF9700", nombre: "Práctica Dirigida I", prerrequisitos: [] },
  { id: "AF9701", nombre: "Práctica Dirigida II", prerrequisitos: ["AF9700"] },
  { id: "AF9702", nombre: "Práctica Dirigida III", prerrequisitos: ["AF9701"] },
];

const malla = document.getElementById("malla");

function crearCurso(curso) {
  const div = document.createElement("div");
  div.classList.add("curso");
  div.dataset.id = curso.id;
  div.textContent = `${curso.id} - ${curso.nombre}`;
  div.addEventListener("click", () => toggleCurso(div));
  return div;
}

function toggleCurso(div) {
  if (div.classList.contains("bloqueado")) return;
  div.classList.toggle("aprobado");
  actualizarCursos();
}

function actualizarCursos() {
  const aprobados = new Set(
    [...document.querySelectorAll(".curso.aprobado")].map(c => c.dataset.id)
  );

  cursos.forEach(curso => {
    const div = document.querySelector(`.curso[data-id="${curso.id}"]`);
    const desbloqueado = curso.prerrequisitos.every(pr => aprobados.has(pr));
    if (desbloqueado) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
      div.classList.remove("aprobado");
    }
  });
}

function init() {
  cursos.forEach(curso => {
    const div = crearCurso(curso);
    malla.appendChild(div);
  });
  actualizarCursos();
}

init();
