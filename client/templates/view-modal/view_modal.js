

if(Meteor.isClient){

  Template.body.events({
    //View a member
    "click .viewOverlay": function(e) {
      $('#overlay').css('display','block');
      $('.view').css('display','block');
      var d = Blaze.getData(event.target);
      Session.set('selectedMember', d._id);
    },

    // View a member - closing
    "click .closeView": function(e) {
      $('#overlay').css('display','none');
      $('.view').css('display','none');
    }
   }); // end of Template.viewModal.helpers



   Template.viewModal.helpers({
       viewamember: function() {
        var memberId = Session.get('selectedMember');
      //return Listdb.find({_id:memberId}).fetch();
      //var data = Listdb.findOne(memberId);
      //console.log("data:", data);
       var data = Listdb.findOne({_id:memberId});
       console.log("email: ", data.email);
       var testemail = getGravatar(data.email, 150);
       console.log("testemail:", testemail);
       //return true;
       data.email = testemail;
       return data;
    }
  });

} // end of (Meteor.isClient)