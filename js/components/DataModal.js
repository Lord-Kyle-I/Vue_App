let counter = 0
const DataModal = {
    data() {
        return {
            id: 'modal' + counter++,
        }
    },
    props: {
        title: {type: String, default: ''},
        edit: {type: Boolean, default: false},
    },
    template: `
      <div class="modal fade" tabindex="-1" :aria-labelledby="id" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <form class="needs-validation" v-if="edit" @submit.prevent=$emit('form-submit') novalidate>
                <div class="modal-header">
                  <h1 class="modal-title fs-5" :id="id">{{ title }}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                          @click="$emit('form-close')"></button>
                </div>
                <div class="modal-body">
                  <slot></slot>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                          @click="$emit('form-close')">Close
                  </button>
                  <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
              </form>
              <div v-else>
                <div class="modal-header">
                  <h1 class="modal-title fs-5" :id="id">{{ title }}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                          @click="$emit('form-close')"></button>
                </div>
                <div class="modal-body">
                  <slot></slot>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                          @click="$emit('form-close')">Close
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    `,
}

export default DataModal