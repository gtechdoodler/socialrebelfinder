<template>
  <v-searchbox class="postcode-search-box"
    ref="searchBox" placeholder="Enter Postcode" maxlength="8"
    v-model="searchInput"
    :validInput="isValidPostcode"
    :feedback="feedback"
    :showSpinner="isSearching"
    @keydown.enter="onInputKeyDownEnter"
    @search="onSearch" />
</template>

<script>
import { getState, mapState } from 'vuex';
import { validatePostcode } from 'utils/addressUtils.js';
import SearchBox from 'components/common/SearchBox';

export default {
  name: 'PostcodeSearchBox',
  components: {
    'v-searchbox': SearchBox
  },
  data: () => ({
    searchInput: '',
    isValidPostcode: false,
    feedback: ''
  }),
  watch: {
    searchInput: {
      handler(val) {
        this.isValidPostcode = validatePostcode(this.searchInput);
        this.feedback = this.isValidPostcode ? 'Looks good' : '';
      }
    }
  },
  computed: {

    // TODO: Replace literals with namespaced consts
    ...mapState('address', [
      'isSearching'
    ])
  },
  methods: {

    // Public

    focus() {
      this.$refs.searchBox.focus();
    },

    // Internal

    setFeedback() {
      this.feedback = !this.isValidPostcode
        ? 'Invalid postcode format' 
        : '';
    },

    search() {
      if (!this.isValidPostcode) {
        this.focus(); return;
      }
      this.$store.dispatch('address/search', { postcode: this.searchInput }).catch(error => {
        this.feedback = 'Postcode does not exist';
        this.focus();
      });
    },

    onInputKeyDownEnter(e) {
      if (e.target && e.target.blur) e.target.blur();
      this.setFeedback();
      this.search();
    },

    onSearch() {
      this.setFeedback();
      this.search();
    }
  }
}
</script>
