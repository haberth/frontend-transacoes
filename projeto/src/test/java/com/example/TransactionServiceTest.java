package com.example;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class TransactionServiceTest {

    @Mock
    private TransactionClient transactionClient;
    
    @Mock
    private TransactionRepository transactionRepository;
    
    @InjectMocks
    private TransactionService transactionService;
    
    @Test
    void shouldCallConsultarTransacaoAndSaveExactlyOnce() {
        // Given
        String transactionId = "12345";
        Transaction mockTransaction = new Transaction();
        mockTransaction.setId(transactionId);
        mockTransaction.setAmount(100.0);
        mockTransaction.setStatus("COMPLETED");
        
        when(transactionClient.consultarTransacao(transactionId))
            .thenReturn(mockTransaction);
        when(transactionRepository.save(any(Transaction.class)))
            .thenReturn(mockTransaction);
        
        // When
        transactionService.processTransaction(transactionId);
        
        // Then
        verify(transactionClient, times(1)).consultarTransacao(transactionId);
        verify(transactionRepository, times(1)).save(mockTransaction);
    }
}
