package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.Manufacturer;
import com.example.entities.Segment;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface ManufacturerRepository extends JpaRepository<Manufacturer, Integer> {
	
	@Query(value = "select m.* from manufacturer m join segment s on s.seg_id = m.seg_id where m.seg_id = :seg_id",nativeQuery = true)
	List<Manufacturer>getManufacturers(@Param("seg_id") int seg_id);
	
}
