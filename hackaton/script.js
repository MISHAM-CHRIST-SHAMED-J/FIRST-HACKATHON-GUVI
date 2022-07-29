const url="https://api.nationalize.io?name=michael"
let userinput = document.getElementById("userinput")
let subbtn = document.getElementById("subbtn")

subbtn.addEventListener("click", function(e){
    fetchapi(); clear();
})

userinput.addEventListener("keypress",function(e){
    console.log(e)
    if(e.key==="Enter") fetchapi();
})

let name1=document.getElementById("name1")
let country1 = document.getElementById("country1")
let prob1 = document.getElementById("prob1")
let name2=document.getElementById("name2")
let country2 = document.getElementById("country2")
let prob2 = document.getElementById("prob2")
let spann=document.getElementById("spann")

async function fetchapi(){
    try{
        let result = await fetch(`https://api.nationalize.io?name=${userinput.value}`)
        if(result.status===422)
        {
            throw new Error("*error : Missing Name")   
        } 
        else {
            let respond = await result.json(); 
            link123(`${userinput.value}`)
            link456(`${userinput.value}`)
            showuser(`${userinput.value}`,respond.country[0].country_id,respond.country[0].probability)
            showuser1(`${userinput.value}`,respond.country[1].country_id,respond.country[1].probability)    
        }
    }
    catch(err){
    error(err.message)
    }
}

function showuser(data,data1,data2)
{
    name1.append(data)
    country1.append(data1)
    prob1.append(data2)

}

function showuser1(data3,data4,data5)
{
    name2.append(data3)
    country2.append(data4)
    prob2.append(data5)

}

function error(data)
{
    spann.append(data)
}

function link123(data)
{
    let go1=document.getElementById("go1");
     go1.setAttribute("href",`https://www.google.com/search?q=${data}`);
     go1.setAttribute("target","_blank")
     go1.append
}

function link456(data)
{
    let go2=document.getElementById("go2");
     go2.setAttribute("href",`https://www.google.com/search?q=${data}`);
     go2.setAttribute("target","_blank")
     go2.append
}

