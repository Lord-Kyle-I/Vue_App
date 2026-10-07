let counter = 0
const OffcanvasFilter = {
    data(){
        return {
            id: 'offcanvas-filter' + counter++,
            bsOffcanvas: null,
        }
    },
    methods: {
        open() {
            this.bsOffcanvas.open()
        },
        close() {
            this.bsOffcanvas.close()
        }
    },
    mounted() {
        this.bsOffcanvas = new Offcanvas(this.$refs.offcanvasFilter)
    },

    template: `
      <div>
        <button type="button" class="btn btn-link" :aria-controls="id" @click="open()">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             class="bi bi-filter" viewBox="0 0 16 16">
          <path
              d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button>
        <div class="offcanvas offcanvas-start bg-background" tabindex="-1" ref="offcanvasFilter"
             :aria-labelledby="id + 'Label'">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title fs-3" :id="id + 'Label'">Filters</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="close"></button>
          </div>
          <div class="offcanvas-body">
            <slot></slot>
          </div>
        </div>
      </div>
    `
}

export default OffcanvasFilter