var title,description;
function setup(){
  createCanvas(windowWidth-6,windowHeight-50);
  title=createElement("h1","ABOUT US");
  description=createElement("h2","The website's purpose is to make users aware of their subconscious biases against specific issues and to make them self-aware of these biases in the hopes of changing themselves and making society a better place.<br><br> Our website's goal is to improve society's broad attitude and make communal spaces like work, schools, and other places more livable for everyone, allowing individuals to interact without prejudice of any type.");
}
function draw (){
 
  title.position(width/2 -80 , 20)
  description.position(width/2 -650 , 120)
}