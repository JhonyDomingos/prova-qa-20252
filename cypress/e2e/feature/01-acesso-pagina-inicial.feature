# language: pt

Funcionalidade: Acesso à Página Inicial
  Como um cidadão
  Eu quero acessar o site do governo da Paraíba
  Para que eu possa visualizar informações governamentais

  Cenário: Acessar e validar a página inicial
    Dado que eu acesso "https://paraiba.pb.gov.br"
    Quando a página carregar completamente
    Então eu devo ver o logo do site com id "logo-site"
    E eu devo ver "Uso de Cookies" na página
    E eu clico no botão "OK"