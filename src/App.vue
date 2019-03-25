<template>
  <v-app>
    <v-toolbar dark class="purple lighten-2">
      <v-toolbar-side-icon @click.native.stop="sideNav =  !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="dark">Dev Meetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
          <v-icon left>supervisor_account</v-icon>
          View Meetups</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-tile>
            <v-list-tile-action>
              <v-icon>supervisor_account</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>View Meeetup</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>

    </main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      manuItems: [
        { icon: 'supervisor_account', title: 'View Meetups' },
        { icon: 'room', title: 'Organize Meetup'},
        { icon: 'person', title: 'Profile'},
        { icon: 'face', title: 'Sign up'},
        { icon: 'lock_opn', title: 'Sign in'}
      ]
    };
  }
};
</script>
