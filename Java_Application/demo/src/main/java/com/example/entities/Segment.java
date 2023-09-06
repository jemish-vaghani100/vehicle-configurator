package com.example.entities;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Segment")
public class Segment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int seg_id;
	String seg_name;
	
	int qty;

	@OneToMany(mappedBy = "segment", cascade = CascadeType.ALL)
	Set<Manufacturer> manufacturers;

	@OneToMany(mappedBy = "segment", cascade = CascadeType.ALL)
	Set<Variant> variants;

	public int getSeg_id() {
		return seg_id;
	}

	public void setSeg_id(int seg_id) {
		this.seg_id = seg_id;
	}

	public String getSeg_name() {
		return seg_name;
	}

	public void setSeg_name(String seg_name) {
		this.seg_name = seg_name;
	}



}