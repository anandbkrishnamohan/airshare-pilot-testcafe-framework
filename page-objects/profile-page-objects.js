import { elementWithDataValue, elementWithIdorClassName } from '../support/utils';

export default class ProfilePage {
    constructor() {
        this.profilePanel = elementWithIdorClassName('profile-panel');
    }

    async checkValue(value, test) {
        await test.expect(elementWithDataValue(value).exists).ok();
    }
}