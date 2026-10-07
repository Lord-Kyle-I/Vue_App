import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
//bare minimum imports aren't handled natively so I installed Web Dev Server
//https://stackoverflow.com/questions/56507441/relative-references-must-start-with-either-or
import * as bootstrap from 'bootstrap'
import {Relationship} from "./modules/relationship";
import PersonTable from "./components/PersonTable";
import person from "./modules/person";


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
                person()
            ],
        };
    },

    // methods: usually "events" triggered by v-on:
    methods: {

        //add and edit function 
        addPerson: function (person) {
            this.people.push(person)
        },

        editPerson: function (person) {
            const indexToRemove = this.people.find(p => p === person);
        },

        deletePerson: function (person) {
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

        // this.tooltips = this.$refs.tooltips;
        // const popovers = this.$refs.popovers;
        // console.log(this.tooltips)
        // this.tooltips.forEach(t => new bootstrap.Tooltip(t))
        // new bootstrap.Popover(popovers)
    },

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {

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