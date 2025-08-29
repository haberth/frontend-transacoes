package com.example;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "autorizacao-digital", url = "${external.authorization.url}")
public interface TransactionClient {
    
    /**
     * Consulta uma transação por ID no sistema externo de Autorização Digital
     * @param transactionId ID da transação
     * @return Transaction object
     */
    @GetMapping("/transactions/{transactionId}")
    Transaction consultarTransacao(@PathVariable("transactionId") String transactionId);
}
