package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Manufacturer;
import com.example.entities.Segment;
import com.example.repositories.ManufacturerRepository;
import com.example.repositories.SegmentRepository;

@Service
public class ManufacturerManagerImpl implements Manufacturermanager {
	@Autowired
	private ManufacturerRepository mgr_repo;

	@Override
	public List<Manufacturer> getallmanufacturer() {
		return mgr_repo.findAll();
	}

	
	public List<Manufacturer> getManufacturerssegid(int seg_id) {
		// TODO Auto-generated method stub
		return mgr_repo.getManufacturers(seg_id);
	}

	

}
