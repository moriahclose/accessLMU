$(document).ready(() => {
    $('#startDropdown').hide()
    $('#destinationDropdown').hide()

    $('#startLocationInput').on('click', event => {
        event.stopPropagation()
        $('#startDropdown').css('display', 'block')
    })

    $('#endLocationInput').on('click', event => {
        event.stopPropagation()
        $('#destinationDropdown').css('display', 'block')
    })

    if ( $('#startLocationInput').text() === "St. Roberts" && $('#endLocationInput').text() === "Sacred Heart Chapel") {
        $('#mapImage').src('./assets/mockmap.png')
    }

    $('#searchBtn').on('click', () => {
        if ( $('#startLocationInput').val() === "St. Roberts" && $('#endLocationInput').val() === "Sacred Heart Chapel") {
            $('#mapImage').attr('src', './assets/St.Robs to Sacred Heart2.png')
        } else if ( $('#startLocationInput').val() === "Hannon Library" && $('#endLocationInput').val() === "University Hall") {
            $('#mapImage').attr('src', './assets/Library to Uhall.png')
        } else if ( $('#startLocationInput').val() === "Doolan" && $('#endLocationInput').val() === "St. Roberts") {
            $('#mapImage').attr('src', './assets/Doolan to St.Robs.png')
        } else {
            $('#mapImage').attr('src', '')
        }
    })

    $(window).click( () => {
        $('#startDropdown').hide()
        $('#destinationDropdown').hide()
    })

})
