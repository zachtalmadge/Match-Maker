$(function() {
    const $people = $('#people')

    const changeColors = () => { // color changer function
        let r = Math.floor( Math.random() * 256 );
        let g = Math.floor( Math.random() * 256 );
        let b = Math.floor( Math.random() * 256 );
        $people.css('color', `rgb(${r}, ${g}, ${b})` );
    }; 

    async function getCount() { // fetch total amount of users in database
        let response = await fetch("/count")
        let count    = await response.json()
        $people.text(count)
    }
    getCount()
    setInterval(changeColors, 100);
})