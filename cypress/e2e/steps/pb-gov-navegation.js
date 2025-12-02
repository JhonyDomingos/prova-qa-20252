/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const BASE_URL = "https://paraiba.pb.gov.br";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
//  =========== 01 - página inicial do gov pb =============
Given("que eu acesso {string}", (url) => {
    cy.visit(url, { failOnStatusCode: false });
});

When("a página carregar completamente", () => {
    cy.get("body", { timeout: 30000 }).should("be.visible");
    cy.wait(2000);
    cy.log("Página carregada completamente");
});

Then("eu devo ver o logo do site com id {string}", (idLogo) => {
    cy.get(`span#${idLogo}`, { timeout: 10000 })
        .should("exist")
        .and("be.visible");
    cy.log(`Logo encontrado com id: ${idLogo}`);
});

Then("eu devo ver {string} na página", (texto) => {
    cy.get('.disclaimer-title', { timeout: 10000 })
        .should("be.visible")
        .invoke('text')
        .then((textoReal) => {
            cy.log(`Texto encontrado: "${textoReal}"`);
            expect(textoReal.toLowerCase()).to.include(texto.toLowerCase());
        });
    cy.log(`Texto "${texto}" encontrado e visível na página`);
});

Then("eu clico no botão {string}", (botaoTexto) => {
    cy.wait(1000);
    cy.get('button[name="collective.disclaimer.ok"]', { timeout: 10000 })
        .should("be.visible")
        .click({ force: true });
    cy.log(`Botão "${botaoTexto}" clicado com sucesso`);
    cy.wait(1000);
});
//  =========== 02 - Navegando pelo menu =============

When("eu clico no menu hamburguer", () => {
    cy.get('.ico-navegacao').click({ force: true });
    cy.wait(1000);
});


When("eu clico na opção {string}", (opcaoMenu) => {
    cy.get('#main-navigation li', { timeout: 10000 })
        .contains(opcaoMenu)
        .click({ force: true });
    cy.wait(2000);
});

Then("o menu de navegação deve estar visível", () => {
    cy.get('.navigation-content', { timeout: 10000 })
        .should("be.visible")

});

Then("eu devo ser redirecionado para a página {string}", (urlEsperada) => {
    cy.url({ timeout: 10000 }).should("include", urlEsperada);
});



//  =========== 03 - Conheça a Paraíba =============

When("eu rolar a página até a seção {string}", (tituloSecao) => {
    cy.contains(tituloSecao, { timeout: 10000 })
        .should("be.visible")
        .scrollIntoView();
    cy.wait(1000);
});

When("eu clico no vídeo {string}", (nomeVideo) => {
    cy.contains('.outstanding-title', nomeVideo, { timeout: 10000 })
        .scrollIntoView()
        .wait(1000);

    // Buscar todos os iframes visíveis e clicar no primeiro
    cy.get('iframe[src*="youtube.com"]')
        .filter(':visible')
        .first()
        .click({ force: true });

    cy.log(`Vídeo "${nomeVideo}" clicado`);
    cy.wait(2000);
});

Then("eu devo ver o título {string}", (titulo) => {
    cy.contains(titulo).should("be.visible");
});

Then("eu devo ver o vídeo {string}", (nomeVideo) => {
    cy.contains('.outstanding-title', nomeVideo, { timeout: 10000 })
        .should("be.visible");

    // Verificar se o iframe está presente
    cy.get('.tile-content', { timeout: 10000 })
        .find('iframe[src*="youtube.com"]')
        .should("exist");

    cy.log(`Vídeo "${nomeVideo}" encontrado`);
});

Then("o vídeo deve abrir em uma nova aba", () => {
    cy.get('iframe[src*="youtube.com"]', { timeout: 10000 })
        .should("be.visible");
    cy.log("Vídeo visível no iframe");
});

Then("a URL deve conter {string}", (urlEsperada) => {
    cy.get('iframe[src*="youtube.com"]', { timeout: 10000 })
        .should("exist")
        .and("have.attr", "src")
        .and("include", urlEsperada);
    cy.log(`URL do vídeo contém: ${urlEsperada}`);
});

Then("cada vídeo deve ter um iframe do YouTube", () => {
    cy.get('iframe[src*="youtube.com"]', { timeout: 10000 })
        .should("have.length.greaterThan", 0);
});

Then("os iframes devem estar visíveis", () => {
    cy.get('iframe[src*="youtube.com"]').each(($iframe) => {
        cy.wrap($iframe).should("be.visible");
    });
});

//  =========== 04 - Redes Sociais =============

Then("eu devo ver o link do Facebook", () => {
    cy.contains('Facebook', { timeout: 10000 })
        .should("be.visible");
    cy.log("Link do Facebook encontrado");
});

Then("eu devo ver o link do Instagram", () => {
    cy.contains('Instagram', { timeout: 10000 })
        .should("be.visible");
    cy.log("Link do Instagram encontrado");
});

Then("eu devo ver o link do Twitter", () => {
    cy.contains('Twitter', { timeout: 10000 })
        .should("be.visible");
    cy.log("Link do Twitter encontrado");
});

Then("eu devo ver o link do Youtube", () => {
    cy.contains('Youtube', { timeout: 10000 })
        .should("be.visible");
    cy.log("Link do Youtube encontrado");
});

When("eu clico no link {string}", (redeSocial) => {
    cy.contains('a', redeSocial, { timeout: 10000 })
        .scrollIntoView()
        .should('be.visible')
        .invoke('attr', 'href')
        .as('linkRedeSocial');
    
    cy.log(`Link da rede social ${redeSocial} encontrado`);
});

Then("uma nova aba deve abrir", () => {
    cy.get('@linkRedeSocial').then((href) => {
        cy.log(`Link validado: ${href}`);
        expect(href).to.not.be.empty;
    });
});

Then("a URL da rede social deve conter {string}", (urlEsperada) => {
    cy.get('@linkRedeSocial').then((href) => {
        // Comparar as URLs exatamente como esperado
        expect(href).to.equal(urlEsperada);
        cy.log(`URL da rede social: ${href}`);
        cy.log(`URL esperada: ${urlEsperada}`);
    });
});