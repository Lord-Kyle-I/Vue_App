import Sort from "./Sort";
const SortList = {
    components: {
        Sort,
    },
    props: {
        sorts: {type: Array, required: true},
        dataList: {type: Array, required: true},
    },
    computed: {
        sortt(col) {
            return this.dataList.sort((a, b) => a[col] - b[col])
        }
    },
    template: `
        <sort v-for="(sort, i) in sorts" :sort-type="sort.sortType" @on-click=$emit('sort-list',sortt(i))></sort>
    `
}

export default SortList