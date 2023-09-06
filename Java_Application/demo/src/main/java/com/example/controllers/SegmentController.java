package com.example.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Segment;

import com.example.services.Segmentmanager;

@RestController
@CrossOrigin
public class SegmentController {
	@Autowired
	private Segmentmanager seg_mgr;

	@GetMapping("api/segments")
	public List<Segment> getseg() {
		return seg_mgr.Getallseg();
	}
	
	@GetMapping("api/segments/getqty/{seg_id}")
	int getqty(@PathVariable int seg_id)
	{
		return seg_mgr.getqty(seg_id);
	}
	/*
	@GetMapping("api/{id}")
	Optional<Segment> getbyid1(int id)
	{
		return seg_mgr.byid(id);
	}*/

}
