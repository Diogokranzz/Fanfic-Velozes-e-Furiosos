// Adiciona evento ao formulário de login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validação simples (apenas para demonstração)
    if (username === "admin" && password === "admin") {
        window.location.href = "welcome.html"; // Redireciona para a página de boas-vindas
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos. Tente novamente.";
    }
});

// Funcionalidade de comentários
document.getElementById('submitComment')?.addEventListener('click', function() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim(); // Remove espaços em branco

    if (commentText) {
        const commentList = document.getElementById('commentList');

        // Cria um novo elemento de comentário
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;

        // Cria o botão de excluir
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', function() {
            // Confirmação antes de excluir
            if (confirm('Você tem certeza que deseja excluir este comentário?')) {
                commentList.removeChild(newComment);
            }
        });

        // Adiciona o botão de excluir ao novo comentário
        newComment.appendChild(deleteButton);
        // Adiciona o novo comentário à lista
        commentList.appendChild(newComment);
        // Limpa o campo de entrada
        commentInput.value = '';
    } else {
        alert('Por favor, escreva um comentário antes de enviar!');
    }
});

// Função de logout
function logout() {
    window.location.href = 'index.html'; // Redireciona para a página de login
}
