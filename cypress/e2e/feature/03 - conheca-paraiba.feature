# language: pt

Funcionalidade: Conheça a Paraíba
  Como um visitante do site
  Eu quero conhecer mais sobre a Paraíba
  Para que eu possa ver vídeos e informações turísticas

  Contexto:
    Dado que eu acesso "https://paraiba.pb.gov.br"
    E a página carregar completamente
    E eu clico no botão "OK"

  Cenário: Visualizar seção Conheça a Paraíba
    Quando eu rolar a página até a seção "CONHEÇA A PARAÍBA"
    Então eu devo ver o título "CONHEÇA A PARAÍBA"
    E eu devo ver o vídeo "Vem para a Paraíba"
    E eu devo ver o vídeo "Oportunidades Paraíba"
    E eu devo ver o vídeo "Pólo Turístico do Cabo Branco"

  Esquema do Cenário: Verificar links dos vídeos do YouTube
    Quando eu rolar a página até a seção "CONHEÇA A PARAÍBA"
    E eu clico no vídeo "<nome_video>"
    Então o vídeo deve abrir em uma nova aba
    E a URL deve conter "youtube.com"

    Exemplos:
      | nome_video                      |
      | Vem para a Paraíba              |
      | Oportunidades Paraíba           |
      | Pólo Turístico do Cabo Branco   |

  Cenário: Verificar iframe do YouTube está presente
    Quando eu rolar a página até a seção "CONHEÇA A PARAÍBA"
    Então cada vídeo deve ter um iframe do YouTube
    E os iframes devem estar visíveis