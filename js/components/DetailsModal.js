import DataModal from "./DataModal";
import AddEditModal from "./AddEditModal";


const DetailsModal = {
    props: {
        person: {type: Object, required:true}
    },
    methods: {
        open: function() {
            this.$refs.modal.open()
        },
        close: function() {
            this.$refs.modal.close()
        }
    },
    components: {
        DataModal,
        AddEditModal,
    },
    template: `
        <data-modal class="" ref="modal" :title="person.name"  @modal-close="close">
          <template #header>
            <h1 class="modal-title fs-5" id="detailsModalLabel">{{ person.name }}</h1>
            <button type="button" class="btn btn-link" 
                    @click="$refs.addEditModal.open()">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
              </svg>
              <add-edit-modal ref="addEditModal" :person="person"></add-edit-modal>
            </button>
            <button type="button" class="btn-close"
                    aria-label="Close" @click="close()"></button>
          </template>
          <template #default>
            <div class="border-bottom mb-4">
              <h2 class="fs-5 fw-medium mb-3">Details</h2>
              <p>Date of birth: {{ person.dateOfBirth ? person.dateOfBirth : 'N/A' }}</p>
              <p>Place of birth: {{ person.placeOfBirth ? person.placeOfBirth : 'N/A' }}</p>
              <p>Date of death: {{ person.dateOfDeath ? person.dateOfDeath : 'N/A' }}</p>
              <p>Place of death: {{ person.placeOfDeath ? person.placeOfDeath : 'N/A' }}</p>
              <p>Burial location: {{ person.placeOfBurial ? person.placeOfBurial : 'N/A' }}</p>
            </div>
            <div class="d-flex align-items-center mb-4">
              <h2 class="fs-5 fw-medium mb-0">Family Members</h2>
              <button type="button" class="btn btn-link" data-bs-toggle="popover" data-bs-title="What does linking a person do?" data-bs-placement="top" data-bs-content="Linking allows you to traverse your list by relationship easily by allowing you to open subsequent detail dialogs within the relationships section of individuals. Linking a relationship for an individual will create the inverse relationship in the person you're linking to, saving you time and effort (i.e. linking a son to a father will create a father-son relationship for the son too)." ref="popovers">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
              </button>
            </div>
            <div class="relationships d-flex flex-column gap-4">
              <div class="d-flex" v-for="relationship in person.relationships"
                   :key="relationship.name">
                                <span
                                    class="align-self-center overflow-hidden text-nowrap">{{ relationship.relation }}—{{ relationship.name }}</span>
                <div class="btn-group  btn-group-sm ms-3" role="group">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                          data-bs-target="#existingModal">Link from list
                  </button>
                  <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
                          data-bs-target="#personModal">Add new person
                  </button>
                </div>
              </div>
              <div class="d-flex">
                <button type="button"
                        class="p-0 text-decoration-none btn btn-link align-self-center overflow-hidden text-nowrap">
                  Spouse—Beth
                  Leverence
                </button>
                <button type="button" class="btn btn-link ms-auto">
                  <svg
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-trash-fill text-danger" viewBox="0 0 16 16">
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

export default DetailsModal