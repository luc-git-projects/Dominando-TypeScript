function showError(message: string): never{
    throw new Error(message)
}


// showError("Algo deu errado");

function loopInfinito(): XPathNSResolver{
    let n =0
    while(true){
        console.log(n++)
    }
}

loopInfinito();