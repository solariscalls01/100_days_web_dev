let onlineCourse = "Python";
let price = 55;
let goals = ["learn coding ", "Improve skills ", "make more money"];

// alert(onlineCourse);
// alert(price);
// alert(goals);

let course = {
  name: "Python",
  price: 55,
  goals: ["learn coding ", "Improve skills ", "make more money"],
};


// alert(course.price)

function getCourseInfo(param) {
    return course[param]
}

console.log(course["goals"])