package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Variant;
import com.example.services.Variantmanager;

@RestController
@CrossOrigin
public class VariantController {

	@Autowired
	private Variantmanager var_mgr;

	@GetMapping("api/variants/{seg_id}/{mfg_id}")
	public List<Variant> getVariantList(@PathVariable int seg_id, @PathVariable int mfg_id) {
		return var_mgr.getvariant(seg_id, mfg_id);
	}
	
	
}
