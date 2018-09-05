var personagens = [
	{
		"nome": "rachel",
		"frases": [
			"No uterus, no opinion",
			"We weren't on a break",
			"What if I don't wanna be a shoe? What if I wanna be a purse?",
			"AAAA salmon skin roll",
			"With us, it's never off the table",
			"I got off the plane"
		]
	},
	{
		"nome": "monica",
		"frases": [
			"I am always the hostess",
			"Judge all you want, but: married a lesbian, left a man at the altar, fell in love with a gay ice dancer, threw a girl's wooden leg in a fire, lives in a box",
			"Welcome to the real world!It sucks! You're gonna love it",
			"If I am harsh with you, is because you're doing it wrong",
			"Do you really think the best reason for getting married is because you're sorry?"
		]
	},
	{
		"nome": "phoebe",
		"frases": [
			"Smelly cat, smelly cat",
			"He is your lobster",
			"If we were in prison, you girls would be, like, my bitches",
			"I don't even have a pla",
			"Something is wrong with the left phalange",
			"Pick up the sock!"
		]
	},
	{
		"nome": "chandler",
		"frases": [
			"Until the age of 25, I thought the only response to 'i love you' was 'oh crap'",
			"I'm not great at the advice. Can I interest you in a sarcastic comment?",
			"Your thoughts? Plural?",
			"And I want a million dollars",
			"I don't know if you ever looked up the term goofing around in the dictionary",
			"Should I use my invisibility to fight crime, or for evil?"
		]
	},
	{
		"nome": "joey",
		"frases": [
			"Occupation? Dinosaurs.",
			"Well, the fridge broke, so I had to eat everything",
			"Joey doesn't share food",
			"You're so far past the line that you can't even see the line! The line is a dot to you",
			"You can't just give up! Is that what a dinosaur would do?",
			"How are you doing?"
		]
	},
	{
		"nome": "ross",
		"frases": [
			"UNAGI!",
			"We were on a break",
			"You threw my sandwich away?",
			"I'm the holiday armadillo!",
			"You're over me? When were you 'under me'?",
			"Get off my sister"
		]
	}
];

var personagem;
var frasesSelecionadas = [];
var frasesRestantes = [];
// var quantidadeFrases = 0;

for (var i = 0; i < personagens.length; i++) {
	frase = personagens[i]["frases"];
	frasesRestantes = frase.concat(frasesRestantes);
}
//
// for (var i = 0; i < personagens.length; i++) {
// 	quantidadeFrases += personagens[i]["frases"].length;
// }

function getPhrase(lista, click) {
	indice = Math.floor(Math.random() * (lista.length - 1));
	frase = lista[indice];
	for (var i = 0; i < personagens.length; i++) {
		if frase == personagens
	}
	// frase = lista[indice]["frases"][indice2];
	// personagem = lista[indice]["nome"];
	// console.log(personagem);
	// if ( frasesSelecionadas.indexOf(frase) === -1 ) {
	// 	frasesSelecionadas.push(frase);
	// 	// frasesRestantes.splice(frase);
	// 	checkPhrase();
	// 	return frase
	// }
	// else {
	// 	return getPhrase(personagens)
	// }
}

function getElement(element) {
		var td = element.id;
		console.log(td, personagem);
		if (td == personagem) {
			acertos += 1;
			console.log(acertos);
			if (acertos == 37) {
				phraseBlock.innerText = "";
				resultado.innerText = "Parabéns, você ganhou o jogo";
				jogorodando = false;

			}
			else{
				var phrase = getPhrase(personagens);
				phraseBlock.innerText = phrase;
			}
		}
		else {
			erros += 1;
			console.log(erros);
			if (erros == 35) {
				phraseBlock.innerText = "";
				resultado.innerText = "Poxa, você perdeu o jogo. Tente novamente!";
				jogorodando = false;
			}
			else{
				var phrase = getPhrase(personagens);
				phraseBlock.innerText = phrase;
			}
		}
}

function checkPhrase() {
	if (frasesRestantes.length == 0) {
		resultado.innerText = "O estoque de frases acabou! O jogo deve ser reiniciado.";
		jogorodando = false
	}
}

var acertos = 0;
var erros = 0;
var jogorodando = true;

var phrase = getPhrase(frasesRestantes);
var phraseBlock = document.getElementById("frase");
phraseBlock.innerText = phrase;
var classe = document.getElementsByClassName("personagens");
var resultado = document.getElementById("resultado");

for (var id = 0; id < classe.length; id++) {
	classe[id].onclick = function() {
		if (jogorodando) {
			click = getElement(this);
		}
		return click
	}
}