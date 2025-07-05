package com.diobank;

public class AppDioBank {
	public static void main(String[] args) {
						
		Cliente cliente = new Cliente();
		cliente.setNome("Dreyson");
		
		Conta cc = new ContaCorrente(cliente);	
		cc.depositar(100.00);
		
		Conta poupanca = new ContaPoupanca(cliente);				
		cc.transferir(100.00, poupanca);
		
		
		//Imprimir extrato das contas
		cc.imprimirExtrato();
		poupanca.imprimirExtrato();
		
	}
}