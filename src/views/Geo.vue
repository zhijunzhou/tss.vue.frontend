<template>
	<div class="page-content">
		<div class="amap-page-container">
			<el-amap vid="amapDemo" :amap-manager="amapManager" :zoom="zoom" :plugin="plugin" :events="events">
				<el-amap-marker v-for="marker in markers" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
				<el-amap-ground-image v-for="groundimage in groundimages" :url="groundimage.url" :bounds="groundimage.bounds" :events="groundimage.events"></el-amap-ground-image>
			</el-amap>

			<div class="toolbar">
				<button type="button" name="button" v-on:click="addMarker">add marker</button>
			</div>
		</div>
	</div>
</template>

<script>
import VueAMap from 'vue-amap'

const amapManager = new VueAMap.AMapManager()

export default {
	name: 'Geo',
	data () {
        return {
			amapManager,
			zoom: 12,
			center: [121.59996, 31.197646],
			groundimages: [{
				url: 'https://faas.elemecdn.com/desktop/media/img/appqc.95e532.png',
				bounds: [[121.5273285, 31.21515044], [122.9273285, 32.31515044]]
			}],
			markers: [{
				position: [121.59996, 31.197646],
				events: {
					click: () => {
						alert('click marker')
					},
					dragend: (e) => {
						this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
					}
				},
				visible: true,
				draggable: true
			}],
			events: {
				init: (o) => {
					console.log(o.getCenter())
					o.getCity(result => {
						console.log(result)
					})
				},
				'moveend': () => {
				},
				'zoomchange': () => {
				},
				'click': (e) => {
				console.log('map clicked')
				}
			},
			plugin: ['ToolBar', {
				pName: 'MapType',
				defaultType: 0,
				events: {
					init (o) {
						console.log(o)
					}
				}
			}]
        }
    },
	methods: {
		addMarker () {
			const marker = {
				position: [121.59996 + (Math.random() - 0.5) * 0.02, 31.197646 + (Math.random() - 0.5) * 0.02]
			}
			console.log(marker)
			this.markers.push(marker)
		}
	}
}
</script>
<style>
#amapDemo {
	height: 500px;
}
</style>
