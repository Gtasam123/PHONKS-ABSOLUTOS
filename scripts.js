document.getElementById('alto-contraste').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});

document.getElementById('zoom-in').addEventListener('click', function() {
    document.body.style.fontSize = (parseInt(window.getComputedStyle(document.body).fontSize) + 2) + 'px';
});

document.getElementById('zoom-out').addEventListener('click', function() {
    document.body.style.fontSize = (parseInt(window.getComputedStyle(document.body).fontSize) - 2) + 'px';
});

document.getElementById('toggle-menu').addEventListener('click', function() {
    document.getElementById('menu-lateral').classList.toggle('open');
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('menu-lateral').classList.remove('open');
});

document.getElementById('save-comment').addEventListener('click', function() {
    const commentBox = document.getElementById('comment-box');
    const commentsContainer = document.getElementById('comments-container');
    const commentText = commentBox.value;

    if (commentText.trim() !== "") {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';

        const commentTextElement = document.createElement('span');
        commentTextElement.textContent = commentText;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-comment';
        deleteButton.textContent = 'Deletar';
        deleteButton.addEventListener('click', function() {
            commentsContainer.removeChild(commentElement);
        });

        commentElement.appendChild(commentTextElement);
        commentElement.appendChild(deleteButton);

        commentsContainer.appendChild(commentElement);
        commentBox.value = "";
    }
});