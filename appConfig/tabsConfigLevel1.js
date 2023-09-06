// use url if defined, otherwise url=baseUrl + tab1= tabId
// baseUrl can be retrieved from current page
// tabLevel=1,2,3
export const tabsConfig = {
  tabLevel: 1,
  activeTabId: 'english',
  tabBars: [{
      label: '英语',
      tabId: "english",
      url: "/pages/english/English"
    }, {
      label: '企业人工智能',
      tabId: 'automl',
      url: "/pages/automl/automl"
    },
    {
      label: '我的',
      tabId: 'myInfo',
      url: "/pages/automl/automl"
    },
  ],
}

// must match pages.json
export const tabBarPaths = [
  "/pages/english/English",
  "/pages/automl/automl", ,
  "/pages/MyProfile/MyProfile",

]