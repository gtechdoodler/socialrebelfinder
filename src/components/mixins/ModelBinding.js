export default function () {
  return {
    props: {
      value: {
        type: [Number, String]
      }
    },
    computed: {
      listeners() {
        if (this.$listeners.input) return this.$listeners;
        const vm = this;        
        return Object.assign({}, this.$listeners, {
            input(value) {
              vm.$emit('input', value);
            }
          }
        )
      }
    }    
  }
}