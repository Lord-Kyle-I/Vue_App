import NumericSort from "./sort_icons/NumericSort";
import AlphabeticalSort from "./sort_icons/AlphabeticalSort";

const Sort= {
    components: {
        AlphabeticalSort,
        NumericSort
    },
    data() {
        return {
            clicked: false,
            descending: false,
            clicks: 0
        }
    },
    props: {
        name: {type: String, default: ''},
        sortType: {type: String, required: true,
            validator(value) {
                return ['alphabetical', 'numerical', 'date'].includes(value)
            }
        },
        property: {type: String, required: true}
    },
    methods: {
        reset() {
          this.clicked = false
          this.descending = false
          this.clicks = 0
        },
        filterClick() {
            if(this.clicks < 2) {
                this.clicked = true
                this.descending = !this.descending
                this.clicks++
            } else {
                this.reset()
            }
        }
    },
    computed: {

        sortWay() {
            //we actually set the descending after we call this function so we must assume the opposite of intuition
            if(!this.descending) {
                switch (this.sortType) {
                    case 'date':
                    case 'alphabetical':
                        return (a, b) => {return a[this.property].localeCompare(b[this.property])}
                    case 'numerical':
                        return (a, b) => { return a[this.property] - b[this.property] }
                    default:
                        return
                }
            } else {
                switch (this.sortType) {
                    case 'date':
                    case 'alphabetical':
                        return (a, b) => { return b[this.property].localeCompare(a[this.property])}
                    case 'numerical':
                        return (a, b) => { return b[this.property] - a[this.property]}
                    default:
                        return
                }
            }
        }
    },
    template: `
        <th>
          <button type="button" class="p-1 mb-1 btn btn-link d-flex gap-1"
                  @click="$emit('on-click',this.name,this.sortWay)">
            {{ name }}
            <alphabetical-sort v-if="sortType==='alphabetical'" :descending="this.descending" :show="clicked"></alphabetical-sort>
            <numeric-sort v-else :descending="this.descending" :show="clicked"></numeric-sort>
          </button>
        </th>
    `,
}

export default Sort;