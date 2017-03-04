package org.sample.service;

import java.util.List;

import org.sample.common.SampleQuery;
import org.sample.vo.SampleVo;

public interface SampleService {

	public List<SampleVo> searchSampleList(SampleQuery query);
}
