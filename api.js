let a = window.fetch();
console.log(a);

window.fetch("data.json")
  .then((response) => response.json())
  .then((res) => {
    console.log(res);

    res.map((x) => {
      console.log(x);
      console.log(x.name);
      console.log(x.id);

      document.body.innerHTML += `<h2>${x.name}</h2>`;
      document.body.innerHTML += `<h2>${x.id}</h2>`;
    });
  });
