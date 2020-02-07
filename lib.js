var answers = [];
var qs = JSON.parse(JSON.stringify(questions));
var img_size = 500;


//выбрать произвольный элемент из массива arr
function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function count(s, pattern){
	return (s.split(pattern).length - 1);
}

function isImg(s){
	s = s.toString();
	if (count(s,'.jpg') != 0 | count(s,'.png') != 0 | count(s,'.jpeg') != 0){return true;}
	else {return false;}
}


function number_of_questions_change(){
	var el = document.getElementById("number_of_questions");
    var warning_div = document.getElementById("max_questions_warning");

	if (parseInt(el.value) > parseInt(el.max)){
		el.value = el.max;
		warning_div.innerHTML = "(максимальное количество вопросов в этом тесте - " + (questions.length).toString() + ")";
		warning_div.style.display = "block";
		warning_div.style.color = "red";
		}
	else if (parseInt(el.value) < parseInt(el.min)){
		el.value = el.min;
		}
	else{
		warning_div.style.display = "none";
	}
}

function show_answers_row_column(){
	var el = document.getElementById("row_column_checkbox");
	var ans_div = document.getElementById("answers");
	ans_div.innerHTML = '';
	if (el.checked){
		
		for(i=0; i<answers.length; i++){
			
			var sp = document.createElement('span');
			sp.innerHTML = (i+1).toString() + ') ';
			
			var hr = document.createElement('hr');
			hr.width = "20%";
			
			ans_div.appendChild(sp);
			ans_div.appendChild(answers[i]);
			ans_div.appendChild(hr);
		}
	}
	else{
		for(i=0; i<answers.length; i++){
			ans_div.appendChild(answers[i]);
			var sp = document.createElement('span');
			sp.innerHTML = '; ';
			ans_div.appendChild(sp);
		}
	}
	
  	ans_div.removeChild(ans_div.lastChild);
	MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
			
}


function change_font_size(t = false){
        var size = document.getElementById("font_size").value;
        var el = document.getElementById("question")
    if (t === false){
        el.style.fontSize = size.toString()+'px';
    }
    else{
        el.style.fontSize = t.toString()+'px';    
    }
}

function change_ans_font_size(t = false){
        var size = document.getElementById("ans_font_size").value;
        var el = document.getElementById("answers")
    if (t === false){
        el.style.fontSize = size.toString()+'px';
    }
    else{
        el.style.fontSize = t.toString()+'px';    
    }
}




 function addimg(file) {
	 
            var img = new Image(); 
            img.src = file;
	 		
	 		img.style = "vertical-align: middle; width: "+img_size.toString()+";";
	 		
	 return img;
        }  


function change_img_size(){

        var size = document.getElementById("img_size").value;
	    img_size = size;
        $("img").each(function () {
			var width = $(this).width();
                $(this).attr({
                	width : size
				})
		})
}
