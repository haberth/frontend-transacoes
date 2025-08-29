package com.example.webhook.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDateTime;

public class WebhookResponse {

    @JsonProperty("status")
    private String status;

    @JsonProperty("message")
    private String message;

    @JsonProperty("webhook_id")
    private String webhookId;

    @JsonProperty("processed_at")
    private LocalDateTime processedAt;

    @JsonProperty("processing_time_ms")
    private Long processingTimeMs;

    // Constructors
    public WebhookResponse() {
        this.processedAt = LocalDateTime.now();
    }

    public WebhookResponse(String status, String message) {
        this();
        this.status = status;
        this.message = message;
    }

    public WebhookResponse(String status, String message, String webhookId) {
        this(status, message);
        this.webhookId = webhookId;
    }

    // Factory methods for common responses
    public static WebhookResponse success(String message, String webhookId) {
        return new WebhookResponse("SUCCESS", message, webhookId);
    }

    public static WebhookResponse success(String message) {
        return new WebhookResponse("SUCCESS", message);
    }

    public static WebhookResponse error(String message, String webhookId) {
        return new WebhookResponse("ERROR", message, webhookId);
    }

    public static WebhookResponse error(String message) {
        return new WebhookResponse("ERROR", message);
    }

    // Getters and Setters
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getWebhookId() {
        return webhookId;
    }

    public void setWebhookId(String webhookId) {
        this.webhookId = webhookId;
    }

    public LocalDateTime getProcessedAt() {
        return processedAt;
    }

    public void setProcessedAt(LocalDateTime processedAt) {
        this.processedAt = processedAt;
    }

    public Long getProcessingTimeMs() {
        return processingTimeMs;
    }

    public void setProcessingTimeMs(Long processingTimeMs) {
        this.processingTimeMs = processingTimeMs;
    }

    @Override
    public String toString() {
        return "WebhookResponse{" +
                "status='" + status + '\'' +
                ", message='" + message + '\'' +
                ", webhookId='" + webhookId + '\'' +
                ", processedAt=" + processedAt +
                ", processingTimeMs=" + processingTimeMs +
                '}';
    }
}
