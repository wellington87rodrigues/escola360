// // secretaria.js

// document.addEventListener("DOMContentLoaded", function () {
//   const contentArea = document.getElementById("dashboard-content");
//   const navLinks = document.querySelectorAll(".nav-link");
//   const logoutButton = document.getElementById("logoutButton");

//   // ----------------------------------------------
//   // 1. SIMULAÇÃO DE MÓDULOS HTML (RF03, RF11, RF12)
//   // ----------------------------------------------

//   const modules = {
//     alunos: {
//       title: "Gerenciar Alunos (CRUD)",
//       html: `
//                 <div class="module-card">
//                     <h3>Cadastro de Alunos</h3>
//                     <p>Aqui a Secretaria realiza o CRUD de Alunos (Matrícula, Dados Pessoais).</p>
//                     <button class="action-btn">Novo Aluno</button>
//                     <button class="action-btn" style="background-color: #17a2b8;">Consultar Tabela</button>
//                     <button class="action-btn" style="background-color: #ffc107;">Importar CSV</button>
//                 </div>
//             `,
//     },
//     responsaveis: {
//       title: "Gerenciar Pais/Responsáveis",
//       html: `
//                 <div class="module-card">
//                     <h3>Vínculos e Contato</h3>
//                     <p>Gerenciamento dos responsáveis vinculados a cada aluno, dados de contato e autorizações.</p>
//                     <button class="action-btn">Adicionar Responsável</button>
//                     <button class="action-btn" style="background-color: #17a2b8;">Consultar Vínculos</button>
//                 </div>
//             `,
//     },
//     professores: {
//       title: "Gerenciar Professores (CRUD)",
//       html: `
//                 <div class="module-card">
//                     <h3>Cadastro de Professores</h3>
//                     <p>Cadastro, edição e atribuição de perfis de acesso para Professores.</p>
//                     <button class="action-btn">Novo Professor</button>
//                     <button class="action-btn" style="background-color: #17a2b8;">Consultar Tabela</button>
//                 </div>
//             `,
//     },
//     matricula: {
//       title: "Matrícula & Transferência",
//       html: `
//                 <div class="module-card">
//                     <h3>Realizar Matrícula (RF05)</h3>
//                     <p>Realizar matrícula de alunos já cadastrados e atribuí-los a uma nova turma no ano letivo.</p>
//                     <button class="action-btn">Nova Matrícula</button>
//                 </div>
//                 <div class="module-card">
//                     <h3>Realizar Transferência</h3>
//                     <p>Processo de desligamento de alunos e emissão de declaração de transferência.</p>
//                     <button class="action-btn" style="background-color: #dc3545;">Solicitar Transferência</button>
//                 </div>
//             `,
//     },
//     historico: {
//       title: "Preencher & Emitir Histórico",
//       html: `
//                 <div class="module-card">
//                     <h3>Histórico Escolar (RF11)</h3>
//                     <p>Finalização e emissão do Histórico Escolar com assinatura digital (RNF03).</p>
//                     <button class="action-btn">Emitir Histórico</button>
//                 </div>
//             `,
//     },
//     declaracoes: {
//       title: "Emitir Declarações",
//       html: `
//                 <div class="module-card">
//                     <h3>Documentos Oficiais (RF12)</h3>
//                     <p>Emissão rápida de Declaração de Matrícula, Declaração de Quitação e outros documentos.</p>
//                     <button class="action-btn">Emitir Declaração de Matrícula</button>
//                 </div>
//             `,
//     },
//     config: {
//       title: "Configurações da Secretaria",
//       html: `
//                 <div class="module-card">
//                     <h3>Dados da Escola</h3>
//                     <p>Gerenciar dados institucionais, regras de avaliação e configurações de ano letivo.</p>
//                 </div>
//             `,
//     },
//   };

//   // ----------------------------------------------
//   // 2. FUNÇÃO DE NAVEGAÇÃO
//   // ----------------------------------------------

