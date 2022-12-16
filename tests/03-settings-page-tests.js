import config from '../support/config.json';
import LoginPage from '../page-objects/login-page-objects';
import SettingsPage from '../page-objects/settings-page-objects';
import userData from '../test-data/user-test-data.json';
import settingsData from '../test-data/settings-page-test-data.json';

const loginPage = new LoginPage();
const settingsPage = new SettingsPage();

// Given that the user navigates to the pilot web application on the browser
fixture('Settings Tests')
.page(config.baseUrl)
.beforeEach(async test =>{
    await loginPage.clickProfileAvatar(test);
    // When I enter my email, password and click the submit button
    await loginPage.userLogin(test, userData.testUserEmail, userData.testPassword);
});

test('Check if all the links in the settings panel opens the correct window', async test => {
    await test
    // And I click the Settings Icon
    .click(settingsPage.settingsButton);
    // Then I check if each link opens the correct page
    await settingsPage.clickAndValidateLink(settingsData.part101Link,settingsData.part101Url,test);
    await settingsPage.clickAndValidateLink(settingsData.part102Link,settingsData.part102Url,test);
    await settingsPage.clickAndValidateLink(settingsData.faqLink,settingsData.faqUrl,test);
    await settingsPage.clickAndValidateLink(settingsData.privacyLink,settingsData.privacyUrl,test);
    await settingsPage.clickAndValidateLink(settingsData.aboutAirShareLink,settingsData.aboutAirShareUrl,test);
});

test('Check if user is able to logout', async test => {
    await test
    // And I click the Settings Icon
    .click(settingsPage.settingsButton)
    // And I click the signout button
    .click(settingsPage.signOutButton);
    // Then I should be logged out and see the login form
    await loginPage.clickProfileAvatar(test);
    await test.expect(loginPage.loginForm.exists).ok();
});
