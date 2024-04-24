fetch("./dados.json")
    .then(response => response.json())
    .then(users => {
        

        // Itera sobre os usuários
        for (const user in users) {
            const titulo = document.querySelector(".tiuloluis");
            titulo.textContent = user;

            // Itera sobre as propriedades de cada usuário
            for (const propriedade in users[user]) {
                const para = document.createElement('p');
                para.innerText = `${propriedade}: ${propriedade}`;
                document.querySelector(".pusers").appendChild(para);
            }
        }
    });
