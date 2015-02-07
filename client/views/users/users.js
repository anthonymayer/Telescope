Template[getTemplate('users')].helpers({
  user_item: function () {
    return getTemplate('user_item');
  },
  loadMoreUrl: function() {
    if (this.users.count() < this.users.limit) {
      return null;
    }

    var count = this.users.limit + 20;
    return Router.path('all-users', {limit: count}, {
      query: {
        filterBy: this.filterBy,
        sortBy: this.sortBy
      }
    });
  },
  activeClass: function (link) {
    var parentData = Template.parentData();
    if(link === parentData.filterBy || link === parentData.sortBy)
      return 'active';
  },
  sortBy: function (parameter) {
    return "?filterBy="+Template.parentData().filterBy+"&sortBy="+parameter;
  },
  filterBy: function (parameter) {
    return "?filterBy="+parameter+"&sortBy="+Template.parentData().sortBy;
  },
  filters: function () {
    return [
      'all',
      'invited',
      'uninvited',
      'admin'
    ];
  },
  sorts: function () {
    return [
      {key: 'createdAt', textKey: 'created'},
      {key: 'karma', textKey: 'karma'},
      {key: 'username', textKey: 'username'},
      {key: 'postCount', textKey: 'posts'},
      {key: 'commentCount', textKey: 'comments_'},
      {key: 'invitedCount', textKey: 'invitedcount'}
    ];
  }
});