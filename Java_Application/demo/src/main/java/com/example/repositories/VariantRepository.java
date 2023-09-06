package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.Variant;

import jakarta.transaction.Transactional;
@Repository
@Transactional
public interface VariantRepository extends JpaRepository<Variant, Integer> {
	@Query(value = "SELECT distinct v.* FROM segment AS s INNER JOIN manufacturer AS m ON s.seg_id = m.seg_id INNER JOIN variant AS v ON v.seg_id = :seg_id AND v.mfg_id = :mfg_id",nativeQuery=true)
	List<Variant> getVariants(@Param("seg_id")int seg_id,@Param("mfg_id")int mfg_id);
	
	
}
