describe('Покупка аватара', function () {

   it('2e2 покупка аватара', function () {
      cy.visit('https://pokemonbattle.ru/'); // Зайти на сайт

      cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Ввод верного логина
      cy.get('#password').type('USER_PASSWORD'); // Ввод верного пароля
      cy.get('.auth__button').click(); // Нажать войти
      cy.get('.header__container > .header__id').click(); // Нажать на header_id
      cy.get('[href="/shop"]').click(); // Нажать на "Смена аватара"
      cy.get('.available > button').first().click({ force: true }); // кликаем Купить у первого доступного аватара
      cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); // Ввод номера карты
      cy.get(':nth-child(1) > .pay_base-input-v2').type('1230'); // Ввод срок действия карты
      cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввод CVV карты
      
      cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Archer Man'); // Ввод имя владельца действия карты
      cy.get('.pay-btn').click(); // Нажать кнопку "Оплатить"
      cy.get('#cardnumber').type('56456'); // Ввод кода подтверждения СМС
      cy.get('.payment__submit-button').click(); // Нажать кнопку Отправить
      cy.contains('Покупка прошла успешно').should('be.visible'); // Надпись "Покупка прошла успешно"
     
     })

})