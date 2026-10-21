import AddEditModal from "./AddEditModal";
import DetailsModal from "./DetailsModal";
import DataTooltip from "./DataTooltip";

const PersonRow = {
    components: {
        AddEditModal,
        DetailsModal,
        DataTooltip,
    },
    computed: {
        favoriteDisplay() {
            if(this.person.isFavorite) {
                return `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                `
            } else {
                return `
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                  </svg>
                `
            }
        }
    },
    props: {
        person: {type: Object, required: true}
    },
    methods: {
        addPerson(person) {
            this.$emit('add-person', person)
        }
    },
    template: `
      <td>
        <button type="button" class="btn favorite" v-html="favoriteDisplay" @click="this.person.isFavorite = !this.person.isFavorite"></button>
      </td>
      <td class="ps-0">
        <button type="button" class="btn btn-link text-nowrap"  @click="$refs.detailsModal.open()">
          <div class="d-flex gap-1">
            {{ person.name }}
            <data-tooltip placement="top" text="This person is deceased">
              <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="16" height="16" fill="currentColor"
                                                    class="bi bi-leaf-fill"
                                                    :class="person.isAlive? 'd-none' : 'd-block'" viewBox="0 0 16 16">
              <path
                  d="M1.4 1.7c.217.289.65.84 1.725 1.274 1.093.44 2.885.774 5.834.528 2.02-.168 3.431.51 4.326 1.556C14.161 6.082 14.5 7.41 14.5 8.5q0 .344-.027.734C13.387 8.252 11.877 7.76 10.39 7.5c-2.016-.288-4.188-.445-5.59-2.045-.142-.162-.402-.102-.379.112.108.985 1.104 1.82 1.844 2.308 2.37 1.566 5.772-.118 7.6 3.071.505.8 1.374 2.7 1.75 4.292.07.298-.066.611-.354.715a.7.7 0 0 1-.161.042 1 1 0 0 1-1.08-.794c-.13-.97-.396-1.913-.868-2.77C12.173 13.386 10.565 14 8 14c-1.854 0-3.32-.544-4.45-1.435-1.124-.887-1.889-2.095-2.39-3.383-1-2.562-1-5.536-.65-7.28L.73.806z"/>
            </svg>
            </data-tooltip>
          </div>
          <details-modal :person="person" ref="detailsModal"></details-modal>
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
          <button type="button" class="btn btn-link" @click="$refs.addEditModal.open()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                 fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
            </svg>
            <add-edit-modal ref="addEditModal" :person="person" @add-person="addPerson"></add-edit-modal>
          </button>
        </div>
      </td>
    `
}

export default PersonRow