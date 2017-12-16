<template>
	<v-data-table
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td style='text-align:right'>{{ props.item.iso_alpha_2 }}</td>
      <td style='text-align:right'>{{ props.item.iso_alpha_3 }}</td>
    </template>
  </v-data-table>
</template>
<script>
	import axios from 'axios'
	export default{
  data () {
    return {
      headers: [
        {
	          text: 'Name of Countries',
	          align: 'left',
	          sortable: false,
	          value: 'name'
        },
        {text: 'iso_alpha_2'},
        {text: 'iso_alpha_3'}
      ],
      items: []
    }
  },
	  created () {
	    axios.get('https://api.gettyimages.com/v3/countries', {headers: {'Api-Key': 'c4yqk3dnxfqrua8w3bj444qh'}})
	      .then(response => {
	        console.log(response.data.countries)
	        let countries = response.data.countries
	        countries.forEach(item => {
	          this.items.push({'value': false, 'name': item.name, 'iso_alpha_2': item.iso_alpha_2, 'iso_alpha_3': item.iso_alpha_3})
	        })
	      }).catch(error => {
	        console.log(error)
	      })
  }
}
</script>