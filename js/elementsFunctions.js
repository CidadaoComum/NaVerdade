const createElement = (elementName, innerText, attributes) => {
    
    const element = document.createElement(elementName)
    const attributesAsArray = Object.entries(attributes)

    attributesAsArray.forEach(([key, value]) => element.setAttribute(key, value))

    element.innerText = innerText

    return element

}

const renderHotNotices = () => {

    var hotNoticesDiv = document.getElementById('hotNotices')

    if(hotNoticesDiv){
        hotNotices.forEach((notice) => {
            const title = createElement('b', notice.title, {})
            const description = createElement('p', notice.description, {class: 'text-secondary'})
            const noticeElement = createElement('div', '', { 
                class: 'p-4 rounded-4 box-1 notice d-flex flex-column' 
            })
            noticeElement.appendChild(title)
            noticeElement.appendChild(description)
            hotNoticesDiv.appendChild(noticeElement)
        })
    }

}
renderHotNotices()

const renderPoliticians = () => {

    var div = document.getElementById('politicians')

    if(div){
        politicians.forEach((p) => {
            const title = createElement('b', p.name, {
                class: 'p-3'
            })
            const imgDiv = createElement('div', '', {
                id: 'imgDiv'
            })
            const img = createElement('img', '', {
                class: 'img-fluid',
                src: p.image,
                alt: p.name
            })
            const element = createElement('a', '', { 
                class: 'rounded-4 box-1 politic d-flex flex-column aligm-items-center justify-content-center text-center text-dark' ,
                style: 'text-decoration: none',
                href: p.link
            })

            imgDiv.appendChild(img)

            element.appendChild(imgDiv)
            element.appendChild(title)

            div.appendChild(element)
        })
    }

}
renderPoliticians()

const renderTags = (pTags) => {

    var div = document.getElementById('warningTags')

    if(div){
        tags.forEach((baseTag) => {
            pTags.forEach((tag) => {
                if(tag == baseTag.name){
                    const tagElement = createElement('a', '', { 
                        class: 'rounded-pill btn btn-outline-danger p-2 py-0',
                        href: baseTag.link,
                        style: 'text-decoration: none',
                    })
                    tagElement.onclick = () => {localStorage.setItem('tag', JSON.stringify(baseTag))}
                    tagElement.innerText = baseTag.name
                    div.appendChild(tagElement)
                }
            })
        })
    }

}