<template>
<v-container>
	<v-layout row wrap>
		<v-flex xs12 sm10 md8 offset-sm1 offset-md2>
			<v-card class="info">
				<v-container fluid>
					<v-layout row>
					<v-flex xs5 sm4 md3>
						<v-card-media
						src="
						https://media.timeout.com/images/100559575/630/472/image.jpg"
						height="150px"
						></v-card-media>
					</v-flex>
					<v-flex xs7 sm8 md9>
						<v-card-title primary-title>
						  <div>
						  	<h4 class="white--text md-0">My Meetup</h4>
							<div> 30th May 2019</div>
						  </div>
						</v-card-title>
						<v-card-actions>
						<v-btn flat to="/meetups/123ertyh">
							<v-icon left>arrow_forward</v-icon>
						 View Meetups </v-btn>	
						</v-card-actions>
					</v-flex>
					</v-layout>
				</v-container>
			</v-card>
		</v-flex>
	</v-layout>
</v-container>

</template>