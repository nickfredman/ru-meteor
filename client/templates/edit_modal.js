// Edit a member
  if(Meteor.isClient){

    Template.body.events({
    "click .editOverlay": function(e) {
      $('.view').css('display','none');
      $('.edit').css('display','block');

      var memberId = Session.get('selectedMember');
      var data = Listdb.findOne({_id:memberId});

        // update display on page with new form data
      $('#editfirstName').val(data.name.firstName);
      $('#editlastName').val(data.name.lastName);
      $('#editemail').val(data.email);
      $('#editpriorWork').val(data.priorWork);
      $('#editaspirations').val(data.aspirations);
      $('#editskills').val(data.skills);
      $('#edittwitter').val(data.twitter);
      $('#editlinkIn').val(data.linkIn);
      $('#editfaceBook').val(data.faceBook);
    },

    // submit edited data to db using submit button
      // get edited values from form

      "click .editBtn": function(e) {
        $('.view').css('display','none');
        $('.edit').css('display','block');
          var memberId = Session.get('selectedMember');
          var firstname = $('#editfirstName').val();
          var lastname = $('#editlastName').val();
          var email = $('#editemail').val();
          var priorWork = $('#editpriorWork').val();
          var aspirations = $('#editaspirations').val();
          var skills = $('#editskills').val();
          var twitter = $('#edittwitter').val();
          var linkIn = $('#editlinkIn').val();
          var faceBook = $('#editfaceBook').val();

      // do the actual db update with edited form data

      Listdb.update(memberId,
          {$set: {
            name: {
              firstName: firstname,
              lastName: lastname
          },
            email: email,
            priorWork: priorWork,
            aspirations: aspirations,
            skills: skills,
            contact: {
              twitter: twitter,
              linkIn: linkIn,
              faceBook: faceBook
          }
        }
      });

      $('.edit').css('display','none');
      $('#overlay').css('display','none');
    },

    // Edit a member - pencil - closing
    "click .closeEdit": function( e ) {
      $('.edit').css('display','none');
      $('#overlay').css('display','none');
    },


    // delete selected person
    "click .del-btn": function() {
    var memberId = Session.get('selectedMember');
    Listdb.remove({_id:memberId});
    $('.edit').css('display','none');
    $('#overlay').css('display','none');
    }



     }); // end of Template.body.events
  } // end of if (Meteor.isClient)
