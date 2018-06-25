$(document).ready(function() {
  $("<button>Click me</button>")
    .click(() => {
      alert("Nice Message");
    })
    .appendTo("body");
  $("#submitButton").click(() => {
    alert($("#inputField").val());
  });
  $("#changeColor").hover(
    function() {
      $(this).css("backgroundColor", "cyan");
    },
    function() {
      $(this).css("backgroundColor", "red");
    }
  );
  $("#paragraph").click(function() {
    $(this).css(
      "color",
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`
    );
  });
  $("#spanButton").click(() => {
    $("<span>Lee</span>").appendTo("#spanDiv");
  });
  let friends = [
    "Adam",
    "Barbara",
    "Charlie",
    "Dennis",
    "Eric",
    "Frida",
    "George",
    "Harry",
    "Isabel",
    "Jerry"
  ];
  $("#friendButton").click(() => {
    friends.forEach((friend, i) => {
      $(`<li>${friends[i]}</li>`).appendTo("#friendList");
    });
  });
});
