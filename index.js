var form = document.getElementById(form)

form.addEventListener(submit, (event) => {
    event.preventDefault() //prevent the form from autosubmitting

    var fullname = document.getElementById('name').value;
    console.log(fullname);

    var Email = document.getElementById('email').value;
    console.log(Email);

    var Phone = document.getElementById('phone').value;
    console.log(Phone);

    var Date = document.getElementById('date').value;
    console.log(Date);

    var Time = document.getElementById('time').value;
    console.log(Time);
    
})