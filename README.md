# To-Do List - Saipos CODE CHALLENGE

Criar uma To-Do List utilizando Node.js e Angular. Este projeto não precisa de autenticação para ser utilizado e deverá utilizar um banco de dados relacional.

## Sumário do Projeto

* [Visão Geral](#visao-geral)
* [Front End](#front-end)
* [Back End](#back-end)
* [Relational DB](#relational-db)
* [APIs](#apis)
  * [MailboxLayer](#mailboxlayer)
  * [did_you_mean](#did_you_mean)
  * [cat-facts](#cat-facts)

## Visão Geral
A To-Do List deve incluir as seguintes funcionalidades:

* Incluir nova tarefa
* Listar tarefas pendentes
* Consultar lista de tarefas já concluídas
* Gerar tarefas com [cat-facts](#cat-facts)

Para incluir nova tarefa, será necessário informar a descrição, o nome do responsável pela mesma e o e-mail.

E-mails devem ser validados utilizando [MailboxLayer](#mailboxlayer) - validar registros MX e formato.

Se o e-mail for inválido, utilizar [did_you_mean](#did_you_mean) para sugerir um endereço válido.

Tarefas concluídas irão para a sessão de tarefas realizadas.

Tarefas podem ser colocadas como pendentes DUAS VEZES, porém apenas com a senha de autorização "TrabalheNaSaipos".

## Front End
Angular v~11.2.7

## Back End

## Relational DB

## APIs

### MailboxLayer

### did_you_mean

### cat-facts