<template>
	<div id="wrap">
		<groups :isA='isA' :isB='isB' />
		<section class="groups">
			<div class="everyGroups borderBox">
				<a class="borderBox groupsCur" @click="toggleTab('underWay',$event)" href="javascript:;">拼团进行中</a>
			</div>
			<div class="everyGroups borderBox">
				<a class=" borderBox" @click="toggleTab('fightSuccess',$event)" href="javascript:;">拼团成功</a>
			</div>
			<div class="everyGroups borderBox">
				<a class=" borderBox" @click="toggleTab('collageFailure',$event)" href="javascript:;">拼团失败</a>
			</div>
			<div class="everyGroups borderBox">
				<a class=" borderBox" @click="toggleTab('collageFull',$event)" href="javascript:;">拼团完成</a>
			</div>
		</section>
		<div class="content">
			<!--子组件，显示不同的 tab   is 特性动态绑定子组件    keep-alive 将切换出去的组件保留在内存中-->
			<!--拼团进行中-->
			<underWay :is="currentTab" :hide='hide' :hideBtn='hideBtn' keep-alive></underWay>
			<!--拼团成功-->
			<!--<fightSuccess/>-->
		</div>
	</div>
</template>

<script>
	import groups from '../../components/myGroups/groups'
	import underWay from '../../components/myGroups/underWay'
	import fightSuccess from '../../components/myGroups/fightSuccess'
	import collageFailure from '../../components/myGroups/collageFailure'
	import collageFull from '../../components/myGroups/collageFull'
	export default {
		name: 'box',
		components: {
			'groups': groups,
			'underWay': underWay,
			'fightSuccess': fightSuccess,
			'collageFailure': collageFailure,
			'collageFull': collageFull
		},
		data() {
			return {
				currentTab: 'underWay',
				isA: true,
				isB: false,
				hide:true,
				hideBtn:true
			}
		},
		async asyncData() {

		},
		methods: {
			toggleTab(tab, $event) {
				$($event.target).addClass("groupsCur").parent().siblings().children().removeClass('groupsCur'); //当前的tab
				this.currentTab = tab; // tab 为当前触发标签页的组件名
			}
		}

	}
</script>

<style scoped>
	@import "../../assets/css/base.css";
	@import "../../static/css/myGroups.css";
</style>
