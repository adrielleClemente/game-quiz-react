# Diário do Projeto

**Anotações sobre o processo de desenvolvimento do quiz utilizando a biblioteca react.**
[Repositório Fonte](https://github.com/matheusbattisti/quiz_react)


### Documentação
Necessário o npm instalado para começar o projeto.

### Primeira etapa do projeto
**Instalações:**
1. Pacote vite: ``npm creat vite@latest`` 
2. Dar um nome ao projeto;
3. Escolher o framework: *React*;
4. E escolher a linguagem JavaScript.

**Pronto,projeto criado. Agora siga as intruções:**
1. Entrar no diretório criado;
2. Instalar as dependências do packge.json: ``npm i``
3. Por fim: ``npm run dev``

**Primeira etapa das instalações concluída.**

### Segunda Etapa
**Limpeza**

- Gerar o link da fonte *Raleway* do [Google Fonts](https://fonts.google.com/specimen/Raleway?query=rale).
- Dentro do index.html cola-se o link, abaixo do tittle.
- Apagar todo o código default do index.css.
- "Zerar o css(mudar esse termo)" com *. E Insere a fonte.
- No App.jsx, limpar as importações e o código. Deixar apenas o necessário.
- Apagar a pasta assets/
- Limpar código do arquivo App.css.
- Usei a prática de importar a imagem com 'import from'


### Terceira Etapa
**Estruturação**

- Criar pastas data/ e img/ sentro de src/;
- Dentro de data/ fica 2 arquivos .js;
- Dentro de img/ 3 arquivos .svg;
- Criar pasta components. e arquivos .jsx e css .dentro;
- baixar a extensão ES7+ React/Redux/React-Native/JS snippets, para facilitar a criação de componentes;
- No arquivo Welcome.jxs ao digitar rafc e clicar em tab, o bloco do componente é criado.

### Quarta Etapa
**Estilização**

Trabalhando com o index.css:
- Aplicação de altura, largura e cor na página;
- Fonte branca;
- Definido largura da imagem;
- Características do botão;

Trabalhando com o App.css:
- Ajustar a classe App do App.jsx, incluindo do h1;

Trabalhando com o Welcome.css:
- Ajustar o id welcome do Welcome.jxs.

### Quinta Etapa
**Progressão das fases do jogo**

Criando um contexto:
- Criar a pasta contrext e o arquivo;
- import o creatContext, o contexto é onde será o consumo;
- Criar provider, onde será o provedor;


### Sexta Etapa
Mudando o estado da aplicação:
- import userReducer para mudar o estado;
- O evento será clicar no botão(Welcome.jsx);
- Criação da const de estágios do game;
- A mudança dos *state* será baseada numa *switch*,
- A const *quizState* pega o valor, enquanto o *dispatch* altera.

### Sétima Etapa
Exibição da perguntas:

- 

**27/10/2022** - Parei na criação dos componente de GameOver. Tem alguma coisa dando errado.
**28/10/2022** - Resolvi o problema com o arquivo GameOver. Agora o botão da opção não está ficando verde quando acerta.
**29/10/2022** - O problema persiste. Quando igualo a option e quizState.answerSelected com answer dá errado, agora quando diferencio dá certo. Po algum motivo só lê a className "wrong" e não a "correct"



