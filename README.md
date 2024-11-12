# Batalha-Pokemon
 
Perguntas para Reflexão

Como o conceito de herança poderia ser aplicado no jogo da batalha?
R:Poderíamos criar uma classe base chamada Entity que contém propriedades e métodos comuns a todas as entidades do jogo, como name, hp, e métodos como isFainted(). As classes Pokemon e Trainer (se houver) poderiam estender Entity, herdando essas propriedades e métodos, além de adicionar funcionalidades específicas.

Quais são as vantagens de usar classes para representar Pokémon e golpes?

R:Encapsulamento: Classes permitem agrupar dados (propriedades) e comportamentos (métodos) relacionados, facilitando a organização do código.
Reutilização de Código: Métodos comuns podem ser definidos uma vez na classe e reutilizados por todas as instâncias, evitando redundância.
Clareza e Manutenção: Estruturar o código em classes torna mais fácil entender a lógica do jogo e realizar manutenções ou expansões futuras.
Herança e Polimorfismo: Facilita a criação de hierarquias de classes e a implementação de comportamentos específicos para diferentes tipos de Pokémon ou movimentos.

Como você poderia modificar o jogo para suportar mais Pokémon?

R:Lista de Pokémon Disponíveis: Criar um array ou banco de dados contendo múltiplos Pokémon com suas respectivas propriedades e movimentos.
Seleção de Pokémon pelo Jogador: Implementar uma interface onde o jogador possa escolher seu Pokémon antes do início da batalha.
Aleatoriedade na Seleção do Inimigo: O Pokémon inimigo poderia ser escolhido aleatoriamente a partir da lista disponível.
Escalabilidade das Classes: Garantir que a classe Pokemon possa ser instanciada com diferentes conjuntos de movimentos e atributos sem necessidade de alterar a estrutura básica.

Como o encapsulamento foi aplicado nas classes do projeto?

R:Ocultação de Detalhes Internos: As propriedades das classes, como hp, moves, e name, são encapsuladas dentro das classes Pokemon e Move, permitindo que sejam acessadas e modificadas apenas através de métodos públicos.
Métodos Públicos e Privados: Embora no exemplo atual todas as propriedades sejam públicas, poderíamos melhorar o encapsulamento definindo métodos privados para manipular propriedades internas, garantindo que apenas operações válidas sejam realizadas.
Interface Clara: A interação com as classes ocorre através de métodos como attack(), isFainted(), e use(), escondendo a lógica interna e permitindo uma interface mais limpa e segura para o uso externo.

Qual o papel da tipagem estática no desenvolvimento deste jogo?

R:Detecção de Erros em Tempo de Compilação: Tipagem estática permite que o compilador identifique erros de tipo antes da execução, aumentando a robustez do código.
Autocompletar e IntelliSense: Ferramentas de desenvolvimento podem oferecer melhores sugestões e autocompletar baseadas nas definições de tipos, acelerando o desenvolvimento.
Documentação Implícita: Os tipos servem como documentação automática, facilitando o entendimento do que cada variável ou função espera e retorna.
Manutenção e Refatoração: Facilita a refatoração do código, garantindo que mudanças em um lugar não quebrem outras partes do sistema devido a inconsistências de tipo.

Como você controlaria a ordem de turnos em uma batalha entre múltiplos Pokémon?

R:Sistema de Turnos Baseado em Prioridade: Cada Pokémon pode ter um atributo de velocidade que determina a ordem de ataque.
Fila de Turnos: Implementar uma fila que gerencia a ordem em que os Pokémon atacam, adicionando e removendo turnos conforme necessário.
Ciclo de Turnos Rotativos: Em batalhas com múltiplos Pokémon, alternar o turno entre os participantes, garantindo que todos tenham a oportunidade de agir.

Como garantir que o Pokémon derrotado não possa mais atacar?

R:Verificação de Status Antes de Atacar: Antes de executar um ataque, verificar se o Pokémon está derrotado usando o método isFainted(). Se estiver, impedir que ele execute ações.
Remoção de Pokémon Derrotados da Batalha: Remover ou desativar Pokémon que foram derrotados da lista de participantes ativos, evitando que possam ser selecionados para ataques.
Desativação de Botões de Ataque: Atualizar a interface do usuário para desabilitar os botões de ataque dos Pokémon derrotados, impedindo interações adicionais.

Como você modularizaria o código utilizando importação e exportação de módulos?

R:Separação por Responsabilidade: Dividir o código em módulos distintos, cada um responsável por uma parte específica do jogo, como Move, Pokemon, Battle.
Exportação de Classes: Em cada arquivo de classe, usar export para disponibilizar a classe para outros módulos.

Como funcionam as classes anônimas em TypeScript e como elas poderiam ser usadas neste contexto?

R:Definição: Classes anônimas são classes sem nome, geralmente usadas para instanciar objetos diretamente ou como argumentos para funções.
Uso em Contexto do Jogo: Embora não sejam comuns em cenários onde a reutilização de classes seja necessária, podem ser usadas para criar objetos temporários ou passar comportamentos específicos.
Exemplo de Classe Anônima para um Movimento

Como a implementação de eventos no DOM auxilia na interação do jogador com a aplicação?

R:Interatividade: Permite que o jogador interaja com o jogo de forma dinâmica, respondendo a ações como cliques em botões de movimento.
Atualização Dinâmica da Interface: Eventos podem disparar atualizações na interface, como mudanças de HP, mensagens de vitória ou derrota, e atualização dos status dos Pokémon.
Feedback Imediato: Proporciona feedback imediato ao jogador sobre suas ações, melhorando a experiência de jogo.
Desacoplamento da Lógica e Interface: A lógica do jogo pode ser separada da manipulação da interface, facilitando a manutenção e extensão do código.
