"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function fetchPokemonImage(pokemonName, elementId) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, data, imageUrl, imageElement, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://pokeapi.co/api/v2/pokemon/".concat(pokemonName.toLowerCase());
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(url)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    imageUrl = data.sprites.front_default;
                    imageElement = document.getElementById(elementId);
                    imageElement.src = imageUrl;
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error("Erro ao buscar imagem do Pokémon:", error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// Exemplo de como chamar a função para buscar as imagens dos Pokémon
fetchPokemonImage("pikachu", "player-image");
fetchPokemonImage("charmander", "enemy-image");
