<template>
<v-container>
	<v-layout row>
		<v-flex xs12>
			<h2 class="primary--text">Create New Meetup</h2>
		</v-flex>
	</v-layout>
	<v-layout row>
		<v-flex xs12>
			<form>
				<v-layout row>
					<v-flex xs12 sm6 offset-sm3>
						<v-text-field 
						name="title" 
						label="Title" 
						v-model="title"
						id="title"></v-text-field>
					</v-flex>
				</v-layout>
				<v-layout row>
					<v-flex xs12 sm6 offset-sm3>
						<v-text-field 
						name="location"
						v-model="location"
						 label="Location" 
						 id="location"></v-text-field>
					</v-flex>
				</v-layout>
				<v-layout row>
					<v-flex xs12 sm6 offset-sm3>
						<v-text-field 
						name="imageUrl"
						v-model="imageUrl"
						 label="image Url" 
						 id="image-url"></v-text-field>
					</v-flex>
				</v-layout>
				<v-layout row>
					<v-flex xs12 sm6 offset-sm3>
						<img :src="imageUrl">
					</v-flex>
				</v-layout>
				<v-layout row>
					<v-flex xs12 sm6 offset-sm3>
						<v-text-field 
						name="description"
						 label="Description"
						 multi-line 
						 v-model ="title"
						 id="description"></v-text-field>
					</v-flex>
				</v-layout>
			</form>
		</v-flex>
	</v-layout>		
</v-container>

</template>

<script>
	export default {
		data () {
			return {
				title: '',
				location: '',
				description: '',
				imageUrl: ''
			}
		}
	}	
</script>