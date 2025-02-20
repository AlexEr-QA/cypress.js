import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as result_page from "../locators/result_page.json"
import * as recovery_page from "../locators/recovery_password_page.json"

describe('Проверка авторизации', function () {

        beforeEach('Начало теста', function () {
         cy.visit('/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
           });

        afterEach('Конец теста', function () {
         cy.get(result_page.close).should('be.visible'); // Есть крестик и он виден для пользователя
           });



   it('Верный логин и верный пароль', function () {

        cy.get(main_page.email).type(data.login); // Ввод верного логина
        cy.get(main_page.password).type(data.password); // Ввод верного пароля
        cy.get(main_page.login_button).click(); // Нажать войти

        cy.get(result_page.title).contains('Авторизация прошла успешно'); // Вижу текст после авторизации
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю

        cy.wait(500);

     })

   it('Проверка восстановления пароля', function () {

        cy.get(main_page.fogot_pass_btn).click(); // Нажать "Забыли пароль?"

        cy.get(recovery_page.email).type(data.login); // Ввод почты для восстановления пароля

        cy.get(recovery_page.send_button).click(); // Нажать "Отправить код"

        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); // Проверяю текст на совпадение
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю

        cy.wait(500);

     })

it('Верный логин и неверный пароль', function () {

        cy.get(main_page.email).type(data.login); // Ввод верного логина
        cy.get(main_page.password).type('iLoveqastudio7'); // Ввод неверного пароля
        cy.get(main_page.login_button).click(); // Нажать войти

        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Вижу текст после авторизации
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю

        cy.wait(500);

     })

it('Неверный логин и верный пароль', function () {

        cy.get(main_page.email).type('alex@dolnikov.ru'); // Ввод неверного логина
        cy.get(main_page.password).type('data.password'); // Ввод верного пароля
        cy.get(main_page.login_button).click(); // Нажать войти

        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Вижу текст после авторизации
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю

        cy.wait(500);

     })

it('Проверка, на валидацию инпута "логин"', function () {

        cy.get(main_page.email).type('germandolnikov.ru'); // Ввод логина без @
        cy.get(main_page.password).type('data.password'); // Ввод верного пароля
        cy.get(main_page.login_button).click(); // Нажать войти

        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // Вижу текст после авторизации
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю

        cy.wait(500);

     })

it('Проверка на приведение к строчным буквам в логине', function () {

        cy.get(main_page.email).type('GerMan@Dolnikov.ru'); // Ввод логина c прописными буквами
        cy.get(main_page.password).type('data.password'); // Ввод верного пароля
        cy.get(main_page.login_button).click(); // Нажать войти

        cy.get(result_page.title).contains('Авторизация прошла успешно'); // Вижу текст после авторизации
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю

        cy.wait(500);

     })


})
