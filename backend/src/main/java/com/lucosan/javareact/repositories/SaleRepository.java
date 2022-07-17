package com.lucosan.javareact.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lucosan.javareact.entities.Sale;

public interface SaleRepository extends JpaRepository <Sale, Long> {

}
