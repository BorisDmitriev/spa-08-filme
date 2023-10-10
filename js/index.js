// your code here
const lis = document.getElementsByTagName('li')
for (const el of lis) {
    el.addEventListener('mouseover', e => {
        if( e.currentTarget.style.backgroundColor !== 'red' )
           e.currentTarget.style.backgroundColor = 'deepskyblue'
    })

    el.addEventListener('mouseleave', e => {
        if( e.currentTarget.style.backgroundColor !== 'red' )
           e.currentTarget.style.backgroundColor = 'blue'
    })

    el.addEventListener('click', e => {

        for (const el2 of lis) { 
            el2.style.backgroundColor = 'blue' 
        }

        for (const section of document.getElementsByTagName('section')) {
            section.classList.remove('active')

            // console.log(e.currentTarget.innerText);
            // console.log(section.querySelector('h3').innerText);

            if( e.currentTarget.innerText === section.querySelector('h3').innerText ){
                section.classList.add('active')
            }
        }

        e.currentTarget.style.backgroundColor = 'red'
    })
}