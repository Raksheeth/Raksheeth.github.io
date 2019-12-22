function create(){
    let subject=document.getElementsByClassName('subject-name')[0].value;
    let number=document.getElementsByClassName('no-of-questions')[0].value;
    let questionField=document.getElementsByClassName('hello')[0];
    document.getElementsByClassName('creation-card')[0].style.display="none";
    questionField.innerHTML=`<div class="text-center"><h4>Subject: `+ subject +`</h4></div>`;
    for(i=1;i<=number;i++)
    {
        var questionCreate=`<div class="card mx-auto w-75 bg-dark text-light creation-card"><div class="card-header text-center"><h4>Question `+ i +`</h4></div><div class="card-body"><form><div class="form-group"><h5>Enter Question:</h5><input type="text" class="form-control question"/><h5>Enter options</h5><ol><li><input type="text" class="option1"/></li><li><input type="text" class="option2"/></li><li><input type="text" class="option3"/> </li><li><input type="text" class="option4"/></li></ol></div></form></div></div><br/>`;
        questionField.innerHTML+=questionCreate;
    }
    document.getElementsByClassName('save')[0].innerHTML=`<div class="text-center"><button class="btn btn-success w-50">Save</button></div><br/>`;
}