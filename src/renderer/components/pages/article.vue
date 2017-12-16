<template>
		<v-layout row wrap>
		
			    <v-flex v-for="(image, key) in images" :key="image.url" md4 class="px-2 pb-2">
			      <v-card>
			        <v-card-media :src="image.url" height="200px">
			        </v-card-media>
			        <v-card-title primary-title>
			          <div>
			            <h3 class="headline mb-0">{{image.title}}</h3>
			            <div>{{image.asset_family}}</div>
			          </div>
			        </v-card-title>
			        <v-card-actions>
			          <v-btn flat color="orange">Share</v-btn>
			          <v-btn flat color="orange">Explore</v-btn>
			          <v-spacer></v-spacer>
			          <v-btn icon @click.native="image.show = !image.show">
			            <v-icon>{{ image.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
			          </v-btn>
			        </v-card-actions>
			        <v-slide-y-transition>
			          <v-card-text v-show="image.show">
		            	{{image.caption}}
			          </v-card-text>
			        </v-slide-y-transition>
			      </v-card>
			    </v-flex>
		</v-layout>
</template>

<script>
	import axios from 'axios'
	export default{
  data () {
	    return {   
	    	images:[],
	    	show: false
	     }
	},
	created () {
		axios.get('https://api.gettyimages.com/v3/search/images', {headers: {'Api-Key': 'c4yqk3dnxfqrua8w3bj444qh'}
		})
		.then(response => {
			console.log(response.data.images)
			let i = 0
			response.data.images.forEach(item=>{
				this.images.push({
					'url': item.display_sizes[0].uri,
					'title': item.title,
					'caption': item.caption,
					'asset_family': item.asset_family,
					'show': false
				})
				i++
			})
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