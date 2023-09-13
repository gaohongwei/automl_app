// piniaStore.js
import {
  defineStore
} from 'pinia';

export const useQueryParamsStore = defineStore('queryParamsStore', {
  state: () => ({
    tab1: "",
    tab2: "",
    tab3: ""
  }),
  actions: {
    setTab({
      tabLevel,
      tabValue
    }) {
      switch (tabLevel) {
        case 1:
          this['tab1'] = tabValue
          this['tab2'] = ""
          this['tab3'] = ""
          break;
        case 2:
          this['tab2'] = tabValue
          this['tab3'] = ""
          break;
        case 3:
          this['tab3'] = tabValue
        default:
          break
      }
    },
  },
});

/*
  https://pinia.vuejs.org/core-concepts/

*/