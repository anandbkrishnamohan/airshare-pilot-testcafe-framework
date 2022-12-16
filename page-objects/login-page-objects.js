import { elementWithDataTestID, elementWithIdorClassName } from '../support/utils';

export default class LoginPage {
    constructor() {
        this.profileAvatar = elementWithIdorClassName('profile');
        // login form
        this.loginForm = elementWithDataTestID('argus-pilot-web:signin-form');
        this.emailField = elementWithDataTestID('argus-pilot-web:signin-form:email-input');
        this.passwordField = elementWithDataTestID('argus-pilot-web:signin-form:password-input');
        this.submitButton = elementWithDataTestID('argus-pilot-web:signin-form:submit-button');
    }

    async clickProfileAvatar(test) {
        await test.click(this.profileAvatar);
    }
    async userLogin(test, email, password) {
        await test
        .typeText(this.emailField, email)
        .typeText(this.passwordField, password)
        .click(this.submitButton)
    }
}