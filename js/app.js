import { createApp, computed } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import * as bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { Relationship } from "./modules/relationship.js";

let id = 0;
let editTarget = null;
let cachedRelationships = [];

const app = createApp({
    // data: all the data for the app
    data: function () {
        return {
            // newItem: {
            //     name: '',
            //     qty: 1,
            //     category: 'need',
            //     purchased: false,
            // },

            newPerson: {
                personID: id,
                isAlive: false,
                country: '',
                name: '',
                dateOfBirth: '',
                placeOfBirth: '',
                dateOfDeath: '',
                placeOfDeath: '',
                placeOfBurial: '',
                relationships: [],
                defaultPlace: '',
            },
            newRelationship: {
                name: '',
                relation: '',
                link: null,
            },
            // shoppingList: [
            //     { name: 'Hammer', qty: 1, purchased: true, category: 'need' },
            //     { name: 'Nails', qty: 10, purchased: false, category: 'need' },
            //     { name: 'Sliding Compound Miter Saw', qty: 1, purchased: false, category: 'want' },
            // ],
            people: [
                {
                    personID: -1, isAlive: true, country: 'United States', name: "Kyle Leverence", dateOfBirth: "11/24/2004",
                    placeOfBirth: 'Waukesha', dateOfDeath: null, placeOfDeath: '', placeOfBurial: '', relationships: [
                        new Relationship('Mark Leverence', 'Father'),
                        new Relationship('Sarah Leverence', 'Mother'),
                        new Relationship('Emma Leverence', 'Sister'),
                        new Relationship('James Leverence', 'Brother'),
                        new Relationship('Olivia Leverence', 'Sister'),
                        new Relationship('John Leverence', 'Grandfather'),
                        new Relationship('Mary Leverence', 'Grandmother'),
                        new Relationship('Robert Smith', 'Grandfather'),
                        new Relationship('Linda Smith', 'Grandmother')
                    ],
                    defaultPlace: "Ohio",
                },
                {
                    personID: -2, isAlive: true, country: 'United States', name: "Mark Leverence", dateOfBirth: "03/15/1975",
                    placeOfBirth: 'Milwaukee', dateOfDeath: null, placeOfDeath: '', placeOfBurial: '', relationships: [
                        new Relationship('Kyle Leverence', 'Son'),
                        new Relationship('Emma Leverence', 'Daughter'),
                        new Relationship('James Leverence', 'Son'),
                        new Relationship('Olivia Leverence', 'Daughter'),
                        new Relationship('Sarah Leverence', 'Spouse'),
                        new Relationship('John Leverence', 'Father'),
                        new Relationship('Mary Leverence', 'Mother')
                    ],
                    defaultPlace: "Ohio",
                },
                {
                    personID: -3, isAlive: true, country: 'United States', name: "Sarah Leverence", dateOfBirth: "07/22/1978",
                    placeOfBirth: 'Madison', dateOfDeath: null, placeOfDeath: '', placeOfBurial: '', relationships: [
                        new Relationship('Kyle Leverence', 'Son'),
                        new Relationship('Emma Leverence', 'Daughter'),
                        new Relationship('James Leverence', 'Son'),
                        new Relationship('Olivia Leverence', 'Daughter'),
                        new Relationship('Mark Leverence', 'Spouse'),
                        new Relationship('Robert Smith', 'Father'),
                        new Relationship('Linda Smith', 'Mother')
                    ],
                    defaultPlace: "Ohio",
                },
                {
                    personID: -4, isAlive: false, country: 'United States', name: "John Leverence", dateOfBirth: "05/08/1948",
                    placeOfBirth: 'Chicago', dateOfDeath: "09/12/2019", placeOfDeath: 'Cleveland', placeOfBurial: 'Lake View Cemetery', relationships: [
                        new Relationship('Mark Leverence', 'Son'),
                        new Relationship('Mary Leverence', 'Spouse'),
                        new Relationship('Kyle Leverence', 'Grandson'),
                        new Relationship('Emma Leverence', 'Granddaughter'),
                        new Relationship('James Leverence', 'Grandson'),
                        new Relationship('Olivia Leverence', 'Granddaughter')
                    ],
                    defaultPlace: "Ohio",
                },
                {
                    personID: -5, isAlive: true, country: 'United States', name: "Mary Leverence", dateOfBirth: "11/03/1950",
                    placeOfBirth: 'Detroit', dateOfDeath: null, placeOfDeath: '', placeOfBurial: '', relationships: [
                        new Relationship('Mark Leverence', 'Son'),
                        new Relationship('John Leverence', 'Spouse'),
                        new Relationship('Kyle Leverence', 'Grandson'),
                        new Relationship('Emma Leverence', 'Granddaughter'),
                        new Relationship('James Leverence', 'Grandson'),
                        new Relationship('Olivia Leverence', 'Granddaughter')
                    ],
                    defaultPlace: "Ohio",
                },
                {
                    personID: -6, isAlive: false, country: 'United States', name: "Robert Smith", dateOfBirth: "02/19/1945",
                    placeOfBirth: 'Green Bay', dateOfDeath: "04/30/2015", placeOfDeath: 'Madison', placeOfBurial: 'Forest Hill Cemetery', relationships: [
                        new Relationship('Sarah Leverence', 'Daughter'),
                        new Relationship('Linda Smith', 'Spouse'),
                        new Relationship('Kyle Leverence', 'Grandson'),
                        new Relationship('Emma Leverence', 'Granddaughter'),
                        new Relationship('James Leverence', 'Grandson'),
                        new Relationship('Olivia Leverence', 'Granddaughter')
                    ],
                    defaultPlace: "Wisconsin",
                },
                {
                    personID: -7, isAlive: true, country: 'United States', name: "Linda Smith", dateOfBirth: "08/14/1947",
                    placeOfBirth: 'Appleton', dateOfDeath: null, placeOfDeath: '', placeOfBurial: '', relationships: [
                        new Relationship('Sarah Leverence', 'Daughter'),
                        new Relationship('Robert Smith', 'Spouse'),
                        new Relationship('Kyle Leverence', 'Grandson'),
                        new Relationship('Emma Leverence', 'Granddaughter'),
                        new Relationship('James Leverence', 'Grandson'),
                        new Relationship('Olivia Leverence', 'Granddaughter')
                    ],
                    defaultPlace: "Wisconsin",
                },
                {
                    personID: -8, isAlive: true, country: 'United States', name: "Emma Leverence", dateOfBirth: "06/09/2007",
                    placeOfBirth: 'Columbus', dateOfDeath: null, placeOfDeath: '', placeOfBurial: '', relationships: [
                        new Relationship('Mark Leverence', 'Father'),
                        new Relationship('Sarah Leverence', 'Mother'),
                        new Relationship('Kyle Leverence', 'Brother'),
                        new Relationship('James Leverence', 'Brother'),
                        new Relationship('Olivia Leverence', 'Sister'),
                        new Relationship('John Leverence', 'Grandfather'),
                        new Relationship('Mary Leverence', 'Grandmother'),
                        new Relationship('Robert Smith', 'Grandfather'),
                        new Relationship('Linda Smith', 'Grandmother')
                    ],
                    defaultPlace: "Ohio",
                },
                {
                    personID: -9, isAlive: true, country: 'United States', name: "James Leverence", dateOfBirth: "01/17/2010",
                    placeOfBirth: 'Columbus', dateOfDeath: null, placeOfDeath: '', placeOfBurial: '', relationships: [
                        new Relationship('Mark Leverence', 'Father'),
                        new Relationship('Sarah Leverence', 'Mother'),
                        new Relationship('Kyle Leverence', 'Brother'),
                        new Relationship('Emma Leverence', 'Sister'),
                        new Relationship('Olivia Leverence', 'Sister'),
                        new Relationship('John Leverence', 'Grandfather'),
                        new Relationship('Mary Leverence', 'Grandmother'),
                        new Relationship('Robert Smith', 'Grandfather'),
                        new Relationship('Linda Smith', 'Grandmother')
                    ],
                    defaultPlace: "Ohio",
                },
                {
                    personID: -10, isAlive: true, country: 'United States', name: "Olivia Leverence", dateOfBirth: "04/03/2012",
                    placeOfBirth: 'Columbus', dateOfDeath: null, placeOfDeath: '', placeOfBurial: '', relationships: [
                        new Relationship('Mark Leverence', 'Father'),
                        new Relationship('Sarah Leverence', 'Mother'),
                        new Relationship('Kyle Leverence', 'Brother'),
                        new Relationship('Emma Leverence', 'Sister'),
                        new Relationship('James Leverence', 'Brother'),
                        new Relationship('John Leverence', 'Grandfather'),
                        new Relationship('Mary Leverence', 'Grandmother'),
                        new Relationship('Robert Smith', 'Grandfather'),
                        new Relationship('Linda Smith', 'Grandmother')
                    ],
                    defaultPlace: "Ohio",
                }
            ],
        };
    },

    // methods: usually "events" triggered by v-on:
    methods: {

        //add and edit function 
        addPerson: function (e) {
            if (this.checkForm(e.target)) {
                if (editTarget == null) {
                    newPerson.defaultPlace = this.newPerson.placeOfBirth || this.newPerson.placeOfDeath ||
                        this.newPerson.placeOfBurial || '';
                    this.people.push(this.newPerson);
                    id++;
                } else {
                    this.people[editTarget] = this.newPerson;
                }


                e.target.classList.remove('was-validated');
                this.clearForm();

                $('#personModal').modal('hide');
            }
        },

        addRelationship: function () {
            this.newPerson.relationships.push(new Relationship(this.newRelationship.name, this.newRelationship.relation))

            //clearing form fields
            this.newRelationship = {
                name: '',
                relation: '',
                link: null,
            }
        },

        editPerson: function (personID) {
            const temp = this.people.find(p => personID == p.personID)
            editTarget = this.people.indexOf(temp);
            cachedRelationships = temp.relationships

            this.populateNewPerson(temp)
        },

        populateNewPerson: function (person) {
            this.newPerson = {
                personID: person.personID,
                isAlive: person.isAlive,
                country: person.country,
                name: person.name,
                dateOfBirth: person.dateOfBirth,
                placeOfBirth: person.placeOfBirth,
                dateOfDeath: person.dateOfDeath,
                placeOfDeath: person.placeOfDeath,
                placeOfBurial: person.placeOfBurial,
                relationships: person.relationships,
                defaultPlace: person.defaultPlace,
            }
        },

        deletePerson: function () {
            if (editTarget != null) {
                this.people.splice(editTarget, 1);
                $('#personModal').modal('hide');
            }
        },

        deleteRelationship: function (relationship) {
            this.newPerson.relationships = this.newPerson.relationships.filter(r => r != relationship);
        },

        clearEditTarget() {
            editTarget = null;
        },

        checkForm(form) {
            form.classList.add('was-validated');

            return form.checkValidity();
        },

        clearForm() {
            editTarget = null;

            //clearing form fields
            setTimeout(() => {
                this.newPerson = {
                    personID: id,
                    isAlive: false,
                    country: '',
                    name: '',
                    dateOfBirth: '',
                    placeOfBirth: '',
                    dateOfDeath: '',
                    placeOfDeath: '',
                    placeOfBurial: '',
                    relationships: [],
                    defaultPlace: '',
                }

                this.newRelationship = {
                    name: '',
                    relation: '',
                }
                console.log('im here!')
            }, 100)
        }
    },

    // computed: values that are updated and cached if dependencies change
    computed: {
        //???
        // defaultPlace() { return this.newPerson.placeOfBirth || this.newPerson.placeOfDeath ||
        //                 this.newPerson.placeOfBurial || ''}

        relationships() {
            return this.newPerson.relationships
        }
    },

    //mounted:  called after the instance has been mounted,
    mounted: function () {
        if (localStorage.getItem('people')) {
            this.people = JSON.parse(localStorage.getItem('people'));
        }


    },

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {
        handler() {
            localStorage.setItem('people', JSON.stringify(this.people))
        },
        deep: true,
    },
});

export default app;