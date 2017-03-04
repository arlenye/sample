package org.sample.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.sample.common.SampleQuery;
import org.sample.dao.SampleDo;
import org.sample.dao.mapper.SampleDoMapperExt;
import org.sample.service.SampleService;
import org.sample.vo.SampleVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("bookService")
@Transactional
public class SampleServiceImpl implements SampleService{
	
	private static final String DICT_TYPE = "pdDoFilter";

	@Autowired
	private SampleDoMapperExt sampleDoMapperExt;
	
	public List<SampleVo> searchSampleList(SampleQuery query) {
		List<String> codeList = sampleDoMapperExt.selectLabelKeys(DICT_TYPE);
		
		query.setCodeList(codeList);
		
		int start = (query.getPageNo()-1 ) * query.getPageSize();
		query.setStart(start);
		List<SampleDo> sampleList = sampleDoMapperExt.selectSamplesByPageCondition(query);
		List<SampleVo> voList = new ArrayList<SampleVo>();
		for(SampleDo sdo:sampleList){
			SampleVo vo= new SampleVo();
			vo.setCode(sdo.getCode());
			vo.setDate(sdo.getDate());
			vo.setPlace(sdo.getPlace());
			vo.setSampleId(sdo.getSampleId());
			vo.setSampleName(sdo.getSampleName());
			vo.setStatus(sdo.getStatus());
			voList.add(vo);
		}
		return voList;
	}

}
