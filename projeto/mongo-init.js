// MongoDB Initialization Script for Bradesco Transactions
// This script runs when MongoDB container starts for the first time

db = db.getSiblingDB('bradesco_transactions');

// Create collections
db.createCollection('transactions');

// Create indexes for better performance
db.transactions.createIndex({ "id": 1 }, { unique: true });
db.transactions.createIndex({ "status": 1 });
db.transactions.createIndex({ "amount": 1 });
db.transactions.createIndex({ "createdAt": 1 });

// Insert sample data for testing
db.transactions.insertMany([
  {
    "id": "TXN001",
    "amount": 1000.50,
    "status": "COMPLETED",
    "description": "Sample transaction 1",
    "createdAt": new Date(),
    "updatedAt": new Date()
  },
  {
    "id": "TXN002", 
    "amount": 250.75,
    "status": "PENDING",
    "description": "Sample transaction 2",
    "createdAt": new Date(),
    "updatedAt": new Date()
  }
]);

print("MongoDB initialization completed for bradesco_transactions database");
