import { Option } from './option';

export class Question {
    id: number;
    desc: string;
    options: Option[];
    answered: number;
    answer : number;
    
    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.desc = data.desc;
        this.options = [];
        data.options.forEach(o => {
            this.options.push(new Option(o));
        });
    }
}