const textVlue=document.getElementById("textvalue")
const wordshow=document.getElementById("Word")
const characterShow=document.getElementById("character")

textVlue.addEventListener("input",()=>{
    const value=textVlue.value
    // character count for string length is total number of charcater
    characterShow.innerHTML=`<Span>${value.length}</span> Total Character`

    // Word count 

    // first trim the space staring and ending and 
    // split for aconding to space so create a arry and
    let word=value.trim().split(" ")

    // word array apply the filter method so filter the only word note any space
    let wordcount=word.filter((word)=>{
        // conditon jo hamra word hai ager sapce hai so oh es condition ke ander nhi jayega 
        // ohi array ka element jayega jisme koi space na ho only word ho 
        if(word!==""){
            return word;
        }
    })

    // tab uske baad filter array ko length ko print kar dege 
    wordshow.innerHTML=`<Span>${wordcount.length}</span> Total Word`
})