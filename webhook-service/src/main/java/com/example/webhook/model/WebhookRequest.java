package com.example.webhook.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;
import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class WebhookRequest {

    @NotBlank(message = "Event type is required")
    @JsonProperty("event_type")
    private String eventType;

    @NotBlank(message = "Source is required")
    @JsonProperty("source")
    private String source;

    @NotNull(message = "Data is required")
    @JsonProperty("data")
    private Map<String, Object> data;

    @JsonProperty("timestamp")
    private LocalDateTime timestamp;

    @JsonProperty("signature")
    private String signature;

    @JsonProperty("webhook_id")
    private String webhookId;

    // Constructors
    public WebhookRequest() {
        this.timestamp = LocalDateTime.now();
    }

    public WebhookRequest(String eventType, String source, Map<String, Object> data) {
        this();
        this.eventType = eventType;
        this.source = source;
        this.data = data;
    }

    // Getters and Setters
    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public Map<String, Object> getData() {
        return data;
    }

    public void setData(Map<String, Object> data) {
        this.data = data;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public String getWebhookId() {
        return webhookId;
    }

    public void setWebhookId(String webhookId) {
        this.webhookId = webhookId;
    }

    @Override
    public String toString() {
        return "WebhookRequest{" +
                "eventType='" + eventType + '\'' +
                ", source='" + source + '\'' +
                ", data=" + data +
                ", timestamp=" + timestamp +
                ", signature='" + signature + '\'' +
                ", webhookId='" + webhookId + '\'' +
                '}';
    }
}
