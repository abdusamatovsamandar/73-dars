let elUserList = document.querySelector('.list')
let elUserTemplate = document.querySelector('.user-template').content
let newUserFragment = new DocumentFragment()

// console.log(elList, elUserTemplate)

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        data.forEach(user => {
            let newUser = elUserTemplate.cloneNode(true)
            
            newUser.querySelector('.user-id').textContent = user.id
            newUser.querySelector('.user-name').textContent = user.name
            newUser.querySelector('.user-username').textContent = user.username
            newUser.querySelector('.user-email').textContent = user.email
            newUser.querySelector('.user-street').textContent = user.address.street
            newUser.querySelector('.user-suite').textContent = user.address.suite
            newUser.querySelector('.user-city').textContent = user.address.city
            
            newUserFragment.appendChild(newUser)
        })
    } catch (error) {
        console.error(error.message)
    }

    elUserList.appendChild(newUserFragment)
}
getUsers()