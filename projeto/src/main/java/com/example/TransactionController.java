package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/transactions")
public class TransactionController {
    
    private final TransactionService transactionService;
    
    @Autowired
    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }
    
    /**
     * Endpoint para consultar transação
     * @param request Request body containing id_cliente and tipo_transacao
     * @return Transaction information
     */
    @PostMapping("/consultar")
    public ResponseEntity<Transaction> consultarTransacao(@RequestBody TransactionRequest request) {
        try {
            // For now, we'll process using the transaction ID from the client ID
            Transaction transaction = transactionService.processTransaction(request.getId_cliente());
            return ResponseEntity.ok(transaction);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    /**
     * Health check endpoint
     */
    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Transaction service is running");
    }
    
    /**
     * Request DTO for transaction consultation
     */
    public static class TransactionRequest {
        private String id_cliente;
        private String tipo_transacao;
        
        // Getters and setters
        public String getId_cliente() {
            return id_cliente;
        }
        
        public void setId_cliente(String id_cliente) {
            this.id_cliente = id_cliente;
        }
        
        public String getTipo_transacao() {
            return tipo_transacao;
        }
        
        public void setTipo_transacao(String tipo_transacao) {
            this.tipo_transacao = tipo_transacao;
        }
    }
}
