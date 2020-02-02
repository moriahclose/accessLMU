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
        console.log($('#startLocationInput').val())
        if ( $('#startLocationInput').val() === "St. Roberts" && $('#endLocationInput').val() === "Sacred Heart Chapel") {
            $('#mapImage').attr('src', './assets/mockmap.png')
        } else if ( $('#startLocationInput').val() === "Hannon Library" && $('#endLocationInput').val() === "Leavys") {
            $('#mapImage').attr('src', './assets/mockmap.png')
        } else if ( $('#startLocationInput').val() === "Foley Annex" && $('#endLocationInput').val() === "Burns") {
            $('#mapImage').attr('src', './assets/mockmap.png')
        } else {
            $('#mapImage').attr('src', '')
        }
    })

    $(window).click( () => {
        $('#startDropdown').hide()
        $('#destinationDropdown').hide()
    })

})
