if (Meteor.isClient) {
  Meteor.startup(function () {
    new WOW().init();
  });

  // get data from database and
  // display on the index.html
  Template.body.helpers({
    listdb: function() {
      return Listdb.find({});
    }
  });

  Template.member.helpers({

    getImage: function(size) {
      console.log(this);
      return getGravatar(this.email, size)
    }
  });

} // end of (Meteor.isClient)
