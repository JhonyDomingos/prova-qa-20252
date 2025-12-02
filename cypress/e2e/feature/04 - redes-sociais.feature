            # language: pt

            Funcionalidade: Redes Sociais
            Como um visitante do site
            Eu quero acessar as redes sociais do governo
            Para que eu possa acompanhar as atualizações

            Contexto:
            Dado que eu acesso "https://paraiba.pb.gov.br"
            E a página carregar completamente
            E eu clico no botão "OK"

            Cenário: Visualizar seção de redes sociais
            Quando eu rolar a página até a seção "Siga-nos nas redes sociais"
            Então eu devo ver o título "Siga-nos nas redes sociais"
            E eu devo ver o link do Facebook
            E eu devo ver o link do Instagram
            E eu devo ver o link do Twitter
            E eu devo ver o link do Youtube

            Esquema do Cenário: Verificar links das redes sociais
            Quando eu rolar a página até a seção "Siga-nos nas redes sociais"
            E eu clico no link "<rede_social>"
            Então uma nova aba deve abrir
            E a URL da rede social deve conter "<url_esperada>"

            Exemplos:
            | rede_social | url_esperada                               |
            | Facebook    | https://www.facebook.com/GovernoParaiba    |
            | Instagram   | https://www.instagram.com/govparaiba       |
            | Twitter     | https://www.twitter.com/govparaiba         |
            | Youtube     | https://www.youtube.com/@govparaibadigital |