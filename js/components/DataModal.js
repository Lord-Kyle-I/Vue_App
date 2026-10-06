let counter = 0
const DataModal = {
    data() {
        return {
            id: 'modal' + counter++,
            bsModal: null,
        }
    },
    methods: {
        open: function() {
            this.bsModal.show()
        },
        close: function() {
            this.bsModal.hide()
        },
        checkForm: function() {
            this.$refs.form.classList.add('was-validated')
            this.$refs.form.checkValidity()
        },
    },
    mounted: function() {
        this.bsModal = new Modal(this.$refs.modal)
    },
    props: {
        title: {type: String, default: ''},
        edit: {type: Boolean, default: false},
    },
    template: `
      <div class="modal fade" ref="modal" tabindex="-1" :aria-labelledby="id" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <form class="needs-validation" ref="form" v-if="edit" @submit.prevent="$emit('form-submit'); checkForm" novalidate>
                <div class="modal-header">
                  <slot name="header">
                    <h1 class="modal-title fs-5" :id="id">{{ title }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="$emit('modal-close')"></button>
                  </slot>
                </div>
                <div class="modal-body">
                  <slot></slot>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                          @click="$emit('modal-close')">Close
                  </button>
                  <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
              </form>
              <div v-else>
                <div class="modal-header">
                  <slot name="header">
                    <h1 class="modal-title fs-5" :id="id">{{ title }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="$emit('modal-close')"></button>
                  </slot>
                </div>
                <div class="modal-body">
                  <slot></slot>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                          @click="$emit('modal-close')">Close
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    `,
}

export default DataModal