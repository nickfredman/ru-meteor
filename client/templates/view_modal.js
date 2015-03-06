// view_modal.js


// collect individual data based on selected person
 if(Meteor.isClient){

// get specific person ID

 	Template.viewModal.helpers({
    	viewamember: function() {
     	 var memberId = Session.get('selectedMember');
        var data = Listdb.find({_id:memberId}).fetch();
        var testemail = getGravatar(data.email, 150);

    	  return (
        {
        name: {
          firstName: data.name.firstName,
          lastName: data.name.lastName
        },
        email:testemail,
        priorWork:data.priorWork,
        aspirations: data.aspirations,
        skills: data.skills,
        contact: {
          twitter:data.contact.twitter,
          linkIn:data.contact.linkIn,
          faceBook:data.contact.faceBook
        }
        }); 
    }
  });
  
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

} // end of if (Meteor.isClient)