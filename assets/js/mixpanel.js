$(function() {
    mixpanel.track('Page Loaded')
    $('#mc-embedded-subscribe').click(function() {
        mixpanel.track('Signup Clicked')
    })
})
