
function loadstudentname() {

    //var nametagz = document.getElementsById("stdname");
    var nametagz = $('#stdname').val();
    // alert(nametagz);

    if (nametagz == "") {


    } else {

        $.post("phpfile/loadstudentname.php",
                {
                    sendnamez: nametagz

                },
        function (data, status) {


            $('#laodingnameser').empty();
            $("#laodingnameser").html(data);


//                                                                            

        });

    }





}
function loadstudentschool() {

    //var nametagz = document.getElementsById("stdname");
    var nametagz = $('#stdschool').val();

    if (nametagz == "") {


    } else {

        $.post("phpfile/loadstudentschool.php",
                {
                    sendnamez: nametagz

                },
        function (data, status) {


            $('#laodingschoolser').empty();
            $("#laodingschoolser").html(data);


//                                                                            

        });

    }





}

function getValue(yy) {



    var kk = $("#az" + yy).text();

    $('#laodingschoolser').empty();
    var text = $('#stdschool');
    text.val(kk);








}


function saveData() {
//    alert("awoooo");

    var institute = $('#institute').val();
    var classtype = $('#classtype').val();
    var stdname = $('#stdname').val();
    var grade = $('#grade').val();
    var indexno = $('#indexno').val();
    var groupz = $('#groupz').val();
    var con1 = $('#con1').val();
    var con2 = $('#con2').val();
    var con3 = $('#con3').val();
    var datez = $('#datez').val();
    var stdschool = $('#stdschool').val();

    if (stdname == "" || stdschool=="") {

        swal("Invalid Entry!", "Please Fill Neccessery Feilds", "error");


    } else {





        $.post("phpfile/registerstudentcode.php",
                {
                    institute: institute,
                    classtype: classtype,
                    stdname: stdname,
                    grade: grade,
                    indexno: indexno,
                    groupz: groupz,
                    con1: con1,
                    con2: con2,
                    con3: con3,
                    datez: datez,
                    stdschool: stdschool

                },
        function (data, status) {

//                            alert(data);

            if (data == "ok") {

                swal("Done!", "Student Registerd Succesfully", "success");
                window.location = "registerstudent.php";

            } else if (data == "already") {

                swal("Invalid Entry!", "This student name is already Registered", "error");

            }

        });
    }





}




