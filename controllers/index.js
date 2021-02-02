
exports.index = (req, res) => {

    const referenceData = req.body.referenceData;
    const payload = req.body.payload;

    if(referenceData && Object.keys(referenceData).length) {
        Object.keys(referenceData).forEach(element => {
            
            let key = `{${element}}`;
            let value = referenceData[element];
            
            if(payload && Object.keys(payload).length) {
                                    
                _findAndReplace(payload,key,value);
            }
        }); 
    }
    
    return res.json(payload);
}

function _findAndReplace(object, key, value){

    for(let x in object) {

        if(typeof object[x] == typeof {}){
            _findAndReplace(object[x],key,value);
        }
        
        if(typeof object[x] === 'string') {
            object[x] = object[x].replace(key,value);
        }
    }
}
  