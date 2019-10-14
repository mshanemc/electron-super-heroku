import LightningElementWithSLDS from '../../../lib/lightningElementWithSLDS';
import { api } from 'lwc';

export default class Stage extends LightningElementWithSLDS {
    @api currentStage;
}
