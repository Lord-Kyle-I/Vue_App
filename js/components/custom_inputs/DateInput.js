import FamilyDate from "../../modules/familyDate";

const DateInput = {
    props: {
        name: {type: String, required: true},
        modelValue: {type: FamilyDate},
    },
    emits: ['update:modelValue'],
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
                <div class="row align-items-center">
                  <label for="birthdayInputMonth" class=" fw-lighter dark col">Month</label>
                  <input type="text" class="form-control me-1 col" id="birthdayInputMonth" placeholder="mm"
                         v-model="value.month" pattern="\d\d">
                  <label for="birthdayInputDay" class="fw-lighter dark col">Day</label>
                  <input type="text" class="form-control me-1 col" id="birthdayInputDay" placeholder="dd"
                         v-model="value.day" pattern="\d\d">
                  <label for="birthdayInputYear" class="fw-lighter dark col">Year</label>
                  <input type="text" class="form-control col" id="birthdayInputYear" placeholder="yyyy"
                         v-model="value.year">
                  <teleport to="#dateFeedback" class="invalid-feedback">
                    Please make sure months and days are in mm/dd format
                  </teleport>
                </div>
                <div id="dateFeedback" class="invalid-feedback"></div>
              </div>
    `
}

export default DateInput