# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

1.0 Tela de Login

Tela de login foi criada com o objeto de registrar os logins efetuados na aplicação. Para isto é utilizado uma página HTML estililzada com bootstrap (index.html e index.css). Para registrar e controlar o login, é realizada a validação e gravação de um JSON do usuário via JavaScript para LocalStorage (controleAcesso.js).

2.0 Tela de Menu

Tela de menu criada com o objetivo de navegação pela aplicação. Para isto é utilizado uma página HTML com bootstrap (menu.html e menu.css). Está página HTML permite que a navegação para os menus de cadastro sejam efetuados.

3.0 Tela de Premissas

Tela de premissas criada com o objetivo de gravar os valores de "Potencial de horas por mês" e "Horas mensais estimadas". Para isto é utilizado uma página HTML estililzada com bootstrap (premissas.html e premissas.css). Ao gravar as informações um script JavaScript permite que os valores de "Potencial de horas por mês" seja calcualdo a partir de "Número de Bikes" e "Horas por Dia" enquanto "Horas mensais estimadas" é o resultado do cálculo anterior compondo a "Taxa de Ocupação. Todas estas informações são gravadas em um JSON via LocalStorage (calcularPremissas.js).

4.0 Tela de despesas fixas e variáveis

Tela de despesas fixas e variáveis com a proposta de gravar os valores de "Aluguel", "Funcionários", "Seguro" e valor total de despesas variáveis. Para isto é utilizado uma página HTML estililzada com bootstrap (despesas.html e despesas.css). Através de um script JavaScript estas informações são gravadas em formato JSON via LocalStorage (calcularPremissas.js).

5.0 Tela de tributos

Tela de tributos com o objetivo de gravar os valores de Impostos e Depreciação Total. Para isto é utilizado uma página HTML estililzada com bootstrap (tributos.html e tributos.css). Através de um script JavaScript estas informações são gravadas em formado JSON via LocalStorage (cadastrarNovoTributo.js).

6.0 Tela de geração de preços

Tela de geração de preços o objetivo de calcular a margem líquida e o preço de venda das bicicletas. Para isto é utilizado uma página HTML estililzada com bootstrap (geracao_de_precos.html e gerar_preco.css). Através de um script todos os valores cadastrados anteriormente são carregados nesta página. Em seguida, um script para calcular os valores de "Margem Líquida" e "Preço da Venda" é executado para gravar os valores em formato JSON via LocalStorage (gerarPreco.js).
