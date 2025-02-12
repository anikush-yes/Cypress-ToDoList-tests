describe('First Test', () => {
    it('Opens the website', () => {
      cy.visit('https://todolist.james.am/#/');
      cy.url().should('eq', 'https://todolist.james.am/#/');
    });
  });


  describe('Header Element Test', () => {
    it('Checks if <header> is visible on the page', () => {
      cy.visit('https://todolist.james.am/#/'); 
      cy.get('header').should('be.visible');
    });
  });

  describe('Header Text Test', () => {
    it('Checks if <header> contains "To Do List"', () => {
      cy.visit('https://todolist.james.am/#/'); 
      cy.get('header').should('be.visible').and('contain.text', 'To Do List'); 
    });
  });

  describe('Footer Text Test', () => {
    it('Checks if <footer> contains the text "Double-click to edit a todo"', () => {
      cy.visit('https://todolist.james.am/#/'); // Aplankome svetainę
      cy.get('footer p').should('be.visible').and('contain.text', 'Double-click to edit a todo'); // Patikriname tekstą
    });
  });


  describe('Input Placeholder Test', () => {
    it('Checks if input has the placeholder "What needs to be done?"', () => {
      cy.visit('https://todolist.james.am/#/'); 
      cy.get('input').should('have.attr', 'placeholder', "What need's to be done?"); 
    });
  });

  describe('To-Do List Test', () => {
    it('Adds multiple tasks and checks if the list is not empty', () => {
      cy.visit('https://todolist.james.am/#/'); 
  
      
      cy.get('input.new-todo').type('2 task{enter}');
      cy.get('input.new-todo').type('2 task{enter}');
      cy.get('input.new-todo').type('3 task{enter}');
  
      
      cy.get('.todo-list li') 
        .should('exist') 
        .and('have.length.at.least', 3);
    });
  });