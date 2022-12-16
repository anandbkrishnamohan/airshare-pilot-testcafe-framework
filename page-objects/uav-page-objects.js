import { elementWithDataTestID, elementWithDataValue, elementWithIdorClassName } from '../support/utils';

export default class UavPage {
    constructor() {
        this.uavIcon = elementWithDataTestID('argus-pilot-web:nav-bar:uav-link');
        this.createUavButton = elementWithDataTestID('argus-pilot-web:uavs:create-button');
        // UAV form
        this.uavNickNameInput = elementWithDataTestID('argus-pilot-web:uav-detail:name-input');
        this.uavBrandSelect = elementWithDataTestID('argus-pilot-web:uav-detail:brand-select');
        this.uavModelSelect = elementWithDataTestID('argus-pilot-web:uav-detail:model-select');
        this.uavWeightSelect = elementWithDataTestID('argus-pilot-web:uav-detail:weight-select');
        this.uavSerialInput = elementWithDataTestID('argus-pilot-web:uav-detail:serial-input');
        this.saveButton = elementWithDataTestID('argus-pilot-web:uav-detail:save-button');
        this.uavsPanel = elementWithDataTestID('argus-pilot-web:uavs:panel');
        this.uavsDeleteButton = elementWithDataTestID('argus-pilot-web:uav-detail:delete-button');
    }

    async brandSelect(value, test) {
        await test
        .click(this.uavBrandSelect)
        .click(elementWithDataValue(value));
    }
    async modelSelect(value, test) {
        await test
        .click(this.uavModelSelect)
        .click(elementWithDataValue(value));
    }
    async weightSelect(value, test) {
        await test
        .click(this.uavWeightSelect)
        .click(elementWithDataValue(value));
    }
}