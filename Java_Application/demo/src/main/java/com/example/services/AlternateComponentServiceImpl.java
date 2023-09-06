package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.example.dtos.SubCompPrice;
import com.example.repositories.AlternateComponentRepository;
@Service
public class AlternateComponentServiceImpl implements AlternateComponentService {
	
	@Autowired
	AlternateComponentRepository alt_repo;

	@Override
	public List<SubCompPrice> getDefaultCompname(int model_id) {
		// TODO Auto-generated method stub
		return alt_repo.getDefaultCompname(model_id);
	}

	@Override
	public List<String> getCompnameByStd(int model_id) {
		// TODO Auto-generated method stub
		return alt_repo.getCompnameByStd(model_id);
	}

	@Override
	public List<String> getCompnameByInt(int model_id) {
		// TODO Auto-generated method stub
		return alt_repo.getCompnameByInt(model_id);
	}

	@Override
	public List<String> getCompnameByExt(int model_id) {
		// TODO Auto-generated method stub
		return alt_repo.getCompnameByExt(model_id);
	}

	@Override
	public List<SubCompPrice> getConfigurableConfig(int model_id, String comp_name) {
		// TODO Auto-generated method stub
		return alt_repo.getConfigurableConfig(model_id, comp_name);
	}


	@Override
	public SubCompPrice getFinalConfig(int alt_id) {
		return alt_repo.getFinalConfig(alt_id);
	}
	
	
	
//	@Override
//	public List<SubCompPrice> getConfigurableAirbag(int model_id) {
//		// TODO Auto-generated method stub
//		return alt_repo.getConfigurableAirbag(model_id);
//	}
//
//	@Override
//	public List<SubCompPrice> getConfigurableGPSNavigation(int model_id) {
//		// TODO Auto-generated method stub
//		return alt_repo.getConfigurableGPSNavigation(model_id);
//	}
////interior
//	@Override
//	public List<SubCompPrice> getConfigurableBlueTooth(int model_id) {
//		// TODO Auto-generated method stub
//		return alt_repo.getConfigurableClimateControl(model_id);
//	}
//
//	@Override
//	public List<SubCompPrice> getConfigurableInfoSys(int model_id) {
//		// TODO Auto-generated method stub
//		return alt_repo.getConfigurableInfoSys(model_id);
//	}
//
//	@Override
//	public List<SubCompPrice> getConfigurableClimateControl(int model_id) {
//		// TODO Auto-generated method stub
//		return alt_repo.getConfigurableClimateControl(model_id);
//	}
////exterior
//	@Override
//	public List<SubCompPrice> getConfigurableAlloy(int model_id) {
//		// TODO Auto-generated method stub
//		return alt_repo.getConfigurableAlloy(model_id);
//	}
//
//	@Override
//	public List<SubCompPrice> getConfigurableLED(int model_id) {
//		// TODO Auto-generated method stub
//		return alt_repo.getConfigurableLED(model_id);
//	}
//
//	@Override
//	public List<SubCompPrice> getConfigurableParkingSensor(int model_id) {
//		// TODO Auto-generated method stub
//		return alt_repo.getConfigurableParkingSensor(model_id);
//	}
//



}
