import LightningElementWithSLDS from '../../../lib/lightningElementWithSLDS';
import { track } from 'lwc';

export default class Toggle extends LightningElementWithSLDS {
    @track selected = false;

    flip() {
        this.selected = !this.selected;
    }
}
