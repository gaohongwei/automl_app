- ChatGPT
  - ask 
    有没有办法让底部tabBar出现所有页面？
    为什么？因为它是一级导航吗。
    好像不行，什么别的思路比较合理呢？
	- Ask3
		I have many pages.
    They are classified into two level of tabs.
		All pages under the same tabs have the same tabs.
		When  a tab of first level is clicked, its page rendered.
		Create a common components TopTab  to handle this
		Please use uni-app
    please do not use <component :is="activeTabId" />
    use tabsConfig as props for TopTab    
		export const tabsConfig = {
		  tabLevel: 1,
		  activeTabId: 'english',
		  tabBars: [{
		    label: '英语',
		    tabId: 'english',
		  }, {
		    label: 'AI',
		    tabId: 'automl',
		  }],
		}
    
	- Ask2
		-  Please implement a common  TabNavigator  
			each tab maps to a component.
			const tabArray= [{tabId: 'tab10', tabLabel: 'label10', tabLevel: 1}]
			The call should be `<TabNavigator tabs="tabArray"  activeTab="tab12" />`
			The tabs on the same page have the same base url. but different query params
			The component mapped to one tab may contains <TabNavigator tabs="tabArray" />
			The query parameter for the first layer be tab1 = tab10, 
			The query parameter for the second layer should be tab1 = tab10 & tab2 = tab20
			do not use dynamic component

			use a routing-based approach 
			all tabs are on the same page and each tab 
			corresponds to a different query paramter	
	
	- TabNavigator V1
		A page have url
		There are several tabs on the page.
		When a tab is clicked, it navigates to the new path. The new path is created with current url, 
		plus a query params {tab1: currenttabId}.
		A new  page will be loaded according the path and params. 
		Please implement a common, reusable component TabNavigator 
		Do not use <component :is="" />
		Please write uni-app code
		
		
		const tabArray= [{tabId: 'tab10', tabLabel: 'label10', tabLevel: 1}]	
		The call should be `<TabNavigator tabs="tabArray"  activeTab="tab12" />`
				
		Each tab is associated with query params.  The key of params is 'tab1', and its value is tabId
		The call should be `<TabNavigator tabs="tabArray"  activeTab="tab12" />`
		The tabs on the same page have the same base url. but different query params
		Please implement a common, reusable component TabNavigator 
		do not use dynamic component
		This is for uni-app
					
		The component mapped to one tab may contains <TabNavigator tabs="tabArray" />
		The query parameter for the first layer be tab1 = tab10, 
		The query parameter for the second layer should be tab1 = tab10 & tab2 = tab20
		do not use dynamic component
		use a routing-based approach 
		all tabs are on the same page and each tab 
		corresponds to a different query paramter
		
import Tab10 from '@/components/Tab10.vue';
import Tab20 from '@/components/Tab20.vue';
const tabs = [
	{tabId: 'tab10', tabLabel: 'label10', component: Tab10},
	{tabId: 'tab20', tabLabel: 'label20', component: Tab20},			
]
How can I render the components defined in tabs, which can be defined randomly?
Please remember,  <component :is="getActiveComponent" /> is not an option