# To-Do List - Saipos CODE CHALLENGE

Criar uma To-Do List utilizando Node.js e Angular. Este projeto não precisa de autenticação para ser utilizado e deverá utilizar um banco de dados relacional.

## Sumário do Projeto

* [Visão Geral](#visao-geral)
* [Como Utilizar](#como-utilizar)

## Visão Geral
A To-Do List deve incluir as seguintes funcionalidades:

* Incluir nova tarefa
* Listar tarefas pendentes
* Consultar lista de tarefas já concluídas
* Gerar tarefas com cat-facts

Para incluir nova tarefa, será necessário informar a descrição, o nome do responsável pela mesma e o e-mail.

E-mails devem ser validados utilizando MailboxLayer - validar registros MX e formato.

Se o e-mail for inválido, utilizar did_you_mean (atributo da resposta de MailboxLayer) para sugerir um endereço válido.

Tarefas concluídas irão para a sessão de tarefas realizadas.

Tarefas podem ser colocadas como pendentes DUAS VEZES, porém apenas com a senha de autorização "TrabalheNaSaipos".

## Como Utilizar
Acesse a pasta no terminal que prefira e utilize o comando `npm run start`.