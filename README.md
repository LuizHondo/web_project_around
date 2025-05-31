**Link da página:**``https://luizhondo.github.io/web_project_around/``
**Around The U.S.**

Uma aplicação web responsiva que exibe informações de perfil, publicações e permite editar os dados do perfil por meio de um popup. O projeto utiliza HTML, CSS e JavaScript para criar uma interface interativa.

📂 **Estrutura do Projeto**

/ (raiz)
├── blocks/              # Estilos CSS organizados por componentes
│   ├── elements.css
│   ├── footer.css
│   ├── header.css
│   ├── page.css
│   ├── popup.css
│   ├── profile.css
├── images/              # Imagens do projeto
├── pages/
│   ├── index.css        # Estilos gerais do site
├── scripts/
│   ├── Card.js          # Classe para representar os cartões de publicações
│   ├── FormValidator.js   # Classe para validar formulários
│   ├── Popup.js         # Classe base para popups
│   ├── PopupWithForm.js # Classe para popups com formulário
│   ├── PopupWithImage.js # Classe para popups com imagem
│   ├── Section.js       # Classe para renderizar listas de elementos
│   ├── UserInfo.js      # Classe para gerenciar informações do usuário
│   ├── index.js         # Interatividade principal (JS) e inicialização das classes
├── vendor/              # Dependências externas
│   ├── fonts/           # Pacotes de fontes
│   ├── fonts.css        # Estilos de fontes
│   ├── normalize.css    # Reset de estilos padrão
├── .gitignore           # Arquivos ignorados pelo Git
├── .prettierignore      # Configuração do Prettier
├── index.html           # Página principal (HTML)
├── README.md            # Documentação do projeto


🚀 **Funcionalidades**

Exibição de Perfil e Publicações:Exibe uma seção de perfil com foto, nome e descrição, além de uma galeria de postagens.

Popup de Edição de Perfil: Permite editar o nome e a descrição do perfil através de um formulário modal.

Design Responsivo: Utiliza media queries para garantir uma boa experiência em dispositivos móveis e desktops.

**🌱 Trabalhando com Branches**

O projeto utiliza a branch develop para desenvolvimento e a branch main para a versão estável.

Para mudar para a branch main, use:

git checkout main
Ou:
git switch main

Antes de trocar de branch, confira mudanças pendentes com:

git status

Caso existam mudanças não commitadas, use git stash para salvá-las temporariamente.