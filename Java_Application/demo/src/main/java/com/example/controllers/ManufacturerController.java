package com.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import com.example.entities.Manufacturer;
import com.example.services.Manufacturermanager;
@RestController
@CrossOrigin
public class ManufacturerController {
	
	@Autowired
	private Manufacturermanager mfr_mgr;
	
	@GetMapping("api/mfgbyid/{seg_id}")
	public List<Manufacturer> getmfgbysegid(@PathVariable int seg_id){
		return  mfr_mgr.getManufacturerssegid(seg_id);
	}
	
	@GetMapping("api/allmfg")
	public List<Manufacturer> getmfglist()
	{
		return mfr_mgr.getallmanufacturer();
	}

}
