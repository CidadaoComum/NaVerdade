function getPoliticianInfo(name){

    var exists = {}
    
    politicians.forEach((p) => {
        if(p.name == name){
            exists = p
        }
    })

    return exists

}