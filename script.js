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

    $(window).click( () => {
        $('#startDropdown').hide()
        $('#destinationDropdown').hide()
    })
    $('#searchBtn').on('click', event => {
        event.
    })
})
