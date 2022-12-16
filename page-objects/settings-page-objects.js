import { elementWithIdorClassName, elementWithBoundClass } from '../support/utils';

export default class SettingsPage {
    constructor(test) {
        this.settingsButton = elementWithIdorClassName('nav-item').withText('Settings');
        this.link = elementWithIdorClassName('link');
        this.signOutButton = elementWithIdorClassName('link signout');
    }

    async clickAndValidateLink(link,linkUrl,test) {
        await test.click(this.link.withText(link));
        const url = await test.eval(() => document.documentURI);
        await test.expect(url).eql(linkUrl);
        await test.closeWindow();
    }
}