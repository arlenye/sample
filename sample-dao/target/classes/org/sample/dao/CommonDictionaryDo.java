package org.sample.dao;

public class CommonDictionaryDo {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column common_dictionary.id
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    private Integer id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column common_dictionary.dict_type
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    private String dictType;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column common_dictionary.label_key
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    private String labelKey;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column common_dictionary.descr
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    private String descr;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column common_dictionary.id
     *
     * @return the value of common_dictionary.id
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column common_dictionary.id
     *
     * @param id the value for common_dictionary.id
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column common_dictionary.dict_type
     *
     * @return the value of common_dictionary.dict_type
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    public String getDictType() {
        return dictType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column common_dictionary.dict_type
     *
     * @param dictType the value for common_dictionary.dict_type
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    public void setDictType(String dictType) {
        this.dictType = dictType == null ? null : dictType.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column common_dictionary.label_key
     *
     * @return the value of common_dictionary.label_key
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    public String getLabelKey() {
        return labelKey;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column common_dictionary.label_key
     *
     * @param labelKey the value for common_dictionary.label_key
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    public void setLabelKey(String labelKey) {
        this.labelKey = labelKey == null ? null : labelKey.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column common_dictionary.descr
     *
     * @return the value of common_dictionary.descr
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    public String getDescr() {
        return descr;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column common_dictionary.descr
     *
     * @param descr the value for common_dictionary.descr
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    public void setDescr(String descr) {
        this.descr = descr == null ? null : descr.trim();
    }
}