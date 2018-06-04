$(document).ready(function () {

    $('#btnSubmit').click(function () {
        alert('clicked!');
    })

    $("<div id='h2Div'></div>").appendTo('body');
    var theList = $("<ul></ul>")
    $('body').append(theList);

    $("input[type='submit']").click(function () {
        var inputVal = $('input#input-field').val();
        alert(inputVal);

        // var h2 = $(`<h2 id='generatedH2'>${inputVal}</h2>`);

        // $(h2).mouseover(function() {
        //     $(this).css({
        //        'background-color': 'salmon',
        //        'border-radius': '2em' 
        //     })
        // });
        // $("div#h2Div").append(h2);

        var listItem = $(`<li>${inputVal}</li>`);
        theList.append(listItem);
        listItem.click(function () {
            var possibilities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
            var randomString = '';
            for (var i = 0; i < 6; i++) {
                randomString += possibilities[Math.floor(Math.random() * (16))];
            }
            $(this).css('color', `#${randomString}`);
        }).dblclick(function() {
            $(this).remove();
        })

        return false;
    });

    $("input[type='text']").change(function () {
        $("input[type='submit']").removeAttr('disabled');
    })


});