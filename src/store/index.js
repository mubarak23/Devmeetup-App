import Vue from 'vue';
import Vuex from 'vuex';

//use vuex in our uve app
Vue.use(Vuex)


export const store = new Vuex.Store({

	state: {
		loadedMeetups:  [
			{ imageUrl: 'https://media.timeout.com/images/100559575/630/472/image.jpg',
			 id:"1", title: 'meetup in kano', date: '2019-02-27 ' },
			{ imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1475261147%2Ftimes-square-nyc-food-EAT0916.jpg%3Fitok%3DGpQTB9qQ&w=450&c=sc&poi=face&q=85'
			, id:"2", title: 'meetup in new york', date: '2019-03-20'}
		],
		user: {
			id: '123ert',
			registeredmeetups: ['123ertyh']
		}

	},

	muatations: {},

	actions: {},

	getters: {
		loadedMeetups (state){
			return state.loadedMeetups.sort((meetupA, meetupB) => {
					return meetupA.date > meetupB.date
			})
		},

		featuredMeetups (state, getters){
			return getters.loadedMeetups.slice(0, 5);
		},

		loadedMeetup (state) {
			return (meetupId) => {
				return state.loadedMeetups.find((meetup) => {
					return meetup.id === meetupId
				})
			}
		}

	}
})