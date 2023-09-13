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
      const tabKey = `tab${tabLevel}`;
      console.log('tabKey', tabKey)
      console.log('tabValue', tabValue)
      this[tabKey] = tabValue; // Corrected way to modify the states
    },
  },
});

/*
  https://pinia.vuejs.org/core-concepts/

*/