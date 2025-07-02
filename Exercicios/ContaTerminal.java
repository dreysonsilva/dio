
import java.util.Scanner;

public class ContaTerminal {
    public static void main(String[] args) {
        double saldo = 150075;

        // Exibir mensagem de boas-vindas
        Scanner scanner = new Scanner(System.in);
        System.out.println("Bem-vindo ao Banco Java!");

        // Solicita os dados do cliente
        System.out.println("Por favor, informe o número da agência:");
        String agencia = scanner.nextLine();

        System.out.println("Por favor, informe o número da conta:");
        int numeroConta = Integer.parseInt(scanner.nextLine());

        System.out.println("Por favor, informe o nome do cliente:");
        String nomeCliente = scanner.nextLine();

        // Exibir os dados da conta        
        System.out.println("\nOlá " + nomeCliente + ", obrigado por criar uma conta em nosso banco!");
        System.out.println("Sua agência é " + agencia + ", conta " + numeroConta + " e seu saldo de R$ " + String.format("%.2f", saldo) + " já está disponível para saque.");

        System.out.println("\nObrigado por utilizar nossos serviços!");
        scanner.close();
    }
}
