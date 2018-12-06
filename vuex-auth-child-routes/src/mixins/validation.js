export default {
  methods: {
    validateState (ref) {
      if (this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validate)) {
        return !this.errors.has(ref) ? 'valid' : 'invalid'
      }
      return null
    }
  }
}
