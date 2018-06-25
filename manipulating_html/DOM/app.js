let randomColor = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
};

document.addEventListener("DOMContentLoaded", () => {
  let button = document.createElement("button");
  button.textContent = "click me";
  document.body.appendChild(button);
  button.style.display = "block";
  button.addEventListener("click", () => {
    alert("Nice message");
  });
  document.getElementById("submitButton").addEventListener("click", () => {
    let inputVal = document.getElementById("inputField").value;
    alert(inputVal);
  });

  let div = document.getElementById('changeColor');
  div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = "cyan";
  });
  div.addEventListener("mouseout", () => {
    div.style.backgroundColor = "red";
  });

  let p = document.getElementById('paragraph');
  p.addEventListener("click", () => {
    p.style.color = randomColor();
  });

  let spanButton = document.getElementById('spanButton');
  let spanDiv = document.getElementById('spanDiv');
  spanButton.addEventListener('click', () => {
      let span = document.createElement('span');
      span.innerHTML = "Lee";
      spanDiv.appendChild(span);
  });

  let friendButton = document.getElementById('friendButton');
  let friendList = document.getElementById('friendList');
  let friendArray = ['Adam', 'Betty', 'Charlie', 'Dennis', 'Edwin', 'Fannie', 'George', 'Hanna', 'Irving', 'John'];
  friendButton.addEventListener('click', () => {
    friendArray.forEach((friend, i) => {
      let li = document.createElement('li');
      li.innerHTML = friendArray[i];
      friendList.appendChild(li);
    })
  })
});
