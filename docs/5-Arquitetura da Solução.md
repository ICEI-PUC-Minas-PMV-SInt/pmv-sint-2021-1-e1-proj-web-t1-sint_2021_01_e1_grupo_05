# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

A aquitetura do projeto consiste em uma aplicação web utilziando as tecnológias HTML, CSS, JavaScript. Onde os dados são gravados em um LocalStorage no formato JSON. A aplicação foi hospeado na nuvem pela plataforma Heroku.

## Diagrama de componentes

Os componentes que compões a estrutura do CyclePower são apresentados conforme a figura 1.

![Untitled Diagram (1)](https://user-images.githubusercontent.com/20197817/124372055-4229bc00-dc5e-11eb-9d82-f1b3707523b4.png)


<center>Figura 1 - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Qualquer navegador com suporte ao HTML5.
  - **Páginas Web** - CyclePower possui um conjunto de arquivos HTML, CSS e JavaScript que permitem realizar os processos necessário para gerar preços.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Login** - Salva informações do usuário ao logar
     - **Tributos** - registro de valores de impostos e investimentos
     - **Despesas** - registro de Aluguel, Funcionários, seguro e despesas variáveis
     - **Premissas** - registro de premissas
 - **Hospedagem** - Hospedam através da plataforma Heroku.

Inclua um diagrama da solução e descreva os módulos e as tecnologias que fazem parte da solução. Discorra sobre o diagrama.

A imagem a seguir ilustra a o fluxo do usuário em nossa solução. Assim
que o usuário entra na plataforma, ele é apresentado à tela inicial
(Tela 1) onde ele é confrontado com as opões de editar seu perfil ou
então visualizar sua galeria.

Caso ele opte por seguir pelo primeiro caminho (Editar Perfil), ele é
redirecionado para a tela de edição de perfil (Tela 2), onde pode
atualizar seus dados cadastrais. Nessa tela, o usuário também pode
escolher para editar sua foto de perfil. Ao selecionar essa opção, ele é
redirecionado para a Tela 3, onde ele a imagem expandida do perfil do
usuário é mostrado. Ao selecionar a opção para atualizar a imagem, uma
nova janela abre pedindo para o usuário fazer o upload da nova foto.
Assim que o processo termina um pop-up exibe o status para o usuário
(Tela 4) e o usuário é redirecionado para a Tela 2.

Caso o usuário opte seguir pelo segundo caminho (Visualizar Galeria) ele
é redirecionado para a Tela 5 com todas as fotos que o usuário possui. O
usuário pode clicar em um post qualquer para visualizar os detalhes do
post (Tela 6). Nessa tela, ele pode então escolher editar o post, sendo
redirecionado para a Tela 7. Ao editar as informações, o usuário pode
escolher salvar ou deletar o post. Em ambos os casos o status é
notificado para o usuário (Tela 8) e em seguida ele é redirecionado
para a Tela 2.

![Exemplo de UserFlow](img/userflow.jpg)


## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

Foram utilizadas técnologias como HTML para criação das páginas em conjunto ao framework Bootstrap para estilização das páginas. Para coletar e gravar as informações foram usados scripts com linguagem JavaScript integrando ao LocalStorage do navegador. Para desenvolvimento, ferramentas como WebStorm e Visual Studio Code foram utilizadas no desenvolvimento com apoio de plugins especificos para o desenvolvimento web.

Através do comportamento do usuário validado através de scripts, conseguimos enviar informações informando o resultado das suas ações. Como por exemplo, ao realizar o login uma alerta é enviada para o cliente informando que o cadastro do usuário foi efetuado com sucesso:

![image](https://user-images.githubusercontent.com/20197817/124372139-ee6ba280-dc5e-11eb-8ea2-64a4570bdf9b.png)



## Hospedagem

A hospedagem foi realizada através do Heroku utilizando o recurso de deploy automático sempre que houver uma nova atualização na branch MAIN.