//   function loadContent(section) {
//     const module = modules[section];
//     if (module) {
//       contentArea.innerHTML = `<h1 class="page-title">${module.title}</h1>${module.html}`;
//     }
//   }

//   // ----------------------------------------------
//   // 3. EVENT LISTENERS
//   // ----------------------------------------------

//   // Navegação Sidebar
//   navLinks.forEach((link) => {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();

//       // Remove 'active' de todos e adiciona ao clicado
//       navLinks.forEach((l) => l.classList.remove("active"));
//       this.classList.add("active");

//       // Carrega o conteúdo
//       const section = this.getAttribute("data-section");
//       loadContent(section);
//     });
//   });

//   // Botão Sair (Logout)
//   logoutButton.addEventListener("click", function () {
//     if (confirm("Deseja realmente sair do sistema?")) {
//       // No sistema real, faria uma chamada para limpar o token
//       window.location.href = "index.html";
//     }
//   });

//   // Carregar o conteúdo inicial ('alunos')
//   loadContent("alunos");
// });

// secretaria.js

document.addEventListener("DOMContentLoaded", function () {
  const contentArea = document.getElementById("dashboard-content");
  const navLinks = document.querySelectorAll(".nav-link");
  const logoutButton = document.getElementById("logoutButton");

  // ----------------------------------------------
  // 1. BANCO DE DADOS SIMULADO (RF03)
  // ----------------------------------------------
  let students = [
    {
      id: 1,
      name: "Alice Silva",
      enrollment: "2025001",
      email: "alice@mail.com",
      birthDate: "2010-05-15",
      class: "8º Ano A",
      status: "Ativo",
    },
    // {
    //   id: 2,
    //   name: "Bruno Santos",
    //   enrollment: "2025002",
    //   email: "bruno@mail.com",
    //   birthDate: "2009-11-20",
    //   class: "9º Ano B",
    //   status: "Ativo",
    // },
    // {
    //   id: 3,
    //   name: "Carla Dias",
    //   enrollment: "2025003",
    //   email: "carla@mail.com",
    //   birthDate: "2011-03-01",
    //   class: "7º Ano C",
    //   status: "Transferido",
    // },
  ];
  let nextStudentId = 4;

  // ----------------------------------------------
  // 2. FUNÇÕES CRUD (CLIENT-SIDE)
  // ----------------------------------------------

  // Função para renderizar a Tabela de Alunos
  function renderStudentsTable() {
    if (document.getElementById("students-table-container")) {
      document.getElementById("students-table-container").remove();
    }

    let tableHTML = `
            <div id="students-table-container" class="module-card">
                <h3>Alunos Cadastrados</h3>
                <button class="action-btn" id="newStudentBtn">Novo Aluno</button>
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Matrícula</th>
                                <th>Nome</th>
                                <th>Turma</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
        `;

    students.forEach((student) => {
      tableHTML += `
                <tr data-id="${student.id}">
                    <td data-label="Matrícula">${student.enrollment}</td>
                    <td data-label="Nome">${student.name}</td>
                    <td data-label="Turma">${student.class}</td>
                    <td data-label="Status" class="status-${student.status.toLowerCase()}">${
        student.status
      }</td>
                    <td data-label="Ações" class="action-buttons">
                        <button class="edit-btn" data-id="${
                          student.id
                        }">Alterar</button>
                        <button class="delete-btn" data-id="${
                          student.id
                        }">Excluir</button>
                    </td>
                </tr>
            `;
    });

    tableHTML += `
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    contentArea.insertAdjacentHTML("beforeend", tableHTML);

    // Adiciona event listeners dinamicamente
    document
      .getElementById("newStudentBtn")
      .addEventListener("click", () => openStudentModal(null));
    document.querySelectorAll(".edit-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = parseInt(e.target.dataset.id);
        const student = students.find((s) => s.id === id);
        openStudentModal(student);
      });
    });
    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = parseInt(e.target.dataset.id);
        deleteStudent(id);
      });
    });
  }

  // Abre o Modal de Cadastro/Edição
  function openStudentModal(studentData) {
    const isEditing = !!studentData;

    // Remove modal anterior
    if (document.getElementById("student-modal")) {
      document.getElementById("student-modal").remove();
    }

    // Simulação de classes/turmas disponíveis
    const classes = ["7º Ano C", "8º Ano A", "9º Ano B", "1ª Série EM"];
    const statusOptions = ["Ativo", "Inativo", "Transferido"];

    let modalHTML = `
            <div id="student-modal" class="modal-overlay">
                <div class="modal-content">
                    <h3>${
                      isEditing
                        ? "Alterar Dados do Aluno"
                        : "Cadastrar Novo Aluno"
                    }</h3>
                    <form id="student-form">
                        <input type="hidden" name="id" value="${
                          studentData ? studentData.id : ""
                        }">
                        
                        <div class="form-row">
                            <label>Nome Completo:</label>
                            <input type="text" name="name" value="${
                              studentData ? studentData.name : ""
                            }" required>
                        </div>

                        <div class="form-row">
                            <label>E-mail:</label>
                            <input type="email" name="email" value="${
                              studentData ? studentData.email : ""
                            }" required>
                        </div>
                        
                        <div class="form-row half">
                            <label>Data Nasc.:</label>
                            <input type="date" name="birthDate" value="${
                              studentData ? studentData.birthDate : ""
                            }" required>
                        </div>
                        
                        <div class="form-row half">
                            <label>Turma Atual:</label>
                            <select name="class" required>
                                ${classes
                                  .map(
                                    (c) =>
                                      `<option value="${c}" ${
                                        studentData && studentData.class === c
                                          ? "selected"
                                          : ""
                                      }>${c}</option>`
                                  )
                                  .join("")}
                            </select>
                        </div>
                        
                        ${
                          isEditing
                            ? `
                            <div class="form-row">
                                <label>Status:</label>
                                <select name="status" required>
                                    ${statusOptions
                                      .map(
                                        (s) =>
                                          `<option value="${s}" ${
                                            studentData &&
                                            studentData.status === s
                                              ? "selected"
                                              : ""
                                          }>${s}</option>`
                                      )
                                      .join("")}
                                </select>
                            </div>
                        `
                            : ""
                        }

                        <div class="modal-actions">
                            <button type="button" class="close-modal-btn">Cancelar</button>
                            <button type="submit" class="save-modal-btn">${
                              isEditing ? "Salvar Alterações" : "Cadastrar"
                            }</button>
                        </div>
                    </form>
                </div>
            </div>
        `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);

    // Adiciona listeners
    document
      .querySelector(".close-modal-btn")
      .addEventListener("click", closeModal);
    document
      .getElementById("student-form")
      .addEventListener("submit", handleStudentSubmit);
  }

  // Fecha o Modal
  function closeModal() {
    const modal = document.getElementById("student-modal");
    if (modal) modal.remove();
  }

  // Lida com a submissão do formulário
  function handleStudentSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Simula Matrícula e Status para novos alunos
    if (!data.id) {
      // Lógica de CREATE
      const newStudent = {
        id: nextStudentId++,
        name: data.name,
        enrollment: (
          parseInt(students[students.length - 1].enrollment) + 1
        ).toString(),
        email: data.email,
        birthDate: data.birthDate,
        class: data.class,
        status: "Ativo",
      };
      students.push(newStudent);
      alert(
        `Aluno ${data.name} cadastrado com Matrícula ${newStudent.enrollment}!`
      );
    } else {
      // Lógica de UPDATE
      const id = parseInt(data.id);
      const index = students.findIndex((s) => s.id === id);
      if (index !== -1) {
        // Preserva a matrícula e o ID, atualiza o resto
        students[index] = {
          ...students[index],
          name: data.name,
          email: data.email,
          birthDate: data.birthDate,
          class: data.class,
          status: data.status, // Atualiza o status
        };
        alert(`Dados do aluno ${data.name} atualizados!`);
      }
    }

    closeModal();
    renderStudentsTable(); // Recarrega a tabela
  }

  // Excluir Aluno
  function deleteStudent(id) {
    if (
      confirm(
        "ATENÇÃO: Deseja realmente excluir este aluno? Esta ação não pode ser desfeita."
      )
    ) {
      students = students.filter((s) => s.id !== id);
      alert("Aluno excluído com sucesso.");
      renderStudentsTable();
    }
  }

  // ----------------------------------------------
  // 3. ESTRUTURA DOS MÓDULOS
  // ----------------------------------------------

  // Define a estrutura para o módulo de alunos
  const modules = {
    alunos: {
      title: "Gerenciar Alunos (CRUD)",
      html: `
                <p>Módulo para Cadastro, Visualização, Alteração e Exclusão de Alunos (RF03).</p>
                `,
      onLoad: renderStudentsTable, // Função a ser executada ao carregar a seção
    },
    responsaveis: {
      title: "Gerenciar Pais/Responsáveis",
      html: `<div class="module-card"><h3>Vínculos e Contato</h3><p>Gerenciamento dos responsáveis vinculados a cada aluno, dados de contato e autorizações.</p><button class="action-btn">Adicionar Responsável</button><button class="action-btn" style="background-color: #17a2b8;">Consultar Vínculos</button></div>`,
      onLoad: null,
    },
    professores: {
      title: "Gerenciar Professores (CRUD)",
      html: `<div class="module-card"><h3>Cadastro de Professores</h3><p>Cadastro, edição e atribuição de perfis de acesso para Professores.</p><button class="action-btn">Novo Professor</button><button class="action-btn" style="background-color: #17a2b8;">Consultar Tabela</button></div>`,
      onLoad: null,
    },
    matricula: {
      title: "Matrícula & Transferência",
      html: `<div class="module-card"><h3>Realizar Matrícula (RF05)</h3><p>Realizar matrícula de alunos já cadastrados e atribuí-los a uma nova turma no ano letivo.</p><button class="action-btn">Nova Matrícula</button></div><div class="module-card"><h3>Realizar Transferência</h3><p>Processo de desligamento de alunos e emissão de declaração de transferência.</p><button class="action-btn" style="background-color: #dc3545;">Solicitar Transferência</button></div>`,
      onLoad: null,
    },
    historico: {
      title: "Preencher Histórico",
      html: `<div class="module-card"><h3>Histórico Escolar (RF11)</h3><p>Finalização e emissão do Histórico Escolar com assinatura digital (RNF03).</p><button class="action-btn">Emitir Histórico</button></div>`,
      onLoad: null,
    },
    declaracoes: {
      title: "Emitir Declarações",
      html: `<div class="module-card"><h3>Documentos Oficiais (RF12)</h3><p>Emissão rápida de Declaração de Matrícula, Declaração de Quitação e outros documentos.</p><button class="action-btn">Emitir Declaração de Matrícula</button></div>`,
      onLoad: null,
    },
    config: {
      title: "Configurações da Secretaria",
      html: `<div class="module-card"><h3>Dados da Escola</h3><p>Gerenciar dados institucionais, regras de avaliação e configurações de ano letivo.</p></div>`,
      onLoad: null,
    },
  };

  // ----------------------------------------------
  // 4. FUNÇÃO DE NAVEGAÇÃO PRINCIPAL
  // ----------------------------------------------

  function loadContent(section) {
    const module = modules[section];
    if (module) {
      // Limpa e insere o título e HTML base
      contentArea.innerHTML = `<h1 class="page-title">${module.title}</h1>${module.html}`;

      // Se houver uma função de carregamento específica (como renderizar tabela), executa
      if (module.onLoad) {
        module.onLoad();
      }
    }
  }

  // ----------------------------------------------
  // 5. INICIALIZAÇÃO
  // ----------------------------------------------

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
      const section = this.getAttribute("data-section");
      loadContent(section);
    });
  });

  logoutButton.addEventListener("click", function () {
    if (confirm("Deseja realmente sair do sistema?")) {
      window.location.href = "index.html";
    }
  });

  // Carregar o conteúdo inicial ('alunos')
  loadContent("alunos");
});
