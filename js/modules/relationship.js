export class Relationship {
    constructor(name, relation, link=null) {
        this.name = name;
        this.relation = relation;
        this.link = link;
    }

    toString() {
        return `${this.name} + " " + ${this.relation}`
    }
}