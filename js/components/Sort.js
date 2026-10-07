const Sort= {
    data() {
        return {
            clicked: false,
            direction: 'up'
        }
    },
    props: {
        name: {type: String, default: ''},
        sortType: {type: String, required: true},
    },
    methods: {
        filterClick() {
            if(this.clicked) {
                if(this.direction === 'up') {
                    this.direction = 'down'
                } else {
                    this.direction = 'up'
                }
            }
            this.$emit('on-click',this.name,this.sortWay)
        }
    },
    computed: {
        sortImg() {
            try {
                if(this.clicked) {
                    switch (this.sortType) {
                        case 'alphabetical':
                            return `
                        <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" class="bi bi-sort-alpha-up" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371zm1.57-.785L11 2.687h-.047l-.652 2.157z"/>
                                    <path
                                            d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293z"/>
                                </svg>
                        `
                        case 'numerical':
                        case 'date':
                            return `
                        <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" class="bi bi-sort-numeric-up-alt" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98"/>
                                    <path
                                            d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293z"/>
                                </svg>
                        `
                        default:
                            throw new Error('Unknown sort type!')
                    }
                }
                switch (this.sortType) {
                    case 'alphabetical':
                        return `
                        <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371zm1.57-.785L11 2.687h-.047l-.652 2.157z"/>
                                    <path
                                            d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293z"/>
                                </svg>
                        `
                    case 'numerical':
                    case 'date':
                        return `
                        <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" class="bi bi-sort-numeric-down-alt" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98"/>
                                    <path
                                            d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293z"/>
                                </svg>
                        `
                    default:
                        throw new Error('Unknown sort type!')
                }
            } catch (e) {
                console.error(e, e.message)
            }
        },
        sortWay() {
            if(this.direction === 'up') {
                switch (this.sortType) {
                    case 'alphabetical':
                        return (a, b) => { return a.localeCompare(b)}
                    case 'numerical':
                        return (a, b) => { return a - b }
                    case 'date':
                        //TODO: DATE COMPARISON
                        //return (a, b) => { return Date().localeCompare(Date(b))}
                    default:
                        return
                }
            } else {
                switch (this.sortType) {
                    case 'alphabetical':
                        return (a, b) => { return b.localeCompare(a)}
                    case 'numerical':
                        return (a, b) => { return b - a }
                    case 'date':
                    //TODO: DATE COMPARISON
                    //return (a, b) => { return Date().localeCompare(Date(b))}
                    default:
                        return
                }
            }
        }
    },
    template: `
        <th>{{ name }}
          <button type="button" class="p-1 mb-1 btn btn-link text-secondary" :class="{clicked : 'clicked-filter'}"
                  v-html="sortImg" @click="filterClick()"></button>
        </th>
    `,
}

export default Sort;