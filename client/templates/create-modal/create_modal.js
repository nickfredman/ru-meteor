// create_modal Javascript


	if(Meteor.isClient){


		//Add a new member - initial form display
		Template.body.events({
    		"click .createOverlay": function(e) {
      			$('#overlay').css('display','block');
      			$('.create').css('display','block');
    		},

      // Add a new member - trigger is submit button
      		"click .createBtn": function(e) {
     			 e.preventDefault();
     			 $('#overlay').css('display','none');
      			 $('.create').css('display','none');

        // get new member data from form
      
      var firstname = $('#firstName').val();
      var lastname = $('#lastName').val();
      var email = $('#email').val();
      var priorWork = $('#priorWork').val();
      var aspirations = $('#aspirations').val();
      var skills = $('#skills').val();
      var twitter = $('#twitter').val();
      var linkIn = $('#linkIn').val();
      var faceBook = $('#faceBook').val();
        
        // add newmember data to db
      
      Listdb.insert({
        name: {
          firstName:firstname,
          lastName: lastname
        },
        email:email,
        priorWork:priorWork,
        aspirations: aspirations,
        skills: skills,
        contact: {
          twitter:twitter,
          linkIn:linkIn,
          faceBook:faceBook
        }
      });      
    },
      
      // Add a new member - close the form via X
      "click .closeCreate": function(e) {
      e.preventDefault();
      $('#overlay').css('display','none');
      $('.create').css('display','none');
    }

		
		 }); // end of Template.body.events
	} // end of if (Meteor.isClient)





