const navItems = [
    { title: 'Início', href: '/', active: true },
    { title: 'Sobre', href: '/sobre.html', active: true },
]
var headerDiv = document.getElementById('header')

if(headerDiv){

    //Ready nav item
    var readyNavItems = ''
    navItems.forEach((item) => {
        var readyItem = ''
        if(item.active){
            readyItem = `<li class="nav-item">
                            <a class="nav-link" aria-current="page" href="${item.href}">${item.title}</a>
                        </li>`
        }else{
            readyItem = `<li class="nav-item opacity-25">
                            <a class="nav-link" aria-current="page">${item.title}</a>
                        </li>`
        }
        readyNavItems += readyItem
    })

    headerDiv.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div class="container-fluid">

                <a class="navbar-brand" href="/">${siteInfo.name}</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        ${readyNavItems}
                    </ul>
                </div>
            </div>
            </nav>
    `
}