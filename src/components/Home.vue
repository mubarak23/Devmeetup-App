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
			{ imageUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwipiY3bt6DhAhVl1eAKHYY5Bt4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.nyhabitat.com%2Fblog%2F2013%2F01%2F14%2Fvisit-times-square-new-york%2F&psig=AOvVaw17SNGC3drDY7OYZH-ourGR&ust=1553711275866307', id:"123ertyh", title: 'meetup in kano' },
			{ imageUrl: 'https://www.google.com/search?tbm=isch&q=new+york&chips=q:new+york,g_1:times+square:m7-QcdMgD4k%3D&usg=AI4_-kR8p1BsWxrU4RlpFl62DbdMR8R8Vg&sa=X&ved=0ahUKEwiOmK7Ut6DhAhUdBWMBHc0mB50Q4lYIKCgB&biw=1366&bih=657&dpr=1#imgrc=0JQJ19wSdipyeM:', id:'145fgty', title: 'meetup in new york'}
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