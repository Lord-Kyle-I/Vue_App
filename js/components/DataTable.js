import SortList from "./SortList";

const DataTable = {
    components: {
        SortList,
    },
    props: {
        tableData: {type: Array, required: true},
        sorts: {type: Array, required: true},
    },
    computed: {
        setList: function(list) {
            this.tableData = list;
        },
    },
    template: `
      <div>
        <slot name="filters"></slot>
        <table class="table">
          <thead class="text-nowrap">
          <tr>
            <sort-list :data-list="tableData" :sorts="sorts" @sort-list="setList"></sort-list>
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
        
    `
    /*
    TODO
    You can pass in stuff into slots and back.
    Look up scoped slots
     */
}

export default DataTable;