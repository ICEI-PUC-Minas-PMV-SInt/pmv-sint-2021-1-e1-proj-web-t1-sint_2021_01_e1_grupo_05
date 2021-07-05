# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

|Caso de Teste|Validação de Login  |
|--|--|
|Requisitos Associados| Tela de login e funcionalidade de armazenamento dos dados na localstorage previamente implementada.|
|Objetivo do Teste| Autenticar corretamente os diversos usuários cadastrados para acessar a solução.
|Passos|1) Preencher usuário e senha e efetuar primeiro login para cadastro 2)Acessar novamente preenchendo corretamente os dados com usuário e senha previamente cadastrados. 3) Preencher o campo de usuário informando um novo usuário para cadastro.
|Critérios de Êxito|Os usuários precisam ser cadastrados e seus dados de login e senha salvos no local storage, novos usuários precisam ser cadastrados no primeiro login, o usuário e senha deve ser consistido de maneira que uma senha incorreta inviabilize o login do usuário

|Caso de Teste|Inclusão de valores nas telas  |
|--|--|
|Requisitos Associados| Telas de cadastros previamente criadas com a mecânica de salvar dados utilizando a local storage previamente implementada.|
|Objetivo do Teste| Incluir com sucesso valores que participam do cálculo nas diferentes telas do sistema.
|Passos|1) Acessar as diferentes telas e preencher os campos cadastrais de valores.
|Critérios de Êxito|Os valores precisam ser cadastrados e seus valores devem ser armazenados na local storage e cada tela deve ter uma chave específica.


|Caso de Teste|Cálculo de Premissas|
|--|--|
|Requisitos Associados| Tela de cadastro de premissas |
|Objetivo do Teste| Calcular o preço do potencial de horas por mês e horas mensais estimadas.
|Passos|1) Informe o valor "Número de Bikes" e "Horas por Dia" 2) Em seguida o resultado de Potencial de horas por mês deve ser calculado conforme: Número de bikes * horas por dia + 30 3) Informe o valor para Taxa de Ocupação 4) O valor "Horas Mensais estimadas" deve ser calculado conforme: Resultado de Potencial de horas por mês * (taxa de ocupação * 0.01).
|Critérios de Êxito|Informar os valores para cálculo.

|Caso de Teste|Geração do Preço final |
|--|--|
|Requisitos Associados| Tela de geração de preços previamente criada e com a mecânica de buscar os valores associados ao cálculo da localstorage.|
|Objetivo do Teste| Calcular o preço da hora de uso final considerando os todos os parâmetros previamente cadastrados.
|Passos|1) Cadastrar previamente os valores nas demais telas do sistema 2) Acessar a tela de "Geração de Preços" 3)Preencher o valor de margem líquida e execuar o cálculo final.
|Critérios de Êxito|O valor final deve ser calculado de acordo com os parâmetros passados e respeitando as premissas da regra de cálculo estipulada.
