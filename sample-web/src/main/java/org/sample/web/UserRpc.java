package org.sample.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.sample.web.vo.UserVo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 用户管理
 * 
 * @author Arlen
 *
 */
@Controller
public class UserRpc {

	/*@Autowired
	private UserService userService;

	public UserService getUserService() {
		return userService;
	}

	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}*/

	@RequestMapping("/userList")
	@ResponseBody
	public Map<String,Object> list(ModelMap model) {
		Map<String,Object> result= new HashMap<String,Object>();
		List<UserVo> userList = new ArrayList<UserVo>();
		UserVo u1 = new UserVo();
		u1.setEmail("sdf@163.com");
		u1.setUserId("sdf");
		u1.setUserName("Arlen");
		userList.add(u1);
		UserVo u2 = new UserVo();
		u2.setEmail("sdf3@163.com");
		u2.setUserId("sdf3");
		u2.setUserName("Arlen3");
		userList.add(u2);
		model.put("users", userList);
		result.put("userList", userList);
		return result;
	}

}
