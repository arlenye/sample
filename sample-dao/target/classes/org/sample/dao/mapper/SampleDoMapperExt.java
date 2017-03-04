package org.sample.dao.mapper;

import java.util.List;

import org.sample.common.SampleQuery;
import org.sample.dao.SampleDo;

public interface SampleDoMapperExt extends  SampleDoMapper{
	
	public List<SampleDo> selectSamplesByPageCondition(SampleQuery query);
	
	public List<String> selectLabelKeys(String dictTyep);
	
	public Long getTotal();
   
}