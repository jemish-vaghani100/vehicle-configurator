package com.example.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Manufacturer")
public class Manufacturer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int mfg_id;
	String mfg_name;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "seg_id")
	Segment segment;

	public int getMfg_id() {
		return mfg_id;
	}

	public void setMfg_id(int mfg_id) {
		this.mfg_id = mfg_id;
	}

	public String getMfg_name() {
		return mfg_name;
	}

	public void setMfg_name(String mfg_name) {
		this.mfg_name = mfg_name;
	}

//	public Segment getSegment() {
//		return segment;
//	}
//
//	public void setSegment(Segment segment) {
//		this.segment = segment;
//	}
//	

}