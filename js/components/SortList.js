import Sort from "./Sort";
const SortList = {
    components: {
        Sort,
    },
    methods: {
      reset() {
        this.$refs.sorts.clicked = false
      },
      changeSort(name, sortWay) {
          this.reset()
          const target = this.$refs.sorts.find(s => s.name === name)
          this.$refs.sorts.indexOf(target).clicked = true
          this.$emit('sort', sortWay)
      }
    },
    props: {
        sorts: {type: Array, required: true},
        dataList: {type: Array, required: true},
    },
    template: `
        <sort ref="sorts" v-for="sort in sorts" :sort-type="sort.sortType" :name="sort.name" :key="sort.name" 
              @on-click="changeSort"></sort>
    `
}

export default SortList