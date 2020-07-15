import { v4 as uuidv4 } from 'uuid';
import {DECK_STATUS, MAX_ITERATION} from '../utils/constants';

class Deck {
    constructor(name) {
        this.name = name;
        this.id = uuidv4();
        this.records = [];
        this.learnedRecords = [];
        this.iteration = 0;
        this.status = DECK_STATUS.NEW;
    }

    addWord(record) {
        this.records.push(record);
    }

    addLearnedWord(record) {
        this.learnedRecords.push(record);
    }

    removeWord(record) {
        this.records = this.records.filter(item => item !== record);
    }

    incrementIteration() {
        if(this.iteration < MAX_ITERATION) {
            this.iteration++;
        }
    }

}
