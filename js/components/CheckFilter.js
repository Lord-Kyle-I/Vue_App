const CheckFilter = {
    props: {
        message: {type: String, default: ''},
        id: {type: String, required: true}
    },
    template: `
      <input class="form-check-input align-self" type="checkbox" value=""
             :id="id">
      <label class="form-check-label" :for="id">
        {{ message }}
      </label>
    `
}

export default CheckFilter;