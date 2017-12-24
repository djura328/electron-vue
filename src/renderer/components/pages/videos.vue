<template>
		<v-layout row wrap>
			    <v-flex v-for="(video, key) in videos" :key="key" md4 class="px-2 pb-2">
			      <v-card>
		            <video width="100%" controls>
					  <source :src="video.url" type="video/mp4">
					</video>
					 <v-card-title primary-title>
						<div class="custom-title">
							{{video.title}}
						</div>
					</v-card-title>
			      </v-card>
			    </v-flex>
			    <div v-if="loader" class="loader-custom"></div>
		</v-layout>
</template>

<script>
	import axios from 'axios'

	export default{
    data () {
	    return {   
	    	images:[],
	    	show: false,
	    	videos: [],
	    	loader: false
	     }
	},
	created () {
		this.loader = true
		axios.get('https://api.gettyimages.com/v3/search/videos', {headers: {'Api-Key': 'c4yqk3dnxfqrua8w3bj444qh'}
		})
		.then(response => {
			response.data.videos.forEach(item=>{
				this.videos.push({
					'url': item.display_sizes[0].uri,
					'title': item.title,
					'caption': item.caption
				})
			})
			this.loader = false
		}).catch(error => {
			console.log(error)
		})
	},
	methods:{
		open(id){
			console.log(id)
		}
	}
}
</script>

<style>
	.loader-custom{
			position: absolute;
			left: 50%;
			top: 50%;
			z-index: 1;
			width: 150px;
			height: 150px;
			margin: -75px 0 0 -75px;
			border: 16px solid #f3f3f3;
			border-radius: 50%;
			border-top: 16px solid #3498db;
			width: 120px;
			height: 120px;
			-webkit-animation: spin 2s linear infinite;
			animation: spin 2s linear infinite;
	}
	@-webkit-keyframes spin {
	  0% { -webkit-transform: rotate(0deg); }
	  100% { -webkit-transform: rotate(360deg); }
	}

	@keyframes spin {
	  0% { transform: rotate(0deg); }
	  100% { transform: rotate(360deg); }
	}
</style>