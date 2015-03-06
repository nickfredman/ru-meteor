// view_modal.js


// collect individual data based on selected person
 if(Meteor.isClient){

// get specific person ID

 	// Template.viewModal.helpers({
  //   	viewamember: function() {
  //    	 var memberId = Session.get('selectedMember');
       //return Listdb.find({_id:memberId}).fetch();
       //var data = Listdb.findOne(memberId);
       //console.log("data:", data);
        // var data = Listdb.find({_id:memberId}).fetch();
        // console.log("email: ", data[0].email);
        // var testemail = getGravatar(data[0].email, 150);
        // console.log("testemail:", testemail);
        //return true;
       //  var dataformat = 
       //  {
       //    name: {
       //      firstName: data[0].name.firstName,
       //      lastName: data[0].name.lastName
       //    },
       //  email:testemail,
       //  priorWork:data[0].priorWork,
       //  aspirations: data[0].aspirations,
       //  skills: data[0].skills,
       //  contact: {
       //    twitter:data[0].contact.twitter,
       //    linkIn:data[0].contact.linkIn,
       //    faceBook:data[0].contact.faceBook
       //    }
       //  };
       //  console.log(dataformat);
    	  // return dataformat; 
  //   }
  // });
  
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