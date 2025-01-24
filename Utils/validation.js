function validateDataProduct(data){
    if(!data.name || !data.price || !data.description || !data.category)
        return false;
    if(data.name == "undefined" || !data.price == "undefined" || !data.description == "undefined"|| !data.category == "undefined")
        return false;
    if(data.name == "" || !data.price == "" || !data.description == ""|| !data.category == "")
        return false;
    return true;
}

function validateDataCategory(data){
    if(!data.name)
        return false;
    if(data.name == "undefined")
        return false;
    if(data.name == "")
        return false;
    return true;
}

function validateId(data){
    if(data.id)
        return false;
    if(data.id = "undefined")
        return false;
    if(data.id == "")
        return false;
    return true;
}

module.exports = {validateDataProduct, validateDataCategory, validateId};