// use url if defined, otherwise url=baseUrl + tab1= tabId
// baseUrl can be retrieved from current page
// tabLevel=1,2,3
export const tabsConfig = {
  tabLevel: 1,
  activeTabId: 'words',
  tabBars: [{
      label: '单词',
      tabId: 'words',
      // url: "/pages/english/EnglishWord/EnglishWord",
    }, {
      label: '语法',
      tabId: 'yuefa',
      // url: "/pages/english/EnglishGrammer/EnglishGrammer",
    }, {
      label: '阅读',
      tabId: 'reading',
      // url: "/pages/english/EnglishReading/EnglishReading"
    },
    {
      label: 'ChatGPT 助力',
      tabId: 'ChatGPT'
    },
  ],

}

// must match pages.json
export const tabBarPaths = [
  "/pages/english/English/English",
  "/pages/automl/automl", ,
  "/pages/MyProfile/MyProfile",

]