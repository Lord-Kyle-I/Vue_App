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
        sortedList(sortWay) {
            this.$emit('update-list',this.dataList.sort(sortWay))
        }
    },
    template: `
      <div>
        <slot name="filters"></slot>
        
        <div :class="customClasses">
          <table class="table">
            <thead class="text-nowrap">
            <tr>
              <sort-list :data-list="tableData" :sorts="sorts" @sort="$emit('update-list', sortedList)"></sort-list>
              <th scope="col"><span class="visually-hidden">Actions</span></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="data in tableData" :key="key">
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