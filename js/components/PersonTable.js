import DataTable from "./DataTable";
import PersonRow from "./PersonRow";
import CountrySelect from "./CountrySelect";
import OffcanvasFilter from "./OffcanvasFilter";

const PersonTable= {
    data() {
        return {
            filters: {
                country: '',
                completeEntry: false,
                living: false,
                search: '',
            },

            sorts: [
                {name: 'Name', sortType: 'alphabetical'},
                {name: 'Birth Date', sortType: 'date', customClasses: ['d-none', 'd-md-table-cell']},
                {name: 'Death Date', sortType: 'date', customClasses: ['d-none', 'd-md-table-cell']},
                {name: 'Location', sortType: 'alphabetical', customClasses: ['d-none', 'd-md-table-cell']},
            ],

            content: []
        }
    },
    props: {
        people: {type: Array, required: true}
    },
    methods: {
        updateAndFilter(list) {
            this.content = list.filter(a => (a.country === this.filters.country) &&
                (a.completeEntry === this.filters.completeEntry) && (a.living === this.filters.living)) //TODO:SEARCHFILTER
        },
        addPerson(person) {
            this.$emit('add-person', person)
        }
    },
    watch: {
        filters: {
            handler() {
                this.updateAndFilter(this.content)
            }
        }
    },
    components: {
        DataTable,
        PersonRow,
        CountrySelect,
        OffcanvasFilter,
    },
    mounted() {
        Object.assign(this.content, this.people)
    },
    template: `
      <div>
        <data-table ref="table" :sorts="sorts" @update-list="updateAndFilter" :table-data="people" :custom-classes="['table-content', 'container-lg']">
            <template #filters>
              <div class="container">
                <div class="d-flex justify-content-between pb-lg-4 pb-2 filter">
                  <country-select ref="filter" class="w-auto overflow-x-auto" v-model="filters.country"></country-select>
                  <div class="form-check d-none d-md-flex align-items-center gap-1 flex-nowrap ms-1">
                    <input class="form-check-input align-self" type="checkbox" value=""
                           id="checkComplete" ref="filter" v-model="filters.completeEntry">
                    <label class="form-check-label" for="checkComplete">
                      Complete Entry
                    </label>
                  </div>
                  <div class="form-check d-none d-md-flex align-items-center gap-1 flex-nowrap me-1">
                    <input class="form-check-input" type="checkbox" value="" id="checkLiving"
                           ref="filter" v-model="filters.living">
                    <label class="form-check-label" for="checkLiving">
                      Living
                    </label>
                  </div>
                  <div class="d-flex d-md-none">
                    <offcanvas-filter>
                      <div class="form-check d-flex align-items-center fs-4 gap-3">
                        <input class="form-check-input align-self" type="checkbox" value=""
                               id="checkCompleteOffcanvas" ref="filter" v-model="filters.completeEntry">
                        <label class="form-check-label" for="checkCompleteOffcanvas">
                          Complete Entry
                        </label>
                      </div>
                      <div class="form-check d-flex align-items-center fs-4 gap-3">
                        <input class="form-check-input" type="checkbox" value="" id="checkLivingOffcanvas"
                               ref="filter" v-model="filters.living">
                        <label class="form-check-label" for="checkLivingOffcanvas">
                          Living
                        </label>
                      </div>
                    </offcanvas-filter>
                  </div>
                  <form class="d-md-flex d-none" role="search">
                    <input class="form-control me-2" type="search" placeholder="Enter name"
                           aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
                <div class="collapse pt-2 pb-2" id="searchCollapse">
                  <form class="d-flex d-md-none" role="search">
                    <input class="form-control me-2" type="search" placeholder="Enter name"
                           aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </template>
            <template #row-content="{ data }">
                <person-row :person="data" @add-person="addPerson"></person-row>
            </template>
        </data-table>
        <div class="addbutton">
          <div class="row me-1 ms-1">
            <button type="button" class="btn btn-primary" @add-person="addPerson">
              Add a new person
            </button>
          </div>
        </div>
      </div>
    `

}

export default PersonTable;