function my_Dictionary() { //JavaScript Dictionary
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound; //because of this it shows undifined
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //
}