import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
//bare minimum imports aren't handled natively so I installed Web Dev Server
//https://stackoverflow.com/questions/56507441/relative-references-must-start-with-either-or
import * as bootstrap from 'bootstrap'
import Relationship from "./modules/relationship";
import PersonTable from "./components/PersonTable";
import ShortDate from "./modules/shortDate";


const app = createApp({
    components: {
        PersonTable
    },

    // data: all the data for the app
    data: function () {
        return {

            relationship: {
                name: '',
                relation: '',
                link: null,
            },

            tooltips: [],

            people: [
                {
                    isFavorite: false,
                    isAlive: false,
                    country: 'Germany',
                    name: 'Albert Einstein',
                    dateOfBirth: new ShortDate('03', "14", "1879"),
                    placeOfBirth: 'Ulm, Württemberg, Germany',
                    dateOfDeath: new ShortDate("04", "18", "1955"),
                    placeOfDeath: 'Princeton, New Jersey, USA',
                    placeOfBurial: 'Cremated; ashes scattered (undisclosed location, reportedly Delaware River area)',
                    relationships: [],
                    defaultPlace: 'Princeton, New Jersey, USA',
                },
                {
                    isAlive: false,
                    country: 'United States',
                    name: 'Abraham Lincoln',
                    dateOfBirth: new ShortDate(0o2, 12, 1809),
                    placeOfBirth: 'Near Hodgenville, Kentucky, USA',
                    dateOfDeath: new ShortDate(0o4, 15, 1865),
                    placeOfDeath: 'Washington, D.C., USA',
                    placeOfBurial: 'Oak Ridge Cemetery, Springfield, Illinois, USA',
                    relationships: [],
                    defaultPlace: 'Springfield, Illinois, USA',
                },
                {
                    isAlive: false,
                    country: 'Poland / France',
                    name: 'Marie Curie',
                    dateOfBirth: new ShortDate(11, 7, 1867),
                    placeOfBirth: 'Warsaw, Congress Poland (Russian Empire)',
                    dateOfDeath: new ShortDate(7, 4, 1934),
                    placeOfDeath: 'Passy (near Sallanches), Haute-Savoie, France',
                    placeOfBurial: 'Panthéon, Paris, France',
                    relationships: [],
                    defaultPlace: 'Paris, France',
                },
                {
                    isAlive: false,
                    country: 'Italy',
                    name: 'Leonardo da Vinci',
                    dateOfBirth: new ShortDate(4, 15, 1452),
                    placeOfBirth: 'Anchiano (near Vinci), Republic of Florence, Italy',
                    dateOfDeath: new ShortDate(5, 2, 1519),
                    placeOfDeath: 'Clos-Lucé, Amboise, France',
                    placeOfBurial: 'Chapel of Saint-Hubert, Château d\'Amboise, France',
                    relationships: [],
                    defaultPlace: 'Florence / Vinci, Italy',
                },
            ]
        };
    },

    // methods: usually "events" triggered by v-on:
    methods: {

        //add and edit function 
        addPerson: function (person) {
            this.people.push(person)
        },

        deletePerson: function (person) {
            console.log('im here')
            const indexToRemove = this.people.indexOf(person);
            this.people.splice(indexToRemove, 1)
        },

        clearForm() {
            setTimeout(() => {
                //clear form logic
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

    },

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {


    },
});

export default app;