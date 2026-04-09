const API = "";

async function login(){
  let res = await fetch("/api/login", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      username:user.value,
      password:pass.value
    })
  });

  let data = await res.json();

  if(data.token){
    localStorage.setItem("token", data.token);
    location.href = "dashboard.html";
  } else {
    alert("Login gagal");
  }
}

async function scan(){
  let res = await fetch("/api/scan", {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization": localStorage.getItem("token")
    },
    body:JSON.stringify({
      username:username.value,
      id:id.value,
      phone:phone.value
    })
  });

  let data = await res.json();

  log.innerHTML += `
USERNAME: ${data.username}
ID: ${data.id}
PHONE: ${data.phone}

`;
    }
