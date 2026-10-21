import ShortDate from "../../modules/shortDate";

const DateInput = {
    data() {
        return {
            customClass: 'border-0'
        }
    },
    props: {
        name: {type: String, required: true},
        modelValue: {type: ShortDate},
    },
    emits: ['update:modelValue'],
    methods: {
        preventInput(event, next, previous=null) {

            if(event.key !== "Backspace") {
                if(event.target.value.length >= 2) {
                    if(next !== null) {
                        event.preventDefault()
                        next.focus()
                    }
                }
            } else if (event.target.value.length <= 0) {
                if(previous !== null) {
                    event.preventDefault()
                    previous.focus()
                }
            }
        },

        jump(current, next) {
            const currentLength = current.value.toString().length
            if(currentLength > 1) {
                next.focus()
            }
        },

        /**
         * by default it will clear validation
         *
         * @param type looking for a true false here. If true it will be the is-valid class, if false it will be is-invalid
         */
        validate(type=null) {
            if(type === true) {
                this.customClass = 'is-valid'
            } else if(type === false) {
                this.customClass = 'is-invalid'
            } else if(type === null) {
                this.customClass = 'border-0'
            }
        },
    },
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        },

        isValid() {
            if(this.modelValue !== null) {
                return this.modelValue.isValid()
            }
        }
    },
    watch: {
      modelValue: {
          handler() {
              if(this.customClass !== 'border-0') {
                  console.log('correct')
                  this.validate(this.isValid)
              }
          }, deep: true
      }
    },
    template: `
              <div class="form-control date" :class="this.customClass">
                <label class="form-label">{{ name }}</label>
                <div class="d-flex align-items-baseline gap-1">
                  <div class="d-flex flex-column">
                    <label for="birthdayInputMonth" class=" fw-lighter dark">Month</label>
                    <input type="text" class="form-control me-1 "  placeholder="mm"
                           v-model="value.month" pattern="^\[0-9]{2}$" ref="month" @keydown="preventInput($event, $refs.day)" @input="jump($refs.month, $refs.day)">
                    <slot name="month-feedback">
                      <div class="invalid-feedback">
                        Please enter a month in mm format.
                      </div>
                    </slot>
                  </div>
                  <div class="d-flex flex-column">
                    <label for="birthdayInputDay" class="fw-lighter dark">Day</label>
                    <input type="text" class="form-control me-1 "placeholder="dd"
                           v-model="value.day" pattern="^\[0-9]{2}$" ref="day" @keydown="preventInput($event, $refs.year, $refs.month)" @input="jump($refs.day, $refs.year)">
                    <slot name="day-feedback">
                      <div class="invalid-feedback">
                        Please enter a day in dd format.
                      </div>
                    </slot>
                  </div>
                  <div class="d-flex flex-column">
                    <label for="birthdayInputYear" class="fw-lighter dark ">Year</label>
                    <input type="text" class="form-control " placeholder="yyyy"
                           v-model="value.year" ref="year" @keydown="preventInput($event, null, $refs.day)">
                  </div>
                </div>
              </div>
    `
}

export default DateInput