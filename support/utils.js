import { Selector as selector } from 'testcafe';

const elementWithDataTestID = testId => selector(`[data-testid="${testId}"]`);
const elementWithDataValue = testId => selector(`[data-value="${testId}"]`);

const elementWithIdorClassName = selector(value => document.getElementById(value) || document.getElementsByClassName(value));

export {
    elementWithDataTestID,
    elementWithDataValue,
    elementWithIdorClassName,
}