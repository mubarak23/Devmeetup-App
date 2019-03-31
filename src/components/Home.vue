<template>
<v-container>
<v-layout row wrap class="mb-2">
		 <v-flex xs12 sm6 class="text-sm-right text-xs-center">
		 	<v-btn large class="primary" router to="/meetups">Explore Meetup</v-btn>
		 </v-flex>
		 <v-flex xs12 sm6 class="text-sm-left text-xs-center">
		 	<v-btn large router to="/meetup/new" class="primary">Organize Meetup</v-btn>
		 </v-flex>
	</v-layout>
	<v-layout row wrap>
		<v-flex xs12>
			<v-carousel style="cursor: pointer;">
				<v-carousel-item
				v-for="meetup in meetups"
				:src="meetup.imageUrl"
				:key="meetup.id"
				@click="onLoadmeetup(meetup.id)" >
				</v-carousel-item>
			</v-carousel>
		</v-flex>
	</v-layout>
	<v-layout row wrap class="mt-2">
		<v-flex x12 class="text-xs-center">
			<p>Join Our Awesome Meetup!</p>
		</v-flex>
	</v-layout>
</v-container>

</template>

<script>
export default {
	computed: {
		meetups () {
		console.log(this.$store.getters.featuredMeetups);
		return this.$store.getters.featuredMeetups
		}

	},


	methods: {
		onLoadmeetup(id){
			this.$router.push('/meetups/' + id)
		}
	 }
}	

</script>

<style scoped>
	.title {
		position: absolute;
		bottom:50px;

	}
</style>