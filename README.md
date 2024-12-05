# To-Do List com Drag-and-Drop - front end

Este é um projeto de **To-Do List** com funcionalidades de **drag-and-drop** para reordenar tarefas. A aplicação utiliza **Axios** para requisições HTTP, **Styled Components** para estilização e **Toastify** para exibir notificações de sucesso e erro. O projeto também aplica boas práticas de **organização de código** e **componentização**.

## Funcionalidades

- **Adicionar tarefas**: Crie tarefas com nome e prioridade (Baixa, Média, Alta).
- **Reordenação via drag-and-drop**: Arraste e solte as tarefas para reordená-las de acordo com a prioridade.
- **Exibição de notificações**: Toastify é usado para fornecer feedback visual para ações como adicionar e reordenar tarefas.
- **API Backend**: O frontend se comunica com uma API backend (Node.js + Prisma) para manipulação de tarefas, utilizando **Axios** para requisições HTTP.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface.
- **Axios**: Biblioteca para requisições HTTP.
- **Styled Components**: Biblioteca para estilização de componentes.
- **React Toastify**: Biblioteca para mostrar notificações.
- **HelloPangea**: Funcionalidade para reordenar as tarefas.

## Estrutura do Projeto

A estrutura do projeto foi organizada de forma modular para garantir escalabilidade e manutenibilidade.

## Instruções para rodar o projeto

``` bash
git clone https://github.com/AlissonDevPort/DragnDropTodoTestFront
npm install
npm run dev
```