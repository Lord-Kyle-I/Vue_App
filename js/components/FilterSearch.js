let counter = 0
const FilterSearch = {
    data() {
        return {
            id: 'filter' + counter++
        }
    },

    template: `
        <div v-for="filter in filters" :key="filter."></div>
    `
    /*
    TODO
    FilterSearch using factories. Make different components for each type of filter instead of using a big if else
    Look up dynamic components

    Explain filters better and stuff. Use tooltips

    Use dropdowns for modals to keep it more visible. Right now you have to scroll. Make desktop wide.
     */

}

export default FilterSearch