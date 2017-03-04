package org.sample.web.controller;

import java.util.List;

import org.sample.common.SampleQuery;
import org.sample.service.SampleService;
import org.sample.vo.SampleVo;
import org.sample.web.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SampleController {

	@Autowired
	private SampleService sampleService;
	
	@RequestMapping("/sample/list")
	@ResponseBody
	public Result list(SampleQuery query) {
		Result result = new Result();
		/*List<SampleVo> samplelist = new ArrayList<SampleVo>();
		SampleVo s1 = new SampleVo();
		s1.setCode("code1");
		s1.setDate(new Date());
		s1.setPlace("place1");
		s1.setSampleId(1L);
		s1.setSampleName("samplename1");
		s1.setStatus("1");
		samplelist.add(s1);
		SampleVo s2 = new SampleVo();
		s2.setCode("code2");
		s2.setDate(new Date());
		s2.setPlace("place2");
		s2.setSampleId(2L);
		s2.setSampleName("samplename2");
		s2.setStatus("2");
		samplelist.add(s2);*/
		
		List<SampleVo> list = sampleService.searchSampleList(query);
		result.setStatus(0);
		result.setData(list);
		return result;
	}
}
