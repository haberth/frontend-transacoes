package com.example;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends MongoRepository<Transaction, String> {
    
    // Additional custom query methods can be added here
    // For example:
    // List<Transaction> findByStatus(String status);
    // List<Transaction> findByAmountGreaterThan(Double amount);
}
