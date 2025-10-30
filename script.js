// document
//   .getElementById("loginForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const button = document.getElementById("loginButton");
//     const message = document.getElementById("message");
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     // Simulação de Loading
//     button.disabled = true;
//     button.textContent = "Verificando...";
//     message.style.color = "#007bff";
//     message.textContent = "";

//     // Simulação de Chamada de API (Async)
//     setTimeout(() => {
//       button.disabled = false;
//       button.textContent = "Entrar";

//       // Lógica de Validação Simples (RF01)
//       if (email === "admin@escola.com" && password === "123456") {
//         message.style.color = "green";
//         message.textContent = "Login bem-sucedido! Redirecionando...";
//       } else {
//         message.style.color = "red";
//         message.textContent = "Credenciais inválidas. Tente novamente.";
//       }
//     }, 1500);
//   });

// // Lógica JavaScript para o Toggle de Senha (RNF08)
// document
//   .getElementById("togglePassword")
//   .addEventListener("click", function () {
//     const passwordInput = document.getElementById("password");
//     const type =
//       passwordInput.getAttribute("type") === "password" ? "text" : "password";
//     passwordInput.setAttribute("type", type);

//     // Alterna a visibilidade dos ícones SVG
//     const eyeOpen = document.getElementById("eyeOpen");
//     const eyeCenter = document.getElementById("eyeCenter");
//     const eyeClosed = document.getElementById("eyeClosed");
//     const slash = document.getElementById("slash");

//     if (type === "text") {
//       // Mostrar Senha: Esconde o olho fechado/slash e mostra o olho aberto
//       eyeOpen.style.display = "block";
//       eyeCenter.style.display = "block";
//       eyeClosed.style.display = "none";
//       slash.style.display = "none";
//     } else {
//       // Esconder Senha: Mostra o olho fechado (opcionalmente, pode mostrar o ícone de 'olho riscado')
//       eyeOpen.style.display = "block"; // Pode-se mudar para 'none' se usar o olho riscado
//       eyeCenter.style.display = "block"; // Pode-se mudar para 'none' se usar o olho riscado
//       eyeClosed.style.display = "none"; // Neste SVG específico, usamos apenas o toggle do 'type' para simular a mudança
//       slash.style.display = "none"; // Se você quiser um ícone de 'olho riscado' completo, você precisaria de um SVG diferente
//     }
//   });

// document
//   .getElementById("loginForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const button = document.getElementById("loginButton");
//     const message = document.getElementById("message");
//     const emailInput = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     // Limpar mensagens e iniciar Loading
//     button.disabled = true;
//     button.textContent = "Verificando...";
//     message.style.color = "#007bff";
//     message.textContent = "";

//     // Simulação de Chamada de API (Async)
//     setTimeout(() => {
//       button.disabled = false;
//       button.textContent = "Entrar";

//       // --- Lógica de Autenticação Simples (RF01 e RNF01) ---

//       // 1. CREDENCIAIS DA SECRETARIA
//       const isSecretaria =
//         (emailInput === "sec1" ||
//           emailInput === "secretaria@escola360.com.br") &&
//         password === "sec123";

//       // 2. CREDENCIAIS DE ADMIN/TESTE
//       const isAdmin =
//         emailInput === "admin@escola.com" && password === "123456";

//       if (isSecretaria) {
//         message.style.color = "green";
//         message.textContent =
//           "Acesso Autorizado (Secretaria)! Redirecionando...";
//         // REDIRECIONAMENTO para a nova página
//         window.location.href = "secretaria.html";
//       } else if (isAdmin) {
//         message.style.color = "green";
//         message.textContent = "Acesso Autorizado (Admin)! Redirecionando...";
//         // Redireciona para um dashboard genérico, ou para a página do Admin
//         window.location.href = "dashboard-admin.html"; // PÁGINA FUTURA
//       } else {
//         message.style.color = "red";
//         message.textContent = "Credenciais inválidas. Tente novamente.";
//       }
//     }, 1500);
//   });

// // Lógica JavaScript para o Toggle de Senha (RNF08)
// document
//   .getElementById("togglePassword")
//   .addEventListener("click", function () {
//     const passwordInput = document.getElementById("password");
//     const type =
//       passwordInput.getAttribute("type") === "password" ? "text" : "password";
//     passwordInput.setAttribute("type", type);

//     // Lógica de ícone de olho (simplificada para HTML puro)
//     const icon = this.querySelector("svg");
//     if (type === "text") {
//       icon.innerHTML =
//         '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'; // Olho Aberto
//     } else {
//       icon.innerHTML =
//         '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 4.79-5.74M9.99 4.24a9.96 9.96 0 0 1 12 11.23"/><line x1="1" y1="1" x2="23" y2="23"/>'; // Olho Fechado (com barra)
//     }
//   });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const button = document.getElementById("loginButton");
    const message = document.getElementById("message");
    const emailInput = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Limpar mensagens e iniciar Loading
    button.disabled = true;
    button.textContent = "Verificando...";
    message.style.color = "#007bff";
    message.textContent = "";

    // Simulação de Chamada de API (Async)
    setTimeout(() => {
      button.disabled = false;
      button.textContent = "Entrar";

      // --- Lógica de Autenticação e Perfis (RF01 e RNF01) ---

      let targetPage = "";

      // 1. CREDENCIAIS DA SECRETARIA
      if (
        (emailInput === "sec1" ||
          emailInput === "secretaria@escola360.com.br") &&
        password === "sec123"
      ) {
        targetPage = "secretaria.html";

        // 2. CREDENCIAIS DO COORDENADOR
      } else if (emailInput === "coord1" && password === "coord123") {
        targetPage = "coordenador.html";

        // 3. CREDENCIAIS DO PROFESSOR
      } else if (emailInput === "prof1" && password === "prof123") {
        targetPage = "professor.html";

        // 4. CREDENCIAIS DO ALUNO
      } else if (emailInput === "aluno1" && password === "aluno123") {
        targetPage = "aluno.html";
      }
      // 5. ADMIN GERAL (MANTIDO)
      else if (emailInput === "admin@escola.com" && password === "123456") {
        targetPage = "dashboard-admin.html";
      }

      // --- REDIRECIONAMENTO ---
      if (targetPage) {
        message.style.color = "green";
        message.textContent = `Acesso Autorizado! Redirecionando para ${targetPage}...`;
        window.location.href = targetPage;
      } else {
        message.style.color = "red";
        message.textContent = "Credenciais inválidas. Tente novamente.";
      }
    }, 1500);
  });

// Lógica JavaScript para o Toggle de Senha (RNF08)
document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // Lógica de ícone de olho (simplificada)
    const icon = this.querySelector("svg");
    if (type === "text") {
      icon.innerHTML =
        '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'; // Olho Aberto
    } else {
      icon.innerHTML =
        '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 4.79-5.74M9.99 4.24a9.96 9.96 0 0 1 12 11.23"/><line x1="1" y1="1" x2="23" y2="23"/>'; // Olho Fechado (simulado)
    }
  });
