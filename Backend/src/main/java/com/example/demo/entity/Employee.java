package com.example.demo.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Entity(name="Employee")
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public class Employee {
        @Id
        @GeneratedValue(strategy = GenerationType.UUID)
        private UUID id;
        private String name;
        private String email;
        private String position;
        private Double ctc;
        private Date dateOfOffer;
        private Date acceptanceDate;

        public UUID getId() {
            return id;
        }

        public void setId(UUID id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPosition() {
            return position;
        }

        public void setPosition(String position) {
            this.position = position;
        }

        public Double getCtc() {
            return ctc;
        }

        public void setCtc(Double ctc) {
            this.ctc = ctc;
        }

        public Date getDateOfOffer() {
            return dateOfOffer;
        }

        public void setDateOfOffer(Date dateOfOffer) {
            this.dateOfOffer = dateOfOffer;
        }

        public Date getAcceptanceDate() {
            return acceptanceDate;
        }

        public void setAcceptanceDate(Date acceptanceDate) {
            this.acceptanceDate = acceptanceDate;
        }

        @java.lang.Override
        public java.lang.String toString() {
            return "Template{" +
                    "id=" + id +
                    ", name='" + name + '\'' +
                    ", email='" + email + '\'' +
                    ", position='" + position + '\'' +
                    ", ctc=" + ctc +
                    ", dateOfOffer=" + dateOfOffer +
                    ", acceptanceDate=" + acceptanceDate +
                    '}';
        }
    }

