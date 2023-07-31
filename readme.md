# Solução do Teste para Desenvolvedores

## Introdução

Esta é a proposta de exercícios da SCF BRAZIL, um backend constuído em node com rotas que visam manipular as informações de um JSON.

Foram feitas diversas modificações na estrutura inicial do código para se adequarem a um bom padrão de leitura e para se enquadrar nos requisitos do teste com um mínimo de segurança.

Para fins de manipulação os dados do arquivo env serão disponibilizados para o público.

## Links

- [Website de produção na Azure](http://cosmic-azure.duckdns.org/)
- [Repositório](https://github.com/izaqueIsrael/ScfBrazil)


## Inicialização

Para inciar o programa use o código:

---

npm run dev

---

Ele estará sendo executado na porta 3000 de seu localhost

## Estrutura do código

As soluções do teste 1, 2, 3, 4 estão em userController na pasta controller, enquanto que o middleware de autorização pedido no teste 5 está na pasta middlewares no arquivo auth.js.

Em app.js foram definidas as rotas e na pasta routes estão as rotas em si, encontraremos a rota raiz, a rota vazia e as rotas de usuário.

As rotas do usuário estão em userRouter.js, através dos métodos e das rotas referentes a '/users' ele coordena a função específica listada em userController.

Os tratamentos de erros podem ser encontrados na pasta errors e a chave de admin no arquivo .env.

Se no header estiver a chave adminkey com o valor chave-de-admin você será aprovado pelo middleware de autorização.

Por fim o banco de dados da lição é o fakeData.js como incialmente especificado só que com maior população.

## Postman

A exportação das rotas do postman é o arquivo TESTE.postman_collection na raiz do projeto, importe-o para seu postman e com o servidor iniciado comece a fazer as requisições.

Todas as requisições estão prontas, mas no header das requisições do postman 'Delete User', 'Update User Info' e 'Checar consultas ao Usuário' estão o header com a chave adminkey e value chave-de-admin, portanto já estão devidamente autorizadas, se quiser fazer o teste sem a autorização apenas altere o valor da chave.
