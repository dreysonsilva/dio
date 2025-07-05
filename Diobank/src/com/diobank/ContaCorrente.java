package com.diobank;

public class ContaCorrente extends Conta {

	public ContaCorrente(Cliente cliente) {
		super(cliente);

	}

	@Override
	public void imprimirExtrato() {
		System.out.println("== Extrato de Conta Corrente ==");
		super.imprimirInformacoesExtrato();		
	}
}
