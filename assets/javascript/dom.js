console.log("dom.js");

// 1. What is the DOM in relation to web development?
// is a programming interface for HTML and XML documents. It represents the page so 
// that programs can change the document structure, style, and content. The DOM 
// represents the document as nodes and objects. That way, programming languages can 
// connect to the page.

// 2. What is the difference between document.getElementById() and document.querySelector()
// With a querySelector statement, you can select an element based on a CSS selector. 
// This means you can select elements by ID, class, or any other type of selector. 
// Using the getElementById method, you can only select an element by its ID.

// 3. What method could I use on the document object to find an HTML element by one of the classes in the elements class list
// Document.getElementsByClassName()

// 4. What is the difference between using *element*.addEventListener() vs *element*.onclick?
//  addEventListener does not overwrite existing event handlers, whereas onclick 
// overrides any existing onclick = fn event handlers. The other significant difference,
// of course, is that onclick will always work, whereas addEventListener does not work 
// in Internet Explorer before version 9

function clickMe(message){
    document.getElementById('hershey').textContent=message;
}

clickMe("Click Me");

const button = document.getElementById("hershey");
button.style.backgroundColor = "black";
button.style.color = "white";


// let count = 0;
// let counter = document.getElementById('counter');
let count = parseInt(document.getElementById('counter').textContent);
console.log(counter);
console.log("count is " + typeof(count));

button.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('click');
    count++;
    console.log(count);
    // document.getElementById('counter').innerHTML = count;
    counter.innerHTML = count;
    document.body.style.backgroundColor = randomColor();
});

button.addEventListener("contextmenu",function(event){
    console.log('right click')
    event.preventDefault();
    count--;
    counter.innerHTML = count;
    // document.getElementById('counter').innerHTML = count;
    document.body.style.backgroundColor = randomColor();
});

function randomColor() {
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    
    let randomIndex = Math.floor(Math.random() * ((colors.length - 1) - 0 + 1) + 0)
    // console.log("random index" + randomIndex)
    return colors[randomIndex]

}




let quizQuestions = [
    {
        "id": 79680,
        "answer": "anarchy",
        "question": "In 1921 the black flag flew at the funeral of Peter Kropotkin, philosopher of this government-negating ideology",
        "value": 1000,
        "airdate": "2007-02-27T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:41.721Z",
        "updated_at": "2014-02-11T23:38:41.721Z",
        "category_id": 10459,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10459,
            "title": "political science",
            "created_at": "2014-02-11T23:38:40.866Z",
            "updated_at": "2014-02-11T23:38:40.866Z",
            "clues_count": 5
        }
    },
    {
        "id": 79681,
        "answer": "Africa",
        "question": "In 2000 Rift Valley fever scared WHO by making its first appearance outside this continent",
        "value": 1000,
        "airdate": "2007-02-27T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:41.751Z",
        "updated_at": "2014-02-11T23:38:41.751Z",
        "category_id": 10460,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10460,
            "title": "who says",
            "created_at": "2014-02-11T23:38:40.880Z",
            "updated_at": "2014-02-11T23:38:40.880Z",
            "clues_count": 5
        }
    },
    {
        "id": 79682,
        "answer": "yew",
        "question": "\"It had to be\" this evergreen tree that is a homonym for a second-person-singular pronoun",
        "value": 1000,
        "airdate": "2007-02-27T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:41.780Z",
        "updated_at": "2014-02-11T23:38:41.780Z",
        "category_id": 10461,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10461,
            "title": "also a 3-letter tree",
            "created_at": "2014-02-11T23:38:40.895Z",
            "updated_at": "2014-02-11T23:38:40.895Z",
            "clues_count": 5
        }
    },
    {
        "id": 79683,
        "answer": "Alvin Ailey",
        "question": "In 1977 Madonna won a scholarship to the studio of this alliteratively named N.Y. choreographer",
        "value": 1000,
        "airdate": "2007-02-27T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:41.809Z",
        "updated_at": "2014-02-11T23:38:41.809Z",
        "category_id": 10462,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10462,
            "title": "prime madonna",
            "created_at": "2014-02-11T23:38:40.909Z",
            "updated_at": "2014-02-11T23:38:40.909Z",
            "clues_count": 5
        }
    },
    {
        "id": 79684,
        "answer": "Harry Potter",
        "question": "(Cheryl of the Clue Crew has a new review from the zoo--the London Zoo in Regent's Park, London.)  At the zoo in Regent's Park this character first discovers his unusual powers when he talks to the snakes",
        "value": 200,
        "airdate": "2007-02-26T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:42.318Z",
        "updated_at": "2014-02-11T23:38:42.318Z",
        "category_id": 10463,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10463,
            "title": "literary london",
            "created_at": "2014-02-11T23:38:42.190Z",
            "updated_at": "2014-02-11T23:38:42.190Z",
            "clues_count": 5
        }
    }
]


let quizQuestionsTableTbody = document.querySelector("#quizQuestionsTable tbody");

quizQuestions.forEach(function(question) {
    let row = '<tr>';
    row += `<td>${question.id}</td>`;
    row += `<td>${question.question}</td>`
    row += `<td>${question.category.title}</td>`
    row += `<td>${question.value}</td>`
    row += `<td>${question.answer}</td>`
    row += `</tr>`

    quizQuestionsTableTbody.innerHTML += row;
})

// let tbody = document.getElementById ("tbodyID");
// console.log(tbody);

// for (i=0; i<quizQuestions.length; i++ ){
 
//     let tr = "<td>" + quizQuestions[i].id + "</td>" + "<td>" + quizQuestions[i].question
//     + "</td>" + "<td>"  +  quizQuestions[i].category.title 
//     + "</td>" + "<td>" + quizQuestions[i].value 
//     + "</td>" + "<td>" + quizQuestions[i].answer + "</td>";
   
//     tbody.innerHTML += tr;
// }


$(document).ready( function () {
    $('#quizQuestionsTable').DataTable();
} );

// $('#quizQestionsTable').DataTable();






