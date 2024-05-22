var ans=new Promise((hi,bye)=>{
    if(true)
        {
            return hi();
        }
        else{
            return bye();
        }
})
ans
.then(function(){
    console.log('resolved')
})

.catch(function(){
    console.log('rejected')
})