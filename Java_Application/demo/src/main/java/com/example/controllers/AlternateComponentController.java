package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dtos.SubCompPrice;
import com.example.services.AlternateComponentService;

@RestController
@CrossOrigin
public class AlternateComponentController {

	@Autowired
	
	AlternateComponentService alt_mgr;

	@GetMapping("api/defcompname/{model_id}")
	public List<SubCompPrice> getDefaultCompname(@PathVariable int model_id) {
		return alt_mgr.getDefaultCompname(model_id);
	}

	@GetMapping("api/config/{model_id}/{comp_name}")
	public List<SubCompPrice> getConfigurableconfig(@PathVariable int model_id , @PathVariable String comp_name) {
		// TODO Auto-generated method stub
		return alt_mgr.getConfigurableConfig(model_id , comp_name);
	}
	
	@GetMapping("api/std/{model_id}")
	public List<String> getCompnameByStd(@PathVariable int model_id) {
		return alt_mgr.getCompnameByStd(model_id);
	}
	
	@GetMapping("api/interior/{model_id}")
	public List<String> getCompnameByInt(@PathVariable int model_id) {
		return alt_mgr.getCompnameByInt(model_id);
	}
	
	@GetMapping("api/exterior/{model_id}")
	public List<String> getCompnameByExt(@PathVariable int model_id) {
		return alt_mgr.getCompnameByExt(model_id);
	}
	

	@GetMapping("api/invoice/{alt_id}")
	public SubCompPrice getFinalConfig(@PathVariable int alt_id) {
		return alt_mgr.getFinalConfig(alt_id);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//
//	@GetMapping("api/airbag/{model_id}")
//	public List<SubCompPrice> getConfigurableAirbag(@PathVariable int model_id) {
//		// TODO Auto-generated method stub
//		return alt_mgr.getConfigurableAirbag(model_id);
//	}
//
//	@GetMapping("api/gps/{model_id}")
//	public List<SubCompPrice> getConfigurableGPSNavigation(@PathVariable int model_id) {
//		// TODO Auto-generated method stub
//		return alt_mgr.getConfigurableGPSNavigation(model_id);
//	}
//
//	// interior
//	@GetMapping("api/bt/{model_id}")
//	public List<SubCompPrice> getConfigurableBlueTooth(@PathVariable int model_id) {
//		// TODO Auto-generated method stub
//		return alt_mgr.getConfigurableClimateControl(model_id);
//	}
//
//	@GetMapping("api/info/{model_id}")
//	public List<SubCompPrice> getConfigurableInfoSys(@PathVariable int model_id) {
//		// TODO Auto-generated method stub
//		return alt_mgr.getConfigurableInfoSys(model_id);
//	}
//
//	@GetMapping("api/climatecontrol/{model_id}")
//	public List<SubCompPrice> getConfigurableClimateControl(@PathVariable int model_id) {
//		// TODO Auto-generated method stub
//		return alt_mgr.getConfigurableClimateControl(model_id);
//	}
//
//	// exterior
//	@GetMapping("api/alloy/{model_id}")
//	public List<SubCompPrice> getConfigurableAlloy(@PathVariable int model_id) {
//		// TODO Auto-generated method stub
//		return alt_mgr.getConfigurableAlloy(model_id);
//	}
//
//	@GetMapping("api/led/{model_id}")
//	public List<SubCompPrice> getConfigurableLED(@PathVariable int model_id) {
//		// TODO Auto-generated method stub
//		return alt_mgr.getConfigurableLED(model_id);
//	}
//
//	@GetMapping("api/parkingsensor/{model_id}")
//	public List<SubCompPrice> getConfigurableParkingSensor(@PathVariable int model_id) {
//		// TODO Auto-generated method stub
//		return alt_mgr.getConfigurableParkingSensor(model_id);
//	}

}
