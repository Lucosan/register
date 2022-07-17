package com.lucosan.javareact.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lucosan.javareact.entities.Sale;
import com.lucosan.javareact.repositories.SaleRepository;

@Service
public class SalesService {

	@Autowired
	private SaleRepository repository;
	
	public List<Sale> findSales() {
		return repository.findAll();
	}
}
