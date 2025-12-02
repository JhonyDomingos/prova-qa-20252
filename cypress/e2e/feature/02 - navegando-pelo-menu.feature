            # language: pt

            Funcionalidade: Navegação pelo Menu Principal
            Como um cidadão
            Eu quero navegar pelo menu do site
            Para que eu possa acessar diferentes seções do portal

            Contexto:
            Dado que eu acesso "https://paraiba.pb.gov.br"
            E a página carregar completamente
            E eu clico no botão "OK"

            Cenário: Abrir o menu hamburguer
            Quando eu clico no menu hamburguer
            Então o menu de navegação deve estar visível

            Esquema do Cenário: Navegar pelas opções do menu
            Quando eu clico no menu hamburguer
            E eu clico na opção "<opcao_menu>"
            Então eu devo ser redirecionado para a página "<url_esperada>"

            Exemplos:
            | opcao_menu   | url_esperada  |
            | Governadoria | /governadoria |
            | Notícias     | /noticias     |
            | Contatos     | /contatos     |
            | Fake Não     | /fakenao      |