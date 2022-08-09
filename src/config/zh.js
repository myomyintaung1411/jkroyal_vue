export default {
  general:{
    title:'皇家娱乐',
    lang:'语言',
    en:'英语',
    cz:'简体中文',
    all:'全部',
    bjl:'百家乐',
    dragon:'龙虎',
    cow:'牛牛',
    onlineUser:'在线用户',
    real:'即时的',
   },
    route: {
      dashboard: '首页',
      documentation: '文档',
      guide: '引导页',
      ManageUser: '用户管理',
      Management: '管理',
      AgentsList: '代理管理',
      UsersList: '用户列表',
      SearchList: '用户搜索',
      MembersList: '会员管理',
      SubAccountManage: '子账号管理',
      UserTotalList: '用户总表',
      PlayerTotalList: '会员总表',
      AgentTotalList: '代理总表',
      BetRecords: '游戏记录',
      RecordsPage: '记录查询',
      LoginRecords: '登录记录',
      AccessRecords: '上下分记录',
      AccountChangeRecords: '账号变更记录',
      ReportsPage: '总报表',
      GameReport: '游戏报表',
      OnlinePage: '在线管理',
      RealTimeBet: '在线投注',
      OnlineMembers: '在线用户',
      PublicAnnouncement: '发布公告',
      HgManage: '路单管理',
      LdCancel: '路单作废',
      HgSetup: '路单修改',
      HgLists: '荷官列表',
      errorPages: '错误页面',
      page401: '401',
      page404: '404',
      errorLog: '错误日志',
      profile: '个人中心',
      TotalBalance: '余额统计',
      CarouselManage: '轮播图管理',
      CarouselList: '轮播图列表'
    },
    dashboard: {
      total_agents: '代理总数',
      today_increase_agent: '今日新增代理数',
      total_players: '会员总数',
      today_increase_player: '今日新增会员数',
      agent: '代理',
      player: '会员',
      // 账号信息
      my_info: '账号信息',
      account: '账号',
      balance: '余额',
      zhan_cheng_bi: '占成比',
      xi_ma_bi: '洗码比',
      last_login_time: '登录时间',
      last_login_ip: '登录IP',
  
      // 客户状态
      member_info: '客户信息',
      online_player: '在线会员',
      direct_player_balance: '直属会员余额',
      other_player_balance: '其他会员余额',
      all_player_balance: '总会员余额',
      all_agent_balance: '代理余额',
  
      // 修改密码
      change_password: '修改登录密码',
      old_password: '原始密码',
      new_password: '新密码',
      confirm_password: '确认密码',
  
      warning: '温馨提示',
      warning_text: `为了保护您的账号和资金安全, 请不要设置过于简单的密码
        例如：888888/111111/12345678/和用户名相同等...
        请使用 英文字母大小写+数字+特殊字符串(8位数以上)
        建议您 15天 更换一次密码 ( 密码不要过于简单哦 )`,
  
      // 推广信息
      qq: 'QQ号',
      qq_plh: '多个用 $ 符号隔开',
      wechat: '微信号',
      wechat_plh: '请输入',
      phone: '手机号',
      phone_plh: '多个用 $ 符号隔开',
      added_qq: '当前QQ号',
      added_wechat: '当前微信号',
      added_phone: '当前手机号',
      router_search: '导航搜索'
    },
    font_size: {
      default: '默认',
      medium: '中等',
      small: '偏小',
      mini: '超小'
    },
    // 用户列表
    user_list: {
      location: '当前位置',
      user_info: '用户信息',
      account: '账号',
      username: '用户名',
      nickname: '昵称',
      state: '状态',
      point: '真人点数',
      percent: '占成比例',
      xi_ma: '洗码比例',
      more: '扩展功能',
      select: '请选择',
      level: '级别',
      superior: '上级代理'
    },
    subacc: {
      add_subacc: '添加子账号',
      edit_subacc: '修改子账号',
      enter_nickname_plh: '请输入昵称',
      enter_password_plh: '不修改请留空',
      subacc: '子账号',
      nickname: '昵称',
      state: '状态',
      login_time: '最近登录时间',
      login_ip: '登录IP',
      action: '操作',
      password: '密码'
    },
    // 代理列表页面
    agent_list: {
      account: '代理账号',
      nickname: '昵称',
      location: '目前所处',
      action: '操作项目',
      table_option: '表格选项',
      balance: '余额',
      relation: '账号关系',
      percent: '占成(%)',
      xi_ma_bi: '洗码比',
      xi_ma_type: '洗码类型',
      state: '状态',
      crated_time: '创建时间',
      login_ip: '登录IP',
      login_time: '登录时间'
    },
    // 会员列表页面
    player_list: {
      account: '会员账号',
      nickname: '昵称',
      location: '目前所处',
      action: '操作项目',
      table_option: '表格选项',
      balance: '余额',
      relation: '账号关系',
      percent: '占成(%)',
      xi_ma_bi: '洗码比',
      xi_ma_type: '洗码类型',
      state: '状态',
      crated_time: '创建时间',
      login_ip: '登录IP',
      login_time: '登录时间',
      online: '在线'
    },
    // 会员总表页面
    player_total_list: {
      account: '账号',
      nickname: '昵称',
      relation: '账号关系',
      balance: '余额',
      room: '所在房间',
      xi_ma_bi: '洗码比',
      login_ip: '登录IP',
      device: '设备',
      online_state: '在线状态',
      state: '状态',
      action: '更多记录',
      deposit_withdraw_record: '上下分记录',
      account_change_record: '变更记录',
      betting_record: '下注记录'
    },
    // 代理总表页面
    agent_total_list: {
      account: '账号',
      nickname: '昵称',
      relation: '账号关系',
      balance: '余额',
      xi_ma_bi: '洗码比',
      state: '状态',
      login_ip: '登录IP',
      device: '设备',
      online_state: '在线状态',
      more_record: '更多记录',
      deposit_withdraw_record: '上下分记录',
      operated_deposit_withdraw_record: '操作上下分记录',
      account_modify_record: '变更记录',
      operated_modify_record: '操作变更记录'
    },
    // 下注记录页面
    bet_record: {
      start_date: '起始日',
      to_date: '至',
      player_id: '会员ID',
      account: '账号',
      all: '全部',
      state: '状态',
      baccaret: '百家乐',
      cow_cow: '牛牛',
      dragon_tiger: '龙虎',
      sic_bo: '大小点',
      tui_tong_zi: '推筒子',
      statistics_of_current_time_period: '当前时间段统计: ',
      table: '台号',
      round: '靴号',
      round_1: '场次',
      settled: '已结算',
      unsettled: '未结算',
      settle_time: '时间',
      result: '开奖结果',
      bet_info: '下注类型',
      total_amount: '下注金额',
      profit: '盈利',
      xi_ma_bi: '洗码量',
      wash_type: '类型',
      effective_betting: '有效投注',
      balance: '余额',
      betting_ip: '投注IP',
      device: '设备',
      amount_detail: '余额备注',
      game: '游戏'
    },
    // 登录记录页面
    login_record: {
      account: '账号',
      level: '级别',
      device: '登录设备',
      login_time: '登录时间',
      login_ip: '登录IP',
      comment: '备注'
    },
    // 上下分记录页面
    access_record: {
      account: '被操作人',
      operationer_account: '操作人',
      all: '全部',
      deposit: '上分',
      withdraw: '下分',
      nickname: '昵称',
      level: '级别',
      type: '类型',
      amount: '交易金额',
      total_amount: '总金额',
      operationer: '操作人',
      operation_time: '操作时间',
      operation_ip: '操作IP',
      comment: '备注',
      from: '由 ',
      to: '变 ',
      deposit_to_lower: '存入下线',
      withdraw_from_lower: '取出下线',
      deposit_for_lower: '给下线加分',
      withdraw_for_lower: '给下线减分',
      manually: '手动上下分'
    },
    // 账号变更记录页面
    account_change_record: {
      account: '被操作人',
      nickname: '昵称',
      level: '级别',
      operationer: '操作人',
      operation_time: '操作时间',
      operation_ip: '操作IP',
      comment: '备注',
      modify_subordinate: ' 修改下级 ',
      change_nickname_from: ' 将昵称由 ',
      change_to: ' 改成 ',
      change_percent_from: ' 将占成比由 ',
      change_single_line_from: ' 将洗码率单由 ',
      change_multi_line_from: ' 将洗码率双由 ',
      change_line_from: ' 将洗码类型由 ',
      change_one_click_pass: ' 修改了一键结算密码 ',
      change_pass: ' 修改了密码 ',
      change_balance_from: ' 将余额由 ',
      single_line: '单边',
      multiple_line: '双边'
    },
    // 在线管理页面
    online_page: {
      user_account: '用户账号',
      user_account_plh: '只看的账号请用逗号隔开',
      online_user_number: '在线用户数',
      id: '会员ID',
      account: '账号',
      balance: '当前余额',
      ip_address: 'IP地址',
      realtime_betting_list: '当前投注, 注单详情表',
      game: '游戏',
      table: '台号',
      round: '场次',
      betting_info: '注单详情',
      table_number: '只看的台桌号',
      bet_id: '注单号',
      time: '时间',
      match: '场次',
      total_bet: '总押',
      bet_ip: '投注IP',
      device: '终端'
    },
    // 报表页面
    report_page: {
      location: '目前所处',
      personal_table: '个人收益表: ',
      direct_agent_table: '直属代理表: ',
      direct_player_table: '直属会员表: ',
      id: '用户ID',
      account: '账号',
      level: '级别',
      nickname: '昵称',
      total_betting_count: '投注次数',
      total_win_lose: '总输赢金额',
      percent: '占成(%)',
      xi_ma_bi: '洗码比例',
      xi_ma_liang: '洗码量',
      xi_ma_yong_jing: '洗码佣金',
      total_amount: '总金额',
      current_level_amount: '本级金额',
      shang_jiao_amount: '交公司金额'
    },
    // 公告页面
    announcement: {
      add: '添加公告消息',
      serial_number: '序号',
      title: '公告标题',
      content: '公告内容',
      from_date: '起始时间',
      to_date: '截止时间',
      action: '操作'
    },
    navbar: {
      dashboard: '首页',
      github: '项目地址',
      logOut: '退出登录',
      profile: '个人中心',
      theme: '换肤',
      size: '布局大小'
    },
    login: {
      title: '后台 管理系统',
      logIn: '登 录',
      username: '账号',
      password: '密码',
      icode: '验证码',
      any: '随便填',
      thirdparty: '第三方登录',
      thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟!!!',
      remember: '自动登录',
      username_input_alert: '提示：请输入用户账号',
      passward_input_alert: '提示：密码需要大于等于6位数',
      auth_code_input_alert: '提示: 验证码不正确!'
    },
    guide: {
      description: '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
      button: '打开引导'
    },
    errorLog: {
      tips: '请点击右上角bug小图标',
      description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
      documentation: '文档介绍'
    },
    excel: {
      export: '导出',
      selectedExport: '导出已选择项',
      placeholder: '请输入文件名(默认excel-list)'
    },
    tagsView: {
      refresh: '刷新',
      close: '关闭',
      closeOthers: '关闭其它',
      closeAll: '关闭所有'
    },
    settings: {
      title: '系统布局配置',
      theme: '主题色',
      tagsView: '开启 Tags-View',
      fixedHeader: '固定 Header',
      sidebarLogo: '侧边栏 Logo'
    },
    action: {
      backToTop: '返回顶部'
    },
    buttons: {
      mine: '自己',
      search: '搜索',
      refresh: '刷新',
      refresh_this_page: '刷新本页',
      refresh_relation: '关系数据刷新',
      reset: '重置',
      confirm: '确定',
      delete: '删除',
      confirm_change: '确认修改',
      cancel: '取消',
      cancel_search: '取消查询',
      today: '今日',
      yesterday: '昨日',
      thisWeek: '本周',
      lastWeek: '上周',
      thisMonth: '本月',
      lastMonth: '上月',
      export: '导出',
      addAgentPlayer: '代理/会员',
      addAgent: '添加代理',
      addPlayer: '添加会员',
      chargeWithdraw: '上/下分',
      modify: '设定',
      edit: '修改',
      permission: '权限',
      kick: '踢出',
      addAnnouncement: '添加公告消息',
      more: '更多',
      my_direct_player: `我的直属会员`,
      go_to: '前往查看 ',
      s_agent: `的代理`,
      s_player: `的会员`,
      start_date: '起始日',
      date_plh: '选择日期',
      to_date: '至',
      time_plh: '选择时间',
      date_time_plh: '请选择日期时间',
      location: '目前所处',
      action: '操作项目',
      table_option: '表格选项',
      hide: '隐藏',
      show: '显示',
      xi_ma: '洗码结算',
      login_record: '登录记录',
      deposit_withdraw_record: '上下分记录',
      operated_deposit_withdraw_record: '操作上下分记录',
      edit_account_record: '账号变更记录',
      operated_account_record: '操作账号变更记录',
      betting_record: '游戏记录'
    },
    balance_report: {
      account: '用户账号',
      nickname: '昵称',
      level: '级别',
      own_balance: '自身余额',
      agent_balance: '代理余额',
      member_balance: '会员余额',
      total_balance: '总余额'
    },
    table: {
      single: '单边',
      multiple: '双边',
      online: '在线',
      offline: '离线',
      banker: '庄',
      player1: '闲1',
      player2: '闲2',
      player3: '闲3',
      result_detail: '结果参照',
      first_gate: '第一门',
      second_gate: '第二门',
      third_gate: '第三门',
      win: '赢',
      lose: '输',
      agent: '代理',
      player: '会员',
      sub_acc: '子账号',
      pc: '电脑',
      mobile_dashboard: '后台(手机)',
      pc_dashboard: '后台(电脑)',
      android: 'APP(安卓)',
      ios: 'APP(苹果)',
      windows: '游戏(电脑)',
      mobile: '手机',
      h5_android: 'H5(安卓)',
      h5_ios: 'H5(苹果)',
      total: '所以统计',
      enable: '启用',
      disable: '禁用',
      deposit_money: '存入下线',
      withdraw_money: '取出下线',
      wash_money: '洗码存入',
      banker_pair: '庄对',
      banker_abbr: '庄',
      xian: '闲',
      xian_abbr: '闲',
      player_pair: '闲对',
      tie: '和',
      dragon: '龙',
      tiger: '虎',
      point: '点',
      cow: '牛',
      no_cow: '无',
      cow_bomb: '炸弹',
      times: '倍',
      normal: '平倍',
      normal_abbr: '平倍',
      big: '大',
      small: '小',
      same: '同',
      odd: '单',
      even: '双',
      double_abbr: '翻倍',
      total_dx: '总合',
      single_abbr: '单:',
      multi_abbr: '双:'
    },
    game: {
      all: '全部',
      baccarat: '百家乐',
      cow_cow: '牛牛',
      dragon_tiger: '龙虎',
      sic_bo: '大小点',
      tui_tong_zi: '推筒子',
      zha_jin_hua: '炸金花'
    },
    message: {
      // 上下分
      you_do_not_have_permission: '抱歉! 您没有该权限! 请联系上级!',
      select_action_type: '请选择操作类型!',
      input_point: '请输入分数!',
      select_account: '请选择账号!',
      // 添加代理会员
      must_enter_account: '账号必填!',
      account_length_gt_2: '帐号不能小于2位!',
      must_enter_password: '密码必填!',
      password_length_gt_6: '密码不能小于6位数!',
      password_must_include_string_number: '密码必须包含数字和英文字母!',
      no_enough_balance: '余额不足!',
      percent_cannot_exceed_superior: '占成比例不能超过上级!',
      xi_ma_cannot_exceed_superior: '洗码比例不能超过上级!',
      must_select_line: '洗码比不能为空!',
      // 洗码
      xi_ma_amount_cannot_gt_he_get: '洗码佣金超过本次时间的洗码所得!',
      xi_ma_error: '洗码费有误!',
      enter_xi_ma_money: '请输入洗码金额!',
      switch_language_success: '切换语言成功',
      no_data: '没有查询到相应的数据!',
      // ws2
      tips: '提示',
      no_data_at_this_time: '您查找的时间段内无记录!',
      token_expire_pls_relogin: '登录时效已过期，请重新登录!',
      // Password
      change_password_success: '修改密码成功',
      enter_old_password: '请输入原始密码!',
      two_password_not_same: '两次输入密码不一致!',
      password_should_not_empty: '密码或确认密码不能为空!',
      old_password_not_correct: '原始密码不正确!',
      enter_new_password_not_same_with_old: '请更换与原密码不同的密码!',
      // Social
      sub_acc_do_not_need_this_action: '子账号无需添加该项!',
      do_error: '操作失败',
      do_success: '操作成功',
      enter_account: '请输入账号',
      // Sub-Account
      enter_subacc: '请输入子账号!',
      enter_password: '请输入密码!'
    },
    kick_dialog: {
      are_you_sure: '您确定要踢出',
      question: '吗?',
      warning: '警告'
    },
    dw_dialog: {
      deposit_withdraw: '上/下分',
      for: '给',
      account: '账号',
      level: '等级',
      agent: '代理',
      player: '会员',
      balance: '余额',
      my_balance: '我的帐户余额',
      type: '操作类型',
      deposit: '上分',
      withdraw: '下分',
      point: '分数/点数',
      comment: '余额备注',
      last_operation_record: '该用户上次操作记录(请仔细核对)',
      amount: '交易金额',
      operationer: '操作员',
      account_list: '账号列表'
    },
    edit_dialog: {
      edit_agent: '设定代理',
      edit_player: '设定会员',
      account: '账号',
      one_click_wash: '一键结算洗码',
      nickname: '昵称',
      password: '密码',
      line: '洗码类型',
      percent: '占成比',
      max: '最多可设',
      line_plh: '请选择洗码类型',
      single_line: '单边',
      multiple_line: '双边',
      cash_password: '取款密码',
      tui_guang_url: '推广网址',
      game_url: '游戏网址',
      download_url: '下载地址',
      android_url: '安卓地址',
      ios_url: '苹果地址',
      service_url: '客服地址',
      input_plh: '不设置请留空',
      multiple_plh: '不设置请留空, 多个用逗号隔开'
    },
    auth_dialog: {
      edit: '修改',
      permission: `权限`,
      main_auth: '主要设定',
      agent_management: '代理管理',
      player_management: '会员管理',
      player_summary: '会员总表',
      edit_agent_player: '修改会员/代理',
      switch_user_state: '启用/禁用会员，代理',
      add_user: '添加会员, 代理',
      add_user_for_subagent: '为下级添加会员/代理',
      deposit_withdraw: '上分/下分',
      report_permission: '报表设定',
      win_lose_report: '输赢报表',
      bet_record: '会员交易/下注记录',
      online_management: '在线管理',
      other_permission: '其他设定',
      add_sub_account: '添加子账号',
      edit_sub_account: '修改子账号',
      edit_permission: '设置权限',
      one_click_wash: '一键结算洗码',
      wash_permisson: '结算洗码权限',
      service: '在线客服',
      public_announcement: '公告管理',
      edit_line: '编辑洗码类型'
    },
    add_user_dialog: {
      for: '为',
      add_user: '添加代理/会员',
      type: '操作类型',
      add_agent: '添加代理',
      add_player: '添加会员',
      superior: '上级',
      account: '账号',
      nickname: '昵称',
      password: '密码',
      cash_password: '取款密码',
      comment: '备注',
      line: '洗码类型',
      balance: '余额',
      my_balance: '我的余额',
      percent: '占成比例',
      single_line: '洗码率单',
      multiple_line: '洗码率双',
      single: '单边',
      multiple: '双边',
      max: '最多',
      input_plh: '请输入'
    },
    xm_dialog: {
      xi_ma: '洗码结算',
      notice_text: '注：该操作将自动结算洗码!',
      account: '被操作人',
      line: '洗码类型',
      total_single_multiple: '总洗码(单/双)',
      single_line_now: '当前洗码率(单)',
      multiple_line_now: '当前洗码率(双)',
      previous_xi_ma_time: '上次洗码时间',
      now_xi_ma_time: '本次洗码时间',
      wash_money: '洗码佣金',
      final_wash_money: '最终洗码佣金',
      input_xi_ma_plh: '请输入该时间段的最终洗码佣金'
    },
    announcement_dialog: {
      add_announcement: '添加公告',
      edit_announcement: '修改公告',
      delete_announcement: '删除公告',
      title: '公告标题',
      content: '公告内容',
      start_date: '起始时间',
      end_date: '截止时间',
      select_time_plh: '请选择日期',
      sure_delete: '您确定要删除吗？'
    },
    img_dialog: {
      dialog: '修改轮播图',
      id: '唯一标识',
      name: '名称',
      sort: '排序',
      url: '地址',
      title: '标题'
    }
  }
  