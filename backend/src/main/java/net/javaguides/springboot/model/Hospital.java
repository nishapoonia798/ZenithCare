package net.javaguides.springboot.model;

import jakarta.persistence.*;
import lombok.*;

//uses Entity for JPA mapping 
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "hospitals")

public class Hospital {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String address;
    private String specialization;
    private String contact;
    private Double rating;
}
