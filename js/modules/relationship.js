let id=0

export class Relationship {
    constructor(name, relation, link=null) {
        this.id = id++
        this.name = name
        this.relation = relation
        this.link = link
    }

    toString() {
        return `${this.name} + " " + ${this.relation}`
    }
}