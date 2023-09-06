package com.example.services;

import java.util.List;

import com.example.entities.Manufacturer;
import com.example.entities.Segment;

public interface Manufacturermanager {
	List<Manufacturer> getallmanufacturer();
	List<Manufacturer> getManufacturerssegid(int seg_id);
}
