const Filter = {
    data: {
        values: []
    },
    props: {
        filters: {type: Array, required: true},
        ref: {type: String, required: true},
    },
    mounted: function() {
        this.values=[this.filters.length];
    },
    template: `
        <div v-for="(filter, i) in filters">
            <select v-if="filter.filter === 'select'" v-model="this.values[i]">
              
            </select>
            
        </div>
    `
    /*
    TODO
    Filter using factories. Make different components for each type of filter instead of using a big if else
    Look up dynamic components

    Explain filters better and stuff. Use tooltips

    Use dropdowns for modals to keep it more visible. Right now you have to scroll. Make desktop wide.
     */

}

export default Filter