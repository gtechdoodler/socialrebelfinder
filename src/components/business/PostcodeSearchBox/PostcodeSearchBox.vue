<template>
  <v-searchbox class="postcode-search-box"
    ref="searchBox" placeholder="Enter Postcode" maxlength="8"
    v-model="searchInput"
    :validInput="isValidInput && isValidSearch"
    :feedback="feedback"
    :showSpinner="isSearching"
    @keydown="onInputKeyDown"
    @keydown.enter="onInputKeyDownEnter"
    @search="onSearch" />
</template>

<script>
import { mapState } from 'vuex';
import { validatePostcode } from 'utils/addressUtils.js';
import SearchBox from 'components/common/SearchBox';

export default {
  name: 'PostcodeSearchBox',
  components: {
    'v-searchbox': SearchBox
  },
  data: () => ({
    searchInput: '',
    isValidInput: true,
    isValidSearch: true
  }),
  computed: {

    // TODO: Replace literals with namespaced consts
    ...mapState('address', [
      'isSearching'
    ]),

    // computed: feedback
    // purp: To provide visual feedback status. An invalid 'search' message
    // will always take priority
    feedback() {
      return !this.isValidSearch ? 'Postcode not found' :
        !this.isValidInput ? 'Invalid postcode format' : '';
    }    
  },
  methods: {

    // Public

    focus() {
      this.$refs.searchBox.focus();
    },

    // Internal

    search() {
      this.isValidInput = validatePostcode(this.searchInput);
      if (!this.isValidInput) return;
      this.$store.dispatch('address/search', { postcode: this.searchInput })
        .then(() => {
          // Clearing the search input after a successful search, but
          // not sure this is the best UX decision. Perhaps a little component
          // refactor is needed, and only clearing input when 'Report Them' is submitted in
          // the next step. This would be a good AB test.
          this.searchInput = '';
        })
        .catch(error => {
          this.isValidSearch = false;
          this.focus();
        }
      );
    },

    // handler: onInputKeyDown
    // purp: Here, the user is obviously typing, so just want to reset state
    // This could have been a watch, however, I want to investigate
    // performance of watch observers vs event handlers
    onInputKeyDown(e) {
      this.isValidInput = true;
      this.isValidSearch = true;
    },

    onInputKeyDownEnter(e) {
      if (e.target && e.target.blur) e.target.blur();
      this.search();
    },

    onSearch() {
      this.search();
    }
  }
}
</script>
