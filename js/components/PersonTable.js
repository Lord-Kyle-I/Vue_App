import DataTable from "./DataTable";
import PersonRow from "./PersonRow";
import CountrySelect from "./custom_inputs/CountrySelect";
import OffcanvasFilter from "./OffcanvasFilter";
import AddEditModal from "./AddEditModal";

const PersonTable= {
    data() {
        return {
            filters: {
                country: '',
                isFavorite: false,
                isAlive: false,
                search: '',
            },

            sorts: [
                {name: 'Name', sortType: 'alphabetical', property: 'name'},
                {name: 'Birth Date', sortType: 'date', customClasses: ['d-none', 'd-md-table-cell'], property: 'dateOfBirth'},
                {name: 'Death Date', sortType: 'date', customClasses: ['d-none', 'd-md-table-cell'], property: 'dateOfDeath'},
                {name: 'Location', sortType: 'alphabetical', customClasses: ['d-none', 'd-md-table-cell'], property: 'defaultPlace'},
            ],

            content: [],

            currentSort: null
        }
    },
    props: {
        people: {type: Array, required: true}
    },
    computed: {
        filteredList() {
            return this.content.filter(a => (a.country === this.filters.country || this.filters.country === '') &&
                ((a.isFavorite && this.filters.isFavorite) || !this.filters.isFavorite) && ((a.isAlive && this.filters.isAlive) || !this.filters.isAlive))
        }
        //TODO:SEARCHFILTER
    },
    methods: {
        sortPeople(sortWay) {
            if(sortWay !== null) {
                this.content.sort(sortWay)
                this.currentSort = sortWay
            } else {
                Object.assign(this.content, this.people)
            }
        },
        addPerson(person) {
            this.content.push(person)
            this.sortPeople(this.currentSort)
            this.$emit('add-person', person)
        },
        deletePerson(person) {
            console.log('hereerer2')
            const indexToRemove = this.content.indexOf(person);
            this.content.splice(indexToRemove, 1)
            this.$emit('delete-person', person)
        }
    },
    components: {
        DataTable,
        PersonRow,
        AddEditModal,
        CountrySelect,
        OffcanvasFilter,
    },
    mounted() {
        Object.assign(this.content, this.people)
    },
    template: `
      <div>
        <data-table ref="table" :sorts="sorts" @update-list="sortPeople" :table-data="filteredList"
                    :custom-classes="['table-content', 'container-lg']">
          <template #filters>
            <div class="pe-3 ps-3">
              <div class="d-flex justify-content-between pb-lg-4 pb-2 filter w-100">
                <country-select ref="filter" class="w-auto overflow-x-auto" v-model="filters.country"></country-select>
                <div class="form-check d-none d-md-flex align-items-center gap-1 flex-nowrap ms-1">
                  <input class="form-check-input align-self" type="checkbox" value=""
                         id="checkFavorite" ref="filter" v-model="filters.isFavorite">
                  <label class="form-check-label" for="checkFavorite">
                    Favorite
                  </label>
                </div>
                <div class="form-check d-none d-md-flex align-items-center gap-1 flex-nowrap me-1">
                  <input class="form-check-input" type="checkbox" value="" id="checkLiving"
                         ref="filter" v-model="filters.isAlive">
                  <label class="form-check-label" for="checkLiving">
                    Living
                  </label>
                </div>
                <div class="d-flex d-md-none">
                  <offcanvas-filter>
                    <div class="form-check d-flex align-items-center fs-4 gap-3">
                      <input class="form-check-input align-self" type="checkbox" value=""
                             id="checkFavoriteOffcanvas" ref="filter" v-model="filters.isFavorite">
                      <label class="form-check-label" for="checkFavoriteOffcanvas">
                        Favorite
                      </label>
                    </div>
                    <div class="form-check d-flex align-items-center fs-4 gap-3">
                      <input class="form-check-input" type="checkbox" value="" id="checkLivingOffcanvas"
                             ref="filter" v-model="filters.isAlive">
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
            <person-row :person="data" @add-person="addPerson" @delete-person="deletePerson"></person-row>
          </template>
        </data-table>
        <div class="add-button">
          <div class="row me-1 ms-1">
            <button type="button" class="btn btn-primary" @click="$refs.modal.open()">
              Add a new person
              <add-edit-modal ref="modal" @add-person="addPerson"></add-edit-modal>
            </button>
          </div>
        </div>
      </div>
    `

}

export default PersonTable;