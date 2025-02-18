describe('Each test includes visiting the website', () => {
  beforeEach(() => {
    cy.visit('https://todolist.james.am/#/');

  });


  describe('Header Element Test', () => {
    it('Checks if <header> is visible on the page', () => {
      cy.get('header').should('be.visible');
    });
  });


  describe('Header Text Test', () => {
    it('Checks if <header> contains "To Do List"', () => {
      cy.get('header h1').should('be.visible').and('have.text', 'To Do List');
    });
  });


  describe('Create new to do Test', () => {
    it('Creates new to do', () => {
      cy.get('input.new-todo').type('New to do created{enter}');
      cy.contains('ul.todo-list li', 'New to do created').should('be.visible');
    });

  });


  describe('Footer Text Test', () => {
    it('Checks if <footer> contains the text "Double-click to edit a todo"', () => {
      cy.get('footer.info p').should('exist');
      cy.get('footer.info p').should('be.visible').and('have.text', 'Double-click to edit a toodo'); // Patikriname tekstą. //gramatinė klaida"..toodo vietoj "todo"
    });
  });


  describe('Input Placeholder Test', () => {
    it('Checks if input has the placeholder "What needs to be done?"', () => {
      cy.get('input.new-todo').should('have.attr', 'placeholder', "What need's to be done?");
    });
  });


  describe('Add multiple tasks To-Do List Test', () => {
    it('Adds multiple tasks and checks if the list is not empty', () => {


      cy.get('input.new-todo').type('1 task{enter}');
      cy.get('input.new-todo').type('2 task{enter}');
      cy.get('input.new-todo').type('3 task{enter}');


      cy.get('ul.todo-list li')
        .should('exist')
        .and('have.length.at.least', 3);
    });
  });


  describe('Delete-To-Do List task Test', () => {
    it('Delete new to do', () => {
      cy.get('input.new-todo').type('1 task{enter}');
      cy.get('input.new-todo').type('task to be deleted{enter}');

      cy.contains('ul.todo-list li', 'task to be deleted').find('button.destroy').invoke('show');
      cy.contains('ul.todo-list li', 'task to be deleted').find('button.destroy').click();

      cy.contains('ul.todo-list li', 'task to be deleted').should('not.exist');

    });
  });


  describe('Edit To-Do List Item Test', () => {
    it('To do item edit after double click', () => {

      cy.get('input.new-todo').type('1 task{enter}');
      cy.get('input.new-todo').type('2 task{enter}');
      cy.get('input.new-todo').type('3 task{enter}');

      cy.contains('ul.todo-list li', '2 task')
        .dblclick()
        .find('input.edit')
        .clear()
        .type('edited task{enter}');

      cy.contains('ul.todo-list li', 'edited task').should('be.visible');

    });


    Cypress.Commands.add('addToDos', () => {
      cy.visit('https://todolist.james.am/#/');
      cy.get('input.new-todo').type('1 uzduotis{enter}');
      cy.get('input.new-todo').type('trinama uzduotis{enter}');
      cy.get('input.new-todo').type('1 uzduotis{enter}');
      cy.get('input.new-todo').type('trinama uzduotis{enter}');
      cy.get('input.new-todo').type('1 uzduotis{enter}');
      cy.get('input.new-todo').type('trinama uzduotis{enter}');
  });
  
  describe('Edit To-Do List Item Test', () => {
      beforeEach(() => {
          cy.clearLocalStorage();
          cy.clearCookies();
          cy.addToDos();
      });
  
      it('Patikrina, ar užduotys pridėtos', () => {
          cy.get('.todo-list li').should('have.length', 6);
      });
  });
});
});