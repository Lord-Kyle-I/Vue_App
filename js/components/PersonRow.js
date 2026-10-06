import AddEditModal from "./AddEditModal";

const PersonRow = {
    components: {
      AddEditModal
    },
    props: {
        person: {type: Object, required: true}
    },

    methods: {
        edit: function(editedVersion) {
            Object.assign(person, editedVersion)
        }
    },

    template: `
      <td scope="row" class="ps-0">
        <button type="button" class="btn btn-link text-nowrap"
                data-bs-toggle="modal" data-bs-target="#detailsModal"
                @click="populatePerson()">
          <div class="d-flex gap-1">{{ person.name }}
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="16" height="16" fill="currentColor"
                 class="bi bi-leaf-fill align-self-center" ref="tooltips"
                 data-bs-placement="top" data-bs-title="This person is deceased"
                 :class="isAlive? 'd-none' : 'd-block'" viewBox="0 0 16 16">
              <path
                  d="M1.4 1.7c.217.289.65.84 1.725 1.274 1.093.44 2.885.774 5.834.528 2.02-.168 3.431.51 4.326 1.556C14.161 6.082 14.5 7.41 14.5 8.5q0 .344-.027.734C13.387 8.252 11.877 7.76 10.39 7.5c-2.016-.288-4.188-.445-5.59-2.045-.142-.162-.402-.102-.379.112.108.985 1.104 1.82 1.844 2.308 2.37 1.566 5.772-.118 7.6 3.071.505.8 1.374 2.7 1.75 4.292.07.298-.066.611-.354.715a.7.7 0 0 1-.161.042 1 1 0 0 1-1.08-.794c-.13-.97-.396-1.913-.868-2.77C12.173 13.386 10.565 14 8 14c-1.854 0-3.32-.544-4.45-1.435-1.124-.887-1.889-2.095-2.39-3.383-1-2.562-1-5.536-.65-7.28L.73.806z"/>
            </svg>
          </div>
        </button>
      </td>
      <td class="d-none d-md-table-cell align-middle">
        {{ person.dateOfBirth ? person.dateOfBirth : '-' }}
      </td>
      <td class="d-none d-md-table-cell align-middle">
        {{ person.dateOfDeath ? person.dateOfDeath : '-' }}
      </td>
      <td class="d-none d-md-table-cell align-middle">{{
          person.defaultPlace ?
              person.defaultPlace : '-'
        }}
      </td>
      <td>
        <div class="d-flex flex-row-reverse">
          <button type="button" class="btn btn-link" data-bs-toggle="modal"
                  data-bs-target="#personModal" @click="editPerson(person.personID)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                 fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
            </svg>
            <add-edit-modal :person="{person}" @></add-edit-modal>
          </button>
        </div>
      </td>
    `
}

export default PersonRow