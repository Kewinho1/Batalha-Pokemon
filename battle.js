"use strict";

var Move = /** @class */ (function () {
    function Move(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    Move.prototype.use = function () {
        return this.damage;
    };
    return Move;
}());

var Pokemon = /** @class */ (function () {
    function Pokemon(name, hp, moves) {
        this.name = name;
        this.hp = hp;
        this.moves = moves;
    }
    Pokemon.prototype.attack = function (move, target) {
        target.hp -= move.use();
        // Atualizando a vida no DOM para o Pokémon alvo
        var targetHpElement = document.getElementById(target.name.toLowerCase() + "-hp");
        if (targetHpElement) {
            targetHpElement.textContent = "HP: " + target.hp;
        }
    };
    Pokemon.prototype.isFainted = function () {
        return this.hp <= 0;
    };
    return Pokemon;
}());

var Battle = /** @class */ (function () {
    function Battle(player, enemy) {
        this.player = player;
        this.enemy = enemy;
    }
    Battle.prototype.playerAttack = function (moveIndex) {
        var move = this.player.moves[moveIndex];
        this.player.attack(move, this.enemy);
        if (this.enemy.isFainted()) {
            alert("".concat(this.enemy.name, " foi derrotado!"));
        }
        else {
            this.enemyTurn();
        }
    };
    Battle.prototype.enemyTurn = function () {
        var randomMove = Math.floor(Math.random() * this.enemy.moves.length);
        var move = this.enemy.moves[randomMove];
        this.enemy.attack(move, this.player);
        if (this.player.isFainted()) {
            alert("".concat(this.player.name, " foi derrotado!"));
        }
    };
    return Battle;
}());

// Criando os golpes
var thunderbolt = new Move("Thunderbolt", 25);
var quickAttack = new Move("Quick Attack", 10);
var ironTail = new Move("Iron Tail", 15);
var electroBall = new Move("Electro Ball", 20);
var ember = new Move("Ember", 20);
var scratch = new Move("Scratch", 10);
var growl = new Move("Growl", 0);
var flamethrower = new Move("Flamethrower", 30);

// Criando os Pokémon
var pikachu = new Pokemon("Pikachu", 100, [thunderbolt, quickAttack, ironTail, electroBall]);
var charmander = new Pokemon("Charmander", 100, [ember, scratch, growl, flamethrower]);

// Inicializando a batalha
var battle = new Battle(pikachu, charmander);

// Renderizando golpes no DOM
var playerMovesDiv = document.getElementById("player-moves");
pikachu.moves.forEach(function (move, index) {
    var moveButton = document.createElement("button");
    moveButton.textContent = move.name;
    moveButton.addEventListener("click", function () { return battle.playerAttack(index); });
    playerMovesDiv.appendChild(moveButton);
});

// Função que busca a imagem do Pokémon a partir do nome
async function fetchPokemonImage(pokemonName, elementId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const imageUrl = data.sprites.front_default;  // A imagem padrão do Pokémon
        
        // Exibe a imagem no elemento especificado
        const imageElement = document.getElementById(elementId);
        imageElement.src = imageUrl;
    } catch (error) {
        console.error("Erro ao buscar imagem do Pokémon:", error);
    }
}

// Exemplo de como chamar a função para buscar as imagens dos Pokémon
fetchPokemonImage("pikachu", "player-image");
fetchPokemonImage("charmander", "enemy-image");
