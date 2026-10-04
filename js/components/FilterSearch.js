const FilterSearch = {
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
        <div>
            <slot name="#filters"></slot>
        </div>
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