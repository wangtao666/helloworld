<template>
	<div>
		<groups :isA='isA' :isB='isB' />
		<section class="groups">
			<div class="everyGroups borderBox">
				<a class="borderBox groupsCur" @click="toggleTab('underWay',$event)" href="javascript:;">参团进行中</a>
			</div>
			<div class="everyGroups borderBox">
				<a class=" borderBox" @click="toggleTab('offeredSuccess',$event)" href="javascript:;">参团成功</a>
			</div>
			<div class="everyGroups borderBox">
				<a class=" borderBox" @click="toggleTab('collageFailure',$event)" href="javascript:;">参团失败</a>
			</div>
		</section>
		<div class="content">

			<underWay :is="currentTab"  keep-alive></underWay>

		</div>
	</div>
</template>

<script>
	import groups from '../../components/myGroups/groups'
	import underWay from '../../components/myGroups/underWay'
	import offeredSuccess from '../../components/myGroups/offeredSuccess'
	import collageFailure from '../../components/myGroups/collageFailure'
	export default {
		name: 'fightGroups',
		components: {
			'groups': groups,
			'underWay': underWay,
			'offeredSuccess': offeredSuccess,
			'collageFailure': collageFailure,

		},
		data() {
			return {
				isA: false,
				isB: true,
				currentTab: 'underWay',
			
			}
		},
		methods: {
			toggleTab(tab, $event) {
				$($event.target).addClass("groupsCur").parent().siblings().children().removeClass('groupsCur'); //当前的tab
				this.currentTab = tab; // tab 为当前触发标签页的组件名
			}
		}

	}
</script>

<style>

</style>