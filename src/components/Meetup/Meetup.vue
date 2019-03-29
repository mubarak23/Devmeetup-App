<template>
<v-container>
	<v-layout row wrap>
		<v-flex xs12>
			<v-card>
				<v-card-title>
					<h3 class="primary--text"> {{ meetup.title }}</h3>
				</v-card-title>
				<v-card-media
						:src="meetup.imageUrl"
						height="250px"
						></v-card-media>
				<v-card-text>
					<div class="primary--text">{{ meetup.date }}</div>
					this is our fisrt meetup this is our fisrt meetup
					this is our fisrt meetup this is our fisrt meetup 
					this is our fisrt meetup this is our fisrt meetup
				</v-card-text>
				<v-card-action>
				<v-btn class="primary">Register</v-btn>
				</v-card-action>			
			</v-card>
		</v-flex>
	</v-layout>
</v-container>
</template>

<script>
export default {
	
	computed: {
		meetup () {
			return this.$store.getters.loadedMeetup(this.$route.params.id),
			console.log(this.$route.params.id)
			
		}
	}
}
</script>