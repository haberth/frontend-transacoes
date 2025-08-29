# PowerShell script to set environment variables for local development
# Run this script before starting the application locally

Write-Host "Setting environment variables for ms-orizon-api-bradesco..." -ForegroundColor Green

# MongoDB Configuration
$env:MONGODB_URI = "mongodb://localhost:27017/bradesco_transactions"
$env:MONGODB_DATABASE = "bradesco_transactions"

# RabbitMQ Configuration  
$env:RABBITMQ_HOST = "localhost"
$env:RABBITMQ_PORT = "5672"
$env:RABBITMQ_USERNAME = "guest"
$env:RABBITMQ_PASSWORD = "guest"
$env:RABBITMQ_VHOST = "/"

# Server Configuration
$env:SERVER_PORT = "8080"
$env:CONTEXT_PATH = "/api/v1"

# External Services
$env:AUTHORIZATION_SERVICE_URL = "http://localhost:8081"
$env:AUTHORIZATION_TIMEOUT = "30s"

# Logging
$env:LOG_LEVEL = "INFO"
$env:FEIGN_LOG_LEVEL = "DEBUG"

# Security
$env:JWT_SECRET = "your-jwt-secret-key-change-in-production"
$env:JWT_EXPIRATION = "3600"

Write-Host "Environment variables set successfully!" -ForegroundColor Green
Write-Host "You can now run: mvn spring-boot:run" -ForegroundColor Yellow

# Display configured variables
Write-Host "`nConfigured Environment Variables:" -ForegroundColor Cyan
Write-Host "MONGODB_URI: $env:MONGODB_URI"
Write-Host "SERVER_PORT: $env:SERVER_PORT"
Write-Host "AUTHORIZATION_SERVICE_URL: $env:AUTHORIZATION_SERVICE_URL"
