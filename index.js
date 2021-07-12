let firstHeader = document.getElementById('meet')

firstHeader.addEventListener('click', ()=> {
    let dis = firstHeader.innerHTML += `
    <div>
    <h3>Tyler & Kelli are a creative couple who have a love of faith, family & art!</h3>
    </div>
    `
})


let emailSub = document.querySelector('#emailSub').addEventListener('submit', (e)=> {
    e.preventDefault()
    alert('Subscribed!')
})
