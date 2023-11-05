console.info('My resume V0.1.2')

$(document).ready(function () {
  $('h2.logoText').css('display', 'none')
  $('h2.logoText').fadeIn(5000)

  $('.showMoreOne').click(function (e) { 
    $('.workDescriptionOne').show('slow')
    $('.showMoreOne').fadeOut('slow')
  })
      
  $('.close_workDescription').click(function (e) {
    $('.workDescriptionOne').hide('slow')
    $('.showMoreOne').show('slow')
  })

  $('.showMoreTwo').click(function (e) { 
    $('.workDescriptionTwo').show('slow')
    $('.showMoreTwo').fadeOut('slow')
  })
      
  $('.close_workDescription').click(function (e) {
    $('.workDescriptionTwo').hide('slow')
    $('.showMoreTwo').show('slow')
  })

  $('.showMoreThree').click(function (e) { 
    $('.workDescriptionThree').show('slow')
    $('.showMoreThree').fadeOut('slow')
  })
      
  $('.close_workDescription').click(function (e) {
    $('.workDescriptionThree').hide('slow')
    $('.showMoreThree').show('slow')
  })

  $('.showMoreFour').click(function (e) { 
    $('.workDescriptionFour').show('slow')
    $('.showMoreFour').fadeOut('slow')
  })
      
  $('.close_workDescription').click(function (e) {
    $('.workDescriptionFour').hide('slow')
    $('.showMoreFour').show('slow')
  })

})