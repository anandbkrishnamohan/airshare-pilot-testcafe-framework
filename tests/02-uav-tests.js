import config from '../support/config.json';
import LoginPage from '../page-objects/login-page-objects';
import UavPage from '../page-objects/uav-page-objects';
import uavTestData from '../test-data/uav-form-test-data.json';
import userData from '../test-data/user-test-data.json';

const loginPage = new LoginPage();
const uavPage = new UavPage();

// Given that the user navigates to the pilot web application on the browser
fixture('UAV Tests').page(config.baseUrl)

test('Check if the user can see the UAV button the navigation and successfully add a UAV to the pilot application', async test => {
    // When I enter my email, password and click the submit button
    await loginPage.clickProfileAvatar(test);
    // When I enter my email, password and click the submit button
    await loginPage.userLogin(test, userData.testUserEmail, userData.testPassword);
    await test
    // And I click the UAV Icon
    .click(uavPage.uavIcon)
    // And click the create UAV button
    .click(uavPage.createUavButton)
    // And I enter the details on the UAM form
    .typeText(uavPage.uavNickNameInput,uavTestData.uavNickName);
    await uavPage.brandSelect(uavTestData.brandCategory, test);
    await uavPage.modelSelect(uavTestData.ModelCategory, test);
    await uavPage.weightSelect(uavTestData.WeightCatergory, test);
    // And I click the save button
    await test.click(uavPage.saveButton);
    // Then I should see that a new UAV created with Delete button
    await test.expect(uavPage.uavsDeleteButton.exists).ok();
});