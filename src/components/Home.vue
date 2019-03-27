<template>
<v-container>
<v-layout row wrap class="mb-2">
		 <v-flex xs12 sm6 class="text-sm-right text-xs-center">
		 	<v-btn large class="primary" router to="/meetup">Explore Meetup</v-btn>
		 </v-flex>
		 <v-flex xs12 sm6 class="text-sm-left text-xs-center">
		 	<v-btn large router to="/createmeetup" class="primary">Organize Meetup</v-btn>
		 </v-flex>
	</v-layout>
	<v-layout row wrap>
		<v-flex xs12>
			<v-carousel>
				<v-carousel-item
				v-for="meetup in meetups"
				:src="meetup.imageUrl"
				:key="meetup.id" >
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
	data () {
	return {
		meetups: [
			{ imageUrl: 'https://media.timeout.com/images/100559575/630/472/image.jpg', id:"123ertyh", title: 'meetup in kano' },
			{ imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1475261147%2Ftimes-square-nyc-food-EAT0916.jpg%3Fitok%3DGpQTB9qQ&w=450&c=sc&poi=face&q=85', title: 'meetup in new york'}
		]
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