let elList = document.querySelector('.list')
let elCommentTemplate = document.querySelector('.comments-template').content
let newCommentFragment = new DocumentFragment()

// console.log(elList, elCommentTemplate)

async function getComments() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/Comments')
        const data = await response.json()
        data.forEach(comment => {
            let newComment = elCommentTemplate.cloneNode(true)
            
            newComment.querySelector('.comment-id').textContent = comment.id
            newComment.querySelector('.comment-name').textContent = comment.name
            newComment.querySelector('.comment-email').textContent = comment.email
            newComment.querySelector('.comment-body').textContent = comment.body
            
            newCommentFragment.appendChild(newComment)
        })
    } catch (error) {
        console.error(error.message)
    }

    elList.appendChild(newCommentFragment)
}
getComments()