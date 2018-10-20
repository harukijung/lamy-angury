
export class Option {
    id: number;
    desc: string;
    
    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.desc = data.desc;
          }
}