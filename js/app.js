import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
//bare minimum imports aren't handled natively so I installed Web Dev Server
//https://stackoverflow.com/questions/56507441/relative-references-must-start-with-either-or
import * as bootstrap from 'bootstrap'
import {Relationship} from "./modules/relationship";


const app = createApp({
    // data: all the data for the app
    data: function () {
        return {

            relationship: {
                name: '',
                relation: '',
                link: null,
            },

            tooltips: [],

            people: [],
        };
    },

    // methods: usually "events" triggered by v-on:
    methods: {

        //add and edit function 
        addPerson: function (person) {
            this.people.add(person)
        },

        editPerson: function (person) {
            const indexToRemove = this.people.find(p => p === person);

        },

        populatePerson: function (person) {
            this.person = {
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

        deletePerson: function (person) {
            const indexToRemove = this.people.indexOf(person);
            this.people.splice(indexToRemove, 1)
        },

        clearEditTarget() {
            editTarget = null;
        },

        clearForm() {
            editTarget = null;

            //clearing form fields
            setTimeout(() => {
                this.person = {
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
            }, 100)
        }
    },

    // computed: values that are updated and cached if dependencies change
    computed: {


        relationships() {
            return this.person.relationships
        }
    },

    //mounted:  called after the instance has been mounted,
    mounted: function () {
        // if (localStorage.getItem('people')) {
        //     this.people = JSON.parse(localStorage.getItem('people'));
        // }

        this.tooltips = this.$refs.tooltips;
        const popovers = this.$refs.popovers;
        console.log(this.tooltips)
        this.tooltips.forEach(t => new bootstrap.Tooltip(t))
        new bootstrap.Popover(popovers)
    },

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {

        // Promise logic
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await


        people: {
            async handler() {
                await this.$nextTick();
                console.log(this.tooltips)
                this.$refs.tooltips.forEach(t => new bootstrap.Tooltip(t))
            },
            deep: true,
        },
    },
});

export default app;