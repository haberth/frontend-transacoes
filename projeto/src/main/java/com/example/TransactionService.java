package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {
    
    private final TransactionClient transactionClient;
    private final TransactionRepository transactionRepository;
    
    @Autowired
    public TransactionService(TransactionClient transactionClient, 
                            TransactionRepository transactionRepository) {
        this.transactionClient = transactionClient;
        this.transactionRepository = transactionRepository;
    }
    
    /**
     * Processes a transaction by consulting the client and saving to repository
     * @param transactionId ID of the transaction to process
     * @return The processed transaction
     */
    public Transaction processTransaction(String transactionId) {
        // Consult transaction from client
        Transaction transaction = transactionClient.consultarTransacao(transactionId);
        
        // Save transaction to repository
        return transactionRepository.save(transaction);
    }
}
