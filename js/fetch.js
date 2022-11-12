const listOl = document.getElementById("cards");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => getUsers(data));

const getUsers = (users) => {
  const name = users.map(
    (user) =>
      (listOl.innerHTML += `
        <div class="col-4 p-2">
          
          <div class="card border-dark text-danger">
            <div class="card-header text-light bg-dark">${user.name}</div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item ">User Name : ${user.username}</li>
                <li class="list-group-item">Website : ${user.website}</li>
                <li class="list-group-item">Email Address : ${user.email}</li>
                <li class="list-group-item">Phone : ${user.phone}</li>
                <li class="list-group-item">Address : 
                  <ul class="">
                    <li class="">Street : ${user.address.street}</li>
                    <li class="">City : ${user.address.city}</li>
                    <li class="">Zip Code : ${user.address.zipcode}</li>
                  </ul>
                </li>
                <li class="list-group-item">Company : 
                  <ul class="">
                    <li class="">Name : ${user.company.name}</li>
                    <li class="">Tag : ${user.company.catchPhrase}</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

        </div>
      `)
  );
};
