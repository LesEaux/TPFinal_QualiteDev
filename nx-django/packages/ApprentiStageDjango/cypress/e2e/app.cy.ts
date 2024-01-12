import { getGreeting } from '../support/app.po';

describe('Connexion', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/');
    cy.get(':nth-child(3) > .nav-link').click({ force: true });
    cy.get('#id_username').type('etudiant123', { force: true });
    cy.get('#id_password').type('etudiantpassword', { force: true });
    cy.get('#submit').click({ force: true });
  })
})

describe('Création d\'une offre', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/');
    cy.get(':nth-child(2) > .nav-link').click({ force: true });
    cy.get('#form-offre').within(() => {

    });
  
    cy.get('#id_titre').type('Offre développement web', { force: true })
    cy.get('#id_mailRh').type('exemple@mail.com', { force: true })
    cy.get('#id_duree').type('3 mois', { force: true })
    cy.get('#id_description').type('Description de l\'offre', { force: true })
    cy.get('#id_competences').type('Compétences requises', { force: true })
    cy.get('#id_entreprise').select('Entreprise XYZ - 456 Rue des Entreprises - 12345 - Ville Entreprise', { force: true })
    cy.get('#id_theme').select('Développement Web', { force: true })
    cy.get('#form-offre > [type="submit"]').click({ force: true })
    
    cy.get(':nth-child(3) > .nav-link').click({ force: true });
    cy.get('#id_username').type('leo', { force: true });
    cy.get('#id_password').type('leo', { force: true });
    cy.get('#submit').click({ force: true });
  })
})