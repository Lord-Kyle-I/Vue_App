const CheckFilter = {
    props: {
        message: {type: String, default: ''},
    },
    template: `
      <input class="form-check-input align-self" type="checkbox" value=""
             id="checkCompleteOffcanvas">
      <label class="form-check-label" for="checkCompleteOffcanvas">
        {{ message }}
      </label>
    `
}

export default CheckFilter;