
$(function() {
	
	
	
	
	(function login_validate() {
		// 注册界面手机号栏失去焦点
		$(".phone").blur(function() {
			accountReg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if($(this).val() == "" || $(this).val() == "请输入您的账号") {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("账号不能为空！");
				console.log("账号不能为空");
				return;
			} 	else {
				$(this).addClass("correctInput");
				$(this).removeClass("errorInput");
				$(this).next().empty();
			}
		});

 
		// 注册界面密码栏失去焦点
		$(".Password").blur(function() {
			reg = /^[A-Za-z0-9]{6}$/
			if($(this).val() == "") {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("密码不能为空！");
			} else if(!reg.test($(".Password").val())) {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("请输入6位包含数字或字母的密码！");
			} else {
				$(this).addClass("correctInput");
				$(this).removeClass("errorInput");
				$(this).next().empty();
			}
		});
		// 注册界面确认密码失去焦点
		$(".again").blur(function() {
			var pwd1 = $('.Password').val();
			var pwd2 = $(this).val();
			if(pwd1 == "") {
				$(this).removeClass("errorInput");
				$(this).next().html("确认密码不能为空！");
				$(this).addClass("errorInput");
				return;
			} else if(pwd1 != pwd2) {
				$(this).addClass("errorInput");
				$(this).removeClass("correctInput");
				$(this).next().css("display", "block").html("两次密码输入不一致！");
			} else {
				$(this).removeClass("errorInput");
				$(this).addClass("correctInput");
				$(this).next().empty();
			}	
		});
		$(".email1").blur(function() {
			var email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
			if($(this).val() == "") {
				$(this).removeClass("errorInput");
				$(this).next().css("display", "block").html("邮箱不能为空！");
				$(this).addClass("errorInput");
				return;
			} else if(!email.test($(".email1").val())) {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("格式不正确！请重新输入");
			}
		})
	})();
})