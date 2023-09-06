package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.Segment;

import jakarta.transaction.Transactional;
@Repository
@Transactional
public interface SegmentRepository  extends JpaRepository<Segment,Integer>{
	
	@Query(value = "select qty from segment where seg_id = :seg_id",nativeQuery = true)
	int getqty(@Param("seg_id") int seg_id);
}
