import config from '../support/config.json';
import LoginPage from '../page-objects/login-page-objects';
import ProfilePage from '../page-objects/profile-page-objects';
import userData from '../test-data/user-test-data.json';

const loginPage = new LoginPage();
const profilePage = new ProfilePage();

// Given that the user navigates to the pilot web application on the browser
fixture('Login Tests').page(config.baseUrl);

test('Check if the user can successfully sign into the pilot web application', async test => {
    await loginPage.clickProfileAvatar(test);
    // When I enter my email, password and click the submit button
    await loginPage.userLogin(test, userData.testUserEmail, userData.testPassword);
    // Then I should be able to login and see my profile panel
    await test.expect(profilePage.profilePanel.exists).ok();
    // And I should see my name and email address
    await profilePage.checkValue(userData.testName, test);
    await profilePage.checkValue(userData.testUserEmail, test);
});
