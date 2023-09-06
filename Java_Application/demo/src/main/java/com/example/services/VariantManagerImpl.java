package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Variant;
import com.example.repositories.VariantRepository;

@Service
public class VariantManagerImpl implements Variantmanager {
	@Autowired
	private VariantRepository var_repo;

	@Override
	public List<Variant> getvariant(int seg_id, int mfg_id) {
		// TODO Auto-generated method stub
		return var_repo.getVariants(seg_id, mfg_id);
	}


	
	

	

}
