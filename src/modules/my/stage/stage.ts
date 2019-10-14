import { api, LightningElement } from 'lwc';

export default class Stage extends LightningElement {
    @api currentStage;

    stages = [
        {
            name: 'Model',
            complete: true
        },
        {
            name: 'Trim',
            complete: true
        },
        {
            name: 'Battery',
            complete: true
        },
        {
            name: 'Accessories',
            active: true
        },
        {
            name: 'Payment',
            future: true
        }
    ];
}
