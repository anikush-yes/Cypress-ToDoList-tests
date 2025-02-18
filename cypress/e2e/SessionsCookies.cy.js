//elementu skaiciavimo susiskaiciuoti kiek mes turim li saraso elementu

//Svetaine prisijungimas ir registracija
//1.testuoti pacia registracija. Ar galima uzsiregistruoti?
//2. pati prisijungima. Ar galima prisijungti?
//3. Integracinis testas: Ar uzsiregistravus galima prisijungti?
//4. musu rasomas testas tures buti prisijunges prie svetaines, atsiminti kad jis yra prisijunges
//5. Kaip tas pats funkcionalumas yra atvaizduojamas prisijungusiam ir neprisijungusiam vartotojui

//Prisijungimo atsiminmas(sesijos isaugojimas)
//Sesija - serverio atminties vieta, kur svetainė gali išsaugoti informaciją
//Cookie - vieta vartotojo kompiuteryje, kur svetainė gali išsaugoti informaciją

//Kokią info saugau sesijoje? jautrūs duomenys - slaptažodis, prisijungimo vardas, prisijungimo tokenas, asmens informacija...
// Kokią info saugau cookie? viską, išskyrūs jautrią informaciją

//abiem galima nustatyti laiką, kiek jie egzistuoja

describe('Check if website allows creating a cookie', () => {
    beforeEach(() => {
        cy.visit('https://todolist.james.am/#/');
    });

    it('Should allow creating and verifying a cookie', () => {
        // Set a cookie
        cy.setCookie('testCookie', 'cookieValue');

        // Verify the cookie is set
        cy.getCookie('testCookie').should('exist').and('have.property', 'value', 'cookieValue');
    });

    //Ar informacija issisaugo po svetaines perkrovimo?
    //1. Uzeiti i svataine
    //2. Sukurti informacini cookie (JSON masyva tekstiniame formate, kazkoks skaicius, tekstas ir t.t)
    //3. Sukurti kelis cookies
    //4. Perkrauti svataine
    //5. Patikrinti ar cookie isliko po perkrovimo:


    it('Ar informacija issisaugo po svetaines perkrovimo?', () => {
        cy.setCookie('test', '1');
        cy.setCookie('test1', 'test1');
        cy.setCookie('test2', 'test1');

        cy.reload();
        cy.getCookie('test').should('exist');
        cy.getCookie('test1').should('exist');
        cy.getCookie('test2').should('exist');

        // cy.clearCookie('test');
        cy.clearAllCookies();
    });




    beforeEach(() => {
        cy.visit('https://todolist.james.am/#/');
        cy.get('input.new-todo').type('1 uzduotis{enter}');
    });
    
    it('Testas su sesija', () => {
        cy.get('.todo-list').should('contain', '1 uzduotis');
    });
    
    it('Testas be sesijos', () => {
        cy.clearLocalStorage(); // Jei užduotys saugomos localStorage
        cy.reload(); // Perkrauna puslapį, kad išvalytų DOM būseną
        cy.get('.todo-list').should('not.contain', '1 uzduotis');
    });
});