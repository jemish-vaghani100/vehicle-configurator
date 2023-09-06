package com.example.entities;


import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Variant")
public class Variant {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int model_id;
	String model_name;
	double price;
	


	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "seg_id")
	Segment segment;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "mfg_id")
	Manufacturer manufacturer;
	
	@OneToMany(cascade = CascadeType.ALL , mappedBy = "variant")
	private Set<Vehicle_detail> vehicles;

	public int getModel_id() {
		return model_id;
	}

	public void setModel_id(int model_id) {
		this.model_id = model_id;
	}

	public String getModel_name() {
		return model_name;
	}

	public void setModel_name(String model_name) {
		this.model_name = model_name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	
}