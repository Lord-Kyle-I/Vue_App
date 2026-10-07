const RelationshipSelect = {
    props: {
        modalValue: {type: String},
        id: {type: String, required: true},
        required: {type: Boolean}
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
      <select class="form-select" aria-label="Relationship dropdown"
              v-model="value" :required="required">
        <option selected disabled value="">Choose a relationship</option>

        <option value="Spouse">Spouse</option>

        <option value="Father">Father</option>
        <option value="Mother">Mother</option>

        <option value="Son">Son</option>
        <option value="Daughter">Daughter</option>

        <option value="Brother">Brother</option>
        <option value="Sister">Sister</option>

        <option value="Grandfather">Grandfather</option>
        <option value="Grandmother">Grandmother</option>

        <option value="Grandson">Grandson</option>
        <option value="Granddaughter">Granddaughter</option>
      </select>
    `
}

export default RelationshipSelect