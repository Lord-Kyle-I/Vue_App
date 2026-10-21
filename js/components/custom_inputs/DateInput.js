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
                <div class="d-flex align-items-center gap-1">
                  <label for="birthdayInputMonth" class=" fw-lighter dark">Month</label>
                  <input type="text" class="form-control me-1" id="birthdayInputMonth" placeholder="mm"
                         v-model="value.month" pattern="\d\d">
                  <label for="birthdayInputDay" class="fw-lighter dark">Day</label>
                  <input type="text" class="form-control me-1" id="birthdayInputDay" placeholder="dd"
                         v-model="value.day" pattern="\d\d">
                  <label for="birthdayInputYear" class="fw-lighter dark">Year</label>
                  <input type="text" class="form-control" id="birthdayInputYear" placeholder="yyyy"
                         v-model="value.year">
                  <teleport to="#dateFeedback" class="invalid-feedback">
                    Please make sure months and days are in mm/dd format
                  </teleport>
                </div>
                <div id="dateFeedback"></div>
              </div>
    `
}

export default DateInput