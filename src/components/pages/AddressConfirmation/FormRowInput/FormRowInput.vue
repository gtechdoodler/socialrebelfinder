<template functional>
  <b-row align-h="center">
    <b-col>
      <b-form-group :label="props.label">
        <b-form-input class="input" :value="props.value"
          v-bind="props.$attrs" v-on="props.$listeners" />
      </b-form-group>
    </b-col>
  </b-row>  
</template>

<script>
import { BFormGroup, BFormInput } from 'bootstrap-vue';

export default {
  inheritAttrs: false,
  components: {
    'b-form-group': BFormGroup,
    'b-form-input': BFormInput
  },
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String]
    }
  }
}
</script>