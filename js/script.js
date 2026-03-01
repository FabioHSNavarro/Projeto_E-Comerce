const URL = "https://api-e-commerce-ojub.onrender.com/produtos";

async function ChamarApi(){
    const resp = await fetch (URL);
    console.log(resp);
    if (resp.status === 200){
        const obj = await resp.json();
        console.log(obj);
    }
}

ChamarApi();