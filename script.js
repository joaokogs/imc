const fields = document.querySelectorAll("[required]")

function ValidateField(field){
    function verifyErrors(){
        let foundError = false;

        for(let error in field.validity){
            if(field.validity[error] && !field.validity.valid){
                foundError = error
            }
        }
        return foundError;
    }
    console.log(field.validity)
    function customMessage(typeError){
        const messages ={
            text: {
                valueMissing: "Campo obrigatório!"
            },
            number: {
                valueMissing: "Campo obrigatório!",
                rangeUnderflow: "Você precisa ter no mínimo 18 anos!"
            }
        }
        return messages[field.type][typeError] 

    }

    function setCustomMessage(message){
        const spanAlert = field.parentNode.querySelector("span.alert")
        if(message){
            spanAlert.innerHTML = message
        } else{
            spanAlert.innerHTML = ""
        }


        
    }

    return function(){

        const error = verifyErrors()

        if(error){
            const message = customMessage(error)
            setCustomMessage(message)
        }else{
            setCustomMessage()
        }
    }


}


function customValidation(event){

    

    const field = event.target
    const validation = ValidateField(field)
    validation()

}

for (field of fields){
    field.addEventListener("invalid", event =>{
        event.preventDefault()
        customValidation(event)
    })
    field.addEventListener("blur", customValidation)
}


