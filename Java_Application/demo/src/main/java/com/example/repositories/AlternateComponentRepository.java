package com.example.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.dtos.SubCompPrice;
import com.example.entities.Alternate_Component;

import jakarta.transaction.Transactional;
@Repository
@Transactional
public interface AlternateComponentRepository extends JpaRepository<Alternate_Component	, Integer>
{

	@Query(value = "select new com.example.dtos.SubCompPrice (c.sub_type,a.delta_price) from Component c join Alternate_Component a on c.comp_id = a.alt_comp_id where model_id = :model_id")
		public List<SubCompPrice> getDefaultCompname(@Param("model_id") int model_id);
	
	@Query(value ="select distinct comp_name from vehicle_detail v join component c on v.comp_id = c.comp_id where is_configurable = 'y' and v.model_id = :model_id and v.comp_type = 's' ", nativeQuery = true)
	List<String> getCompnameByStd(@Param("model_id") int model_id);
	
	@Query(value ="select distinct comp_name from vehicle_detail v join component c on v.comp_id = c.comp_id where is_configurable = 'y' and v.model_id = :model_id and v.comp_type = 'i' ", nativeQuery = true)
	List<String> getCompnameByInt(@Param("model_id") int model_id);
	
	@Query(value ="select distinct comp_name from vehicle_detail v join component c on v.comp_id = c.comp_id where is_configurable = 'y' and v.model_id = :model_id and v.comp_type = 'e' ", nativeQuery = true)
	List<String> getCompnameByExt(@Param("model_id") int model_id);
	
	
	@Query(value = "select new com.example.dtos.SubCompPrice (c.sub_type,a.delta_price,a.alt_id) from Component c join Alternate_Component a on c.comp_id = a.alt_comp_id where model_id = :model_id and comp_name = :comp_name" )
	public List<SubCompPrice> getConfigurableConfig(@Param("model_id") int model_id , @Param("comp_name") String comp_name);
	
	
	@Query(value = "select new com.example.dtos.SubCompPrice (c.sub_type,a.delta_price,a.alt_id) from Component c join Alternate_Component a on c.comp_id = a.alt_comp_id where alt_id = :alt_id" )
	public SubCompPrice getFinalConfig(@Param("alt_id") int alt_id );
	
	
	
	
	
	
	
	
	
	
	
	
	
//	@Query(value = "select new com.example.dtos.SubCompPrice (c.sub_type,a.delta_price) from Component c join Alternate_Component a on c.comp_id = a.alt_comp_id where comp_name = 'Air Bag' and model_id = :model_id")
//	public List<SubCompPrice> getConfigurableAirbag(@Param("model_id") int model_id);
//	
//	@Query(value = "select new com.example.dtos.SubCompPrice (c.sub_type,a.delta_price) from Component c join Alternate_Component a on c.comp_id = a.alt_comp_id where comp_name = 'GPS Navigation' and model_id = :model_id ")
//	public List<SubCompPrice> getConfigurableGPSNavigation(@Param("model_id") int model_id);
//	
//	//Interior
//	
//	@Query(value = "select new com.example.dtos.SubCompPrice (c.sub_type,a.delta_price) from Component c join Alternate_Component a on c.comp_id = a.alt_comp_id where comp_name = 'Bluetooth' and model_id = :model_id")
//	public List<SubCompPrice> getConfigurableBlueTooth(@Param("model_id") int model_id);
//	
//	@Query(value = "select new com.example.dtos.SubCompPrice (c.sub_type,a.delta_price) from Component c join Alternate_Component a on c.comp_id = a.alt_comp_id where comp_name = 'Info System' and model_id = :model_id")
//	public List<SubCompPrice> getConfigurableInfoSys(@Param("model_id") int model_id);
//	
//	@Query(value = "select new com.example.dtos.SubCompPrice (c.sub_type,a.delta_price) from Component c join Alternate_Component a on c.comp_id = a.alt_comp_id where comp_name = 'Climate Control' and model_id = :model_id")
//	public List<SubCompPrice> getConfigurableClimateControl(@Param("model_id") int model_id);
//	
//	//Exterior
//	
//	@Query(value = "select new com.example.dtos.SubCompPrice (c.sub_type,a.delta_price) from Component c join Alternate_Component a on c.comp_id = a.alt_comp_id where comp_name = 'Alloy Wheel' and model_id = :model_id")
//	public List<SubCompPrice> getConfigurableAlloy(@Param("model_id") int model_id);
//	
//	@Query(value = "select new com.example.dtos.SubCompPrice (c.sub_type,a.delta_price) from Component c join Alternate_Component a on c.comp_id = a.alt_comp_id where comp_name = 'LED' and model_id = :model_id")
//	public List<SubCompPrice> getConfigurableLED(@Param("model_id") int model_id);
//	
//	@Query(value = "select new com.example.dtos.SubCompPrice (c.sub_type,a.delta_price) from Component c join Alternate_Component a on c.comp_id = a.alt_comp_id where comp_name = 'Parking Sensor' and model_id = :model_id")
//	public List<SubCompPrice> getConfigurableParkingSensor(@Param("model_id") int model_id);
}
