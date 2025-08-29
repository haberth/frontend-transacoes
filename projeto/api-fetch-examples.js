// MS Orizon API - JavaScript Fetch Examples
// Base URL for your API
const API_BASE_URL = 'http://localhost:8080';

// ✅ Example 1: Health Check (GET request)
async function testHealthCheck() {
    try {
        const response = await fetch(`${API_BASE_URL}/transactions/health`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.text();
            console.log('✅ Health Check Success:', data);
            return data;
        } else {
            console.error('❌ Health Check Failed:', response.status, response.statusText);
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        console.error('❌ Network Error:', error.message);
        throw error;
    }
}

// ✅ Example 2: Transaction Consultation (POST request)
async function consultarTransacao(clientId, transactionType = 'consulta_saldo') {
    const requestBody = {
        id_cliente: clientId,
        tipo_transacao: transactionType
    };

    try {
        const response = await fetch(`${API_BASE_URL}/transactions/consultar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        if (response.ok) {
            const data = await response.json();
            console.log('✅ Transaction Success:', data);
            return data;
        } else {
            const errorText = await response.text();
            console.error('❌ Transaction Failed:', response.status, errorText);
            throw new Error(`HTTP ${response.status}: ${errorText}`);
        }
    } catch (error) {
        console.error('❌ Network Error:', error.message);
        throw error;
    }
}

// ✅ Example 3: Using with async/await
async function runApiTests() {
    console.log('🚀 Starting API Tests...');
    
    try {
        // Test 1: Health Check
        console.log('\n📊 Testing Health Check...');
        const healthResult = await testHealthCheck();
        
        // Test 2: Transaction API
        console.log('\n💰 Testing Transaction API...');
        const transactionResult = await consultarTransacao('12345', 'consulta_saldo');
        
        console.log('\n🎉 All tests completed successfully!');
        return { health: healthResult, transaction: transactionResult };
        
    } catch (error) {
        console.error('\n❌ Test failed:', error.message);
        throw error;
    }
}

// ✅ Example 4: Using with Promises (.then/.catch)
function runApiTestsWithPromises() {
    console.log('🚀 Starting API Tests with Promises...');
    
    // Health Check
    testHealthCheck()
        .then(healthResult => {
            console.log('✅ Health Check OK:', healthResult);
            
            // Transaction API
            return consultarTransacao('12345', 'consulta_saldo');
        })
        .then(transactionResult => {
            console.log('✅ Transaction OK:', transactionResult);
            console.log('🎉 All tests completed!');
        })
        .catch(error => {
            console.error('❌ Test failed:', error.message);
        });
}

// ✅ Example 5: Simple one-liner calls
// Uncomment to test:

// Test health check
// testHealthCheck().then(console.log).catch(console.error);

// Test transaction
// consultarTransacao('12345').then(console.log).catch(console.error);

// Run all tests
// runApiTests().then(console.log).catch(console.error);

console.log('📝 MS Orizon API JavaScript examples loaded!');
console.log('💡 Usage:');
console.log('   testHealthCheck()');
console.log('   consultarTransacao("12345", "consulta_saldo")');
console.log('   runApiTests()');
