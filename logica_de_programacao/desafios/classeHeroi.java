// Classe Heroi
public class Heroi {
    // Propriedades da classe
    private String nome;
    private int idade;
    private String tipo;

    // Construtor da classe Heroi
    public Heroi(String nome, int idade, String tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    public void atacar() {
        String ataque = "";

        switch (tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
                break;
        }
        System.out.println("O " + tipo + " atacou usando " + ataque + "!");
    }
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}

// testar o código
public class Jogo {
    public static void main(String[] args) {
        // Criando heróis
        Heroi heroi1 = new Heroi("Merlin", 100, "mago");
        Heroi heroi2 = new Heroi("Arthur", 30, "guerreiro");
        Heroi heroi3 = new Heroi("Bruce Lee", 35, "monge");
        Heroi heroi4 = new Heroi("Naruto", 17, "ninja");

        heroi1.atacar();
        heroi2.atacar();
        heroi3.atacar();
        heroi4.atacar();
    }
}
