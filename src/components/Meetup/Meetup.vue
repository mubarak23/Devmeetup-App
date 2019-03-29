<template>
<v-container>
	<v-layout row wrap>
		<v-flex xs12>
			<v-card>
				<v-card-title>
					<h3 class="primary--text">My Meetup</h3>
				</v-card-title>
				<v-card-media
						src="
						https://media.timeout.com/images/100559575/630/472/image.jpg"
						height="250px"
						></v-card-media>
				<v-card-text>
					<div class="primary--text">17th July, 2019</div>
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
	props: ['id'],
	computed: {
		meetup () {
			return this.$store.getters.loadedMeetup(this.id)
		}
	}
}
</script>