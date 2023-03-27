$(function() {
    const $result = $('#result')
    const $survey = $('#survey')
    $result.hide() // hide result on load
    $('form').on('submit', (e) => {
        e.preventDefault()
        const form = e.target
        let arr = []
        for (i = 1; i < 11; i++) { 
        // loop through survey answers and push values into array
        arr.push(parseInt(form.elements[`q${i}`].value))
        }
        let body = JSON.stringify(arr)
        displayMatchedFriend(body)
        $survey.hide()
        $result.show()
        })
        
    async function displayMatchedFriend(body) {
        const headers = { "Content-Type": "application/json" }
        let response = await fetch('/newMatch', {method : 'POST', body, headers})
        let data  = await response.json()
        $('#friendPhoto').attr('src', data.photo)
        $('#matchedFriend').text(data.name)
    }
})