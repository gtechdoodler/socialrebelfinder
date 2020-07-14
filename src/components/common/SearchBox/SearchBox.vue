<template>
  <div class="search-box">
    <b-form-group
      :label="label">
      <div class="search-box__flex-wrapper">
        <b-form-input type="text" ref="searchInput" class="search-box__input"
          :value="value" v-bind="$attrs" v-on="$listeners" />
        <span v-if="showSpinner" class="spinner-border"></span>
        <b-icon-search v-else class="search-box__search-icon" @click="$emit('search')" />
        <span v-if="feedback" :class="['search-box__feedback', { 'search-box__feedback--valid': validInput }]">
          {{ feedback }}
        </span>
      </div>
    </b-form-group>
  </div>
</template>

<script>
import { BFormGroup, BFormInput } from 'bootstrap-vue';

export default {
  name: 'SearchBox',
  inheritAttrs: false,
  components: {
    'b-form-group': BFormGroup,
    'b-form-input': BFormInput
  },
  props: {
    label: {
      type: String
    },
    value: {
      type: [String, Number]
    },
    validInput: {
      type: Boolean
    },
    feedback: {
      type: String
    },
    showSpinner: {
      type: Boolean
    }
  },
  methods: {

    focus() {
      this.$refs.searchInput.focus();
    }
  }
}
</script>

<style lang="scss" scoped>
.search-box {
  .search-box__flex-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    padding: $padding-std-container;
    .search-box__search-icon { 
      font-size: 1.5rem;
      &:hover {
        cursor: pointer;
        color: $color-btn-primary--hover;
      }
    }
    .search-box__input {
      margin-right: .75em;
      /* Reset BS styles */
      padding: 0;
      border: none;
      border-radius: 0;
      /* */
      border-bottom: 1px solid $color-input-border;
      &::placeholder {
        color: $color-input-placeholder;
      }
      &:focus {
        box-shadow: none;
      }
    }
    .search-box__feedback {
      position: absolute;
      bottom: calc(-20px + #{$padding-std-container});
      left: $padding-std-container;
      font-size: $font-size-reduced;
      color: $color-input-error;
      &.search-box__feedback--valid {
        color: $color-input-valid;
      }
    }    
  }
}
</style>
