describe('Оформление заказа на huntingpony', function () {
    
    it('Покупка сертификатов', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="7"] > .header__collections-controls > .header__collections-link').click();
        cy.get('.product-preview__img-1').click();
        cy.get('.add-cart-counter__btn').click();
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.contains('В корзине 2 шт Перейти');
        cy.get('.header__cart > .icon').click();
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа')
        })
     })