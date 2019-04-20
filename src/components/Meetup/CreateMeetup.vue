<template>
<v-container>
	<v-layout row>
		<v-flex xs12>
			<h2 class="primary--text">Create New Meetup</h2>
		</v-flex>
	</v-layout>
	<v-layout row>
		<v-flex xs12>
			<form @submit.prevent="onCreateMeetup">
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
						<img :src="imageUrl" height="200">
					</v-flex>
				</v-layout>
				<v-layout row>
					<v-flex xs12 sm6 offset-sm3>
						<v-textarea 
						name="description"
						 label="Description"
						 v-model ="description"
						 id="description"></v-textarea>
					</v-flex>
				</v-layout>
				<v-layout row>
					<v-flex xs12 sm6 offset-sm3>
						<v-btn class="primary"
						type="submit"
						 :disabled="!formIsvalid">Create Meetup</v-btn>
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
		},

		computed: {
			formIsvalid () {
				return this.title !== '' 
				&& this.location !== ''
				&& this.description !== ''
				 && this.imageUrl !== '';
			}	
		},
		methods: {
			onCreateMeetup() {
				const meetupData = {
				title: this.title,
				location: this.location,
				description: this.description,
				imageUrl: this.imageUrl,
				date: new Date()
				}
				this.$store.commit('createMeetup', meetupData);		
			}
		}

	}	
</script>