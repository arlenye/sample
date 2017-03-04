package org.sample.vo;

import java.util.Date;

public class SampleVo {
	private Long sampleId ;
	private String sampleName;
	private String code;
	private String place;
	private Date date;
	private String status;
	public Long getSampleId() {
		return sampleId;
	}
	public void setSampleId(Long sampleId) {
		this.sampleId = sampleId;
	}
	public String getSampleName() {
		return sampleName;
	}
	public void setSampleName(String sampleName) {
		this.sampleName = sampleName;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}
