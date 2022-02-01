const title = document.querySelector('.title_of_book')
const author = document.querySelector('.author_of_book')
const secret = document.querySelector('.secret_of_book')
const date = document.querySelector('.date_of_book')
const btn = document.querySelector('.btn')
const tbody = document.querySelector('.tbody_of_table')

btn.addEventListener('click',(e)=>{
    e.preventDefault()

    if(title.value == '' || author.value == '' || secret.value == '' || date.value == ''){
        alert('please fill all the input')
    }else{

        const newRow = document.createElement('tr')

        const newTitle = document.createElement('td')
        newTitle.innerHTML = title.value
        newRow.appendChild(newTitle)

        const newAuhor = document.createElement('td')
        newAuhor.innerHTML = author.value
        newRow.appendChild(newAuhor)


        const newSecret = document.createElement('td')
        newSecret.innerHTML = secret.value

        newRow.appendChild(newSecret)

        const newDate = document.createElement('td')
        newDate.innerHTML = date.value

        newRow.appendChild(newDate)
        
        tbody.appendChild(newRow)


    }
})