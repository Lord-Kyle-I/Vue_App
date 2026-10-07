import DataModal from "./DataModal";
import CountrySelect from "./CountrySelect";
import RelationshipSelect from "./RelationshipSelect";

function emptyPerson() {
    return {
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
}

const AddEditModal = {
    data() {
        return {
            formData: emptyPerson(),
            relationshipData: {
                relationshipName: '',
                relationshipType: ''
            }
        }
    },
    props: {
        person: {type: Object}
    },
    methods: {
        clearForm: function() {
            this.formData = emptyPerson()
            this.relationshipData = {
                relationshipName: '',
                relationshipType: ''
            }
        },
        save: function(isValid, ref) {
            if(isValid) {
                if(this.person) {
                    Object.assign(this.person, this.formData)
                } else {
                    const newPerson = Object.assign({}, this.formData)
                    this.$emit('add-person', newPerson)
                }
                ref.classList.remove('was-validated')
                this.close()
            }
        },
        open: function() {
            if(this.person) {
                Object.assign(this.formData, this.person)
            }
            this.$refs.modal.open()
        },
        close: function() {
            this.clearForm()
            this.$refs.modal.close()
        }
    },
    components: {
        DataModal,
        CountrySelect,
        RelationshipSelect,
    },
    template: `
        <data-modal class="" ref="modal" :title="person ? 'Edit Person' : 'Add Person'" edit @form-submit="save" @modal-close="close">
          <template #default>
            <div class="mb-4 border-bottom">
              <h2 class="fs-5 fw-medium mb-3">Information</h2>
              <div
                  class="container bg-warning text-warning-emphasis p-1 border border-3 border-warning-subtle mb-4">
                <p>The location in the list view will default to their most recent location. Simply
                  leave
                  fields blank that you don't know. The only required fields are whether the
                  country
                  of the person and their name. Dates must be in dd/mm/yyyy format</p>
              </div>
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="checkAlive" value=""
                       v-model="formData.isAlive">
                <label class="form-check-label text-dark" for="checkAlive">
                  This person is alive
                </label>
              </div>
              <div class="mb-3">
                <label for="countrySelect" class="form-label">Select a country</label>
                <country-select v-model="formData.country" id="countrySelect" required></country-select>
                <div class="invalid-feedback">
                  Please select a country.
                </div>
              </div>
              <div class="mb-3">
                <label for="nameInput" class="form-label">Name</label>
                <input type="text" class="form-control" id="nameInput" placeholder="Enter full name"
                       v-model="formData.name" required>
                <div class="invalid-feedback">
                  Please enter a name.
                </div>
              </div>
              <div class="mb-3">
                <label for="birthdayInput" class="form-label">Date of birth</label>
                <input type="text" class="form-control" id="birthdayInput" placeholder="mm/dd/yyyy"
                       v-model="formData.dateOfBirth"
                       pattern="^(0\\d|1[12])\\/(0\\d|1\\d|2\\d|3[01])\\/(19|20)\\d\\d$">
                <div class="invalid-feedback">
                  Please enter a date in dd/mm/yyyy format.
                </div>
              </div>
              <div class="mb-3">
                <label for="birthplaceInput" class="form-label">Place of birth</label>
                <input type="text" class="form-control" id="birthplaceInput"
                       placeholder="Enter location" v-model="formData.placeOfBirth">
              </div>
              <div class="mb-3">
                <label for="deathdayInput" class="form-label">Date of death</label>
                <input type="text" class="form-control" id="deathdayInput" placeholder="mm/dd/yyyy"
                       v-model="formData.dateOfDeath"
                       pattern="^(0\\d|1[12])\\/(0\\d|1\\d|2\\d|3[01])\\/(19|20)\\d\\d$">
                <div class="invalid-feedback">
                  Please enter a date in dd/mm/yyyy format.
                </div>
              </div>
              <div class="mb-3">
                <label for="deathplaceInput" class="form-label">Place of death</label>
                <input type="text" class="form-control" id="deathplaceInput"
                       placeholder="Enter location" v-model="formData.placeOfDeath">
              </div>
              <div class="mb-3">
                <label for="burialplaceInput" class="form-label">Place of burial</label>
                <input type="text" class="form-control" id="burialplaceInput"
                       placeholder="Enter location" v-model="formData.placeOfBurial">
              </div>
            </div>
            <div>
              <h2 class="fs-5 fw-medium mb-3">Relationships</h2>
              <div class="d-flex gap-1">
                <div>
                  <label for="relationshipNameInput" class="form-label">Name</label>
                  <input type="text" class="form-control dont-validate" id="relationshipNameInput"
                         placeholder="Enter name" v-model="relationshipData.relationshipName">
                </div>
                <div>
                  <label class="form-label" for="relationshipSelect">Relationship</label>
                  <relationship-select id="relationshipSelect" v-model="relationshipData.relationshipType"></relationship-select>
                </div>
                <button type="button" class="btn btn-link p-0 align-self-end ms-auto"
                        @click="addRelationship">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36"
                       height="36" fill="currentColor"
                       class="bi bi-plus-square-fill flex-fill align-self-end text-primary"
                       viewBox="0 0 16 16">
                    <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="p-1 mt-3">
              <div class="d-flex" v-for="relationship in formData.relationships" :key="relationship.id">
                                    <span
                                        class="align-self-center overflow-hidden text-nowrap">{{ relationship.relation }}
                                      —{{ relationship.name }}</span>
                <button type="button" class="btn btn-link ms-auto">
                  <svg
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" class="bi bi-trash-fill text-danger" viewBox="0 0 16 16"
                      @click="deleteRelationship(relationship)">
                    <path
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                  </svg>
                </button>
              </div>
            </div>
          </template>
        </data-modal>

    `
}

export default AddEditModal