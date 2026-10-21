import FamilyDate from "../../modules/shortDate";

const DateInput = {
    props: {
        name: {type: String, required: true},
        modelValue: {type: FamilyDate},
    },
    emits: ['update:modelValue'],
    methods: {
        preventInput(event, next) {
            if(event.key !== "Backspace") {
                if(event.target.value.length >= 2) {
                    event.preventDefault()
                    next.focus()
                }
            }
        },

        jump(current, next) {
            console.log(current)
            const currentLength = current.value.toString().length
            if(currentLength > 1) {
                next.focus()
            }
        }
    },
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    },
    template: `
              <div>
                <label class="form-label">{{ name }}</label>
                <div class="d-flex align-items-baseline gap-1">
                  <div class="d-flex flex-column">
                    <label for="birthdayInputMonth" class=" fw-lighter dark">Month</label>
                    <input type="text" class="form-control me-1 " id="birthdayInputMonth" placeholder="mm"
                           v-model="value.month" pattern="^\d\d$" ref="month" @keydown="preventInput($event, $refs.day)" @input="jump($refs.month, $refs.day)">
                    <slot name="month-feedback">
                      <div class="invalid-feedback">
                        Please enter a month in mm format.
                      </div>
                    </slot>
                  </div>
                  <div class="d-flex flex-column">
                    <label for="birthdayInputDay" class="fw-lighter dark">Day</label>
                    <input type="text" class="form-control me-1 " id="birthdayInputDay" placeholder="dd"
                           v-model="value.day" pattern="^\d\d$" ref="day" @keydown="preventInput($event, $refs.year)" @input="jump($refs.day, $refs.year)">
                    <slot name="day-feedback">
                      <div class="invalid-feedback">
                        Please enter a month in dd format.
                      </div>
                    </slot>
                  </div>
                  <div class="d-flex flex-column">
                    <label for="birthdayInputYear" class="fw-lighter dark ">Year</label>
                    <input type="text" class="form-control " id="birthdayInputYear" placeholder="yyyy"
                           v-model="value.year" ref="year">
                  </div>
                </div>
              </div>
    `
}

export default DateInput