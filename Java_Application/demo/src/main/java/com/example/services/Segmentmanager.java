package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.query.Param;

import com.example.entities.Segment;

public interface Segmentmanager {
	
	List<Segment> Getallseg ();
	int getqty( int seg_id);

}
