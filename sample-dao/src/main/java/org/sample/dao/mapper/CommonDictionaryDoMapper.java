package org.sample.dao.mapper;

import java.util.List;
import org.sample.dao.CommonDictionaryDo;
import org.sample.dao.CommonDictionaryDoExample;

public interface CommonDictionaryDoMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table common_dictionary
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    int countByExample(CommonDictionaryDoExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table common_dictionary
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table common_dictionary
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    int insert(CommonDictionaryDo record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table common_dictionary
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    int insertSelective(CommonDictionaryDo record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table common_dictionary
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    List<CommonDictionaryDo> selectByExample(CommonDictionaryDoExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table common_dictionary
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    CommonDictionaryDo selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table common_dictionary
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    int updateByPrimaryKeySelective(CommonDictionaryDo record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table common_dictionary
     *
     * @mbggenerated Wed Dec 21 22:13:44 CST 2016
     */
    int updateByPrimaryKey(CommonDictionaryDo record);
}