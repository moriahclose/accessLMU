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

    $('.start').on('click', event => {
        console.log($(event.target).text())
        $('#startLocationInput').val($(event.target).text())
    })

    $('.end').on('click', event => {
        console.log($(event.target).text())
        $('#endLocationInput').val($(event.target).text())
    })

    $(window).click( () => {
        $('#startDropdown').hide()
        $('#destinationDropdown').hide()
    })
})
