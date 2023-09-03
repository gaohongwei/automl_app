<template>
	<view>
		<AuthedLayout />
		<view>
			Home1
		</view>
	</view>
</template>

<script>
	import AuthedLayout from '@/layouts/AuthedLayout.vue';
	export default {
		components: {
			AuthedLayout // Register the imported component
		},
	};
</script>