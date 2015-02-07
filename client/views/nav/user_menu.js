Template[getTemplate('userMenu')].helpers({
  menuItem: function () {
    return getTemplate('menuItem');
  },
  isLoggedIn: function () {
    return !!Meteor.user();
  },
  name: function () {
    return getDisplayName(Meteor.user());
  },
  dropdownItems: function () {
    return [
      {
        route: 'user_profile',
        label: 'profile',
        // pathFor will automatically pick this up to generate the url
        data: {_idOrSlug: Meteor.user().slug}
      },
      {
        route: 'user_edit',
        label: 'edit_account',
        // pathFor will automatically pick this up to generate the url
        data: {slug: Meteor.user().slug}
      },
      {
        route: 'signOut',
        label: 'sign_out'
      }
    ];
  },
});