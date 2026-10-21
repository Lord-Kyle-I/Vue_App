import SortList from "./SortList";

const DataTable = {
    components: {
        SortList,
    },
    props: {
        tableData: {type: Array, required: true},
        sorts: {type: Array, required: true},
        customClasses: {type: Array}
    },
    methods: {
        sortList(sortWay) {
            if(sortWay !== null) {
                this.$emit('update-list', sortWay)
            } else {
                this.$emit('update-list', null)
            }
        }
    },
    template: `
      <div>
        <slot name="filters"></slot>
        
        <div :class="customClasses">
          <table class="table">
            <thead class="text-nowrap">
            <tr>
              <th scope="col"><span class="visually-hidden">Favorites</span></th>
              <sort-list :sorts="sorts" @sort="sortList"></sort-list>
              <th scope="col"><span class="visually-hidden">Actions</span></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="data in tableData" :key="JSON.stringify(data)">
              <slot name="row-content" :data="data"></slot>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
        
    `
    /*
    TODO
    You can pass in stuff into slots and back.
    Look up scoped slots
     */
}

export default DataTable;