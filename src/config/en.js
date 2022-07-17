export default {
    route: {
      dashboard: 'Dashboard',
      documentation: 'Documentation',
      guide: 'Guide',
      ManageUser: 'User Manage',
      Management: 'Management',
      AgentsList: 'Agent Lists',
      UsersList: 'User Lists',
      SearchList: 'Search Lists',
      MembersList: 'Member Lists',
      SubAccountManage: 'Sub Accounts',
      UserTotalList: 'UserTotal Lists',
      PlayerTotalList: 'Members Summary',
      AgentTotalList: 'Agents Summary',
      BetRecords: 'Bet Records',
      RecordsPage: 'Records',
      GameReport: 'Game Reports',
      LoginRecords: 'Login Records',
      AccessRecords: 'Access Records',
      AccountChangeRecords: 'Acc Modify Records',
      ReportsPage: 'Reports',
      OnlinePage: 'Online Manage',
      RealTimeBet: 'Online Bettings',
      OnlineMembers: 'Online Members',
      PublicAnnouncement: 'Public Announcement',
      HgManage: 'Road Manage',
      LdCancel: 'Road Cancel',
      HgSetup: 'Road Manage',
      HgLists: 'HGLists',
      errorPages: 'Error Pages',
      page401: '401',
      page404: '404',
      errorLog: 'Error Log',
      profile: 'Profile',
      TotalBalance: 'TotalBalance',
      CarouselManage: 'Carousel Manage',
      CarouselList: 'Carousel List'
    },
    dashboard: {
      total_agents: 'Total Agent Count',
      today_increase_agent: 'Today Increase Agent',
      total_players: 'Total Player Count',
      today_increase_player: 'Today Increase Player',
      agent: 'Agent',
      player: 'Player',
      // 账号信息
      my_info: 'Me',
      account: 'Account',
      balance: 'Balance',
      zhan_cheng_bi: 'Percentage',
      xi_ma_bi: 'Line',
      last_login_time: 'Login time',
      last_login_ip: 'Login IP',
  
      // 客户状态
      member_info: 'Member Info',
      online_player: 'Online player',
      direct_player_balance: 'Direct player balance',
      other_player_balance: 'Other player balance',
      all_player_balance: 'All palyer balance',
      all_agent_balance: 'All agent balance',
  
      // 修改密码
      change_password: 'Change Password',
      old_password: 'Old password',
      new_password: 'New password',
      confirm_password: 'Confirm password',
  
      warning: 'Warning',
      warning_text: `In order to protect your account and fund security, please do not set too simple password
        For example: 888888 / 111111 / 12345678 / the same as the user name
        Please use English Letter Case + number + special string (more than 8 digits)
        It is recommended that you change your password once every 15 days (the password should not be too simple)`,
  
      // 推广信息
      qq: 'QQ',
      qq_plh: 'Separated by $',
      wechat: 'Wechat',
      wechat_plh: 'Please enter',
      phone: 'Phone',
      phone_plh: 'Separated by $',
      added_qq: 'Added QQ',
      added_wechat: 'Added Wechat',
      added_phone: 'Added Phone',
      router_search: 'Route search'
    },
    font_size: {
      default: 'Default',
      medium: 'Medium',
      small: 'Small',
      mini: 'Mini'
    },
    // 用户列表
    user_list: {
      location: 'Location',
      user_info: 'UserInfo',
      account: 'Account',
      username: 'Account',
      nickname: 'Nickname',
      state: 'State',
      point: 'Balance',
      percent: 'Percentage',
      xi_ma: 'Line(%)',
      more: 'More',
      select: 'Please select',
      level: 'Level',
      superior: 'Superior'
    },
    subacc: {
      add_subacc: 'Add Sub-Account',
      edit_subacc: 'Edit Sub-Account',
      enter_nickname_plh: 'Enter Nickname',
      enter_password_plh: 'Please leave blank if not modified',
      subacc: 'Sub-Account',
      nickname: 'Nickname',
      state: 'State',
      login_time: 'Login Time',
      login_ip: 'Login IP',
      action: 'More Action',
      password: 'Password'
    },
    // 代理列表页面
    agent_list: {
      account: 'Account',
      nickname: 'Nickname',
      location: 'Location',
      action: 'More action',
      table_option: 'Table option',
      balance: 'Balance',
      relation: 'Relation',
      percent: 'Percentage',
      xi_ma_bi: 'S/M',
      xi_ma_type: 'Line',
      state: 'State',
      crated_time: 'Created At',
      login_ip: 'Login IP',
      login_time: 'Login Time'
    },
    // 会员列表页面
    player_list: {
      account: 'Account',
      nickname: 'Nickname',
      location: 'Location',
      action: 'More action',
      table_option: 'Table option',
      balance: 'Balance',
      relation: 'Relation',
      percent: 'Percentage',
      xi_ma_bi: 'S/M',
      xi_ma_type: 'Line',
      state: 'State',
      crated_time: 'Created At',
      login_ip: 'Login IP',
      login_time: 'Login Time',
      online: 'Online'
    },
    // 会员总表页面
    player_total_list: {
      account: 'Account',
      nickname: 'Nickname',
      relation: 'Relation',
      balance: 'Balance',
      room: 'Room',
      xi_ma_bi: 'S/M',
      login_ip: 'Login IP',
      device: 'Device',
      online_state: 'Online',
      state: 'State',
      action: 'More Record',
      deposit_withdraw_record: 'D/W',
      account_change_record: 'Modify',
      betting_record: 'Betting'
    },
    // 代理总表页面
    agent_total_list: {
      account: 'Account',
      nickname: 'Nickname',
      relation: 'Relation',
      balance: 'Balance',
      xi_ma_bi: 'S/M',
      state: 'State',
      login_ip: 'Login IP',
      device: 'Device',
      online_state: 'Online',
      more_record: 'More Record',
      deposit_withdraw_record: 'D/W',
      operated_deposit_withdraw_record: 'Operator\'s D/W',
      account_modify_record: 'Modify',
      operated_modify_record: `Operator's Edited`
    },
    // 下注记录页面
    bet_record: {
      start_date: 'Start Date',
      to_date: 'To',
      player_id: 'Player ID',
      account: 'Account',
      state: 'Status',
      all: 'All',
      baccarat: 'Baccarat',
      cow_cow: 'Cow Cow',
      dragon_tiger: 'Dragon Tiger',
      sic_bo: 'Sic Bo',
      tui_tong_zi: 'Tui Tong Zi',
      statistics_of_current_time_period: 'Statistics of current time period: ',
      table: 'Table',
      round: 'Round',
      round_1: 'Round Match',
      settled: 'Settled',
      unsettled: 'Unsettled',
      game: 'Game',
      settle_time: 'Time',
      result: 'Result',
      bet_info: 'Betting Info',
      total_amount: 'Total Bet Amount',
      profit: 'Profit',
      xi_ma_bi: 'S/M',
      wash_type: 'Line',
      effective_betting: 'Effective Amount',
      balance: 'Balance',
      betting_ip: 'From IP',
      device: 'Device',
      amount_detail: 'More detail'
    },
    // 登录记录页面
    login_record: {
      account: 'Account',
      level: 'Level',
      device: 'Device',
      login_time: 'Login Time',
      login_ip: 'Login IP',
      comment: 'Comment'
    },
    // 上下分记录页面
    access_record: {
      account: 'Account',
      operationer_account: 'Operator',
      all: 'All',
      deposit: 'Deposit',
      withdraw: 'Withdraw',
      nickname: 'Nickname',
      level: 'Level',
      type: 'Type',
      amount: 'Transfer Balance',
      total_amount: 'Total Balance',
      operationer: 'Operator',
      operation_time: 'Operation Time',
      operation_ip: 'Operation IP',
      comment: 'Comment',
      from: ' from ',
      to: ' to ',
      deposit_to_lower: 'deposit to ',
      withdraw_from_lower: 'withdraw from ',
      deposit_for_lower: 'deposit',
      withdraw_for_lower: 'withdraw',
      manually: 'Manually'
    },
    // 账号变更记录页面
    account_change_record: {
      account: 'Account',
      nickname: 'Nickname',
      level: 'Level',
      operationer: 'Operator',
      operation_time: 'Operation Time',
      operation_ip: 'Operation IP',
      comment: 'Comment',
      modify_subordinate: ' modify subordinate ',
      change_nickname_from: ' change nickname from ',
      change_to: ' to ',
      change_percent_from: ' change percentage from ',
      change_single_line_from: ' change single line from ',
      change_multi_line_from: ' change multi line from ',
      change_line_from: ' change line from ',
      change_one_click_pass: ' change one click password ',
      change_pass: ' change one click password ',
      change_balance_from: ' change balance from ',
      single_line: 'Single Line',
      multiple_line: 'Multi Line'
    },
    // 在线管理页面
    online_page: {
      user_account: 'User Account',
      user_account_plh: 'Separated by comma',
      online_user_number: 'Online User Number',
      id: 'ID',
      account: 'Account',
      balance: 'Balance',
      ip_address: 'IP',
      realtime_betting_list: 'Realtime Betting List',
      game: 'Game',
      table: 'Table',
      room: 'Room',
      round: 'Round',
      betting_info: 'Betting Info',
      table_number: 'Table number',
      bet_id: 'Bet-ID',
      time: 'Bet Time',
      match: 'Match',
      total_bet: 'Total Bet',
      bet_ip: 'Bet IP',
      device: 'Device'
    },
    // 报表页面
    report_page: {
      location: 'Location',
      personal_table: 'Personal table: ',
      direct_agent_table: 'Direct Agent Table: ',
      direct_player_table: 'Direct Player Table: ',
      id: 'User ID',
      account: 'Account',
      level: 'Level',
      nickname: 'Nickname',
      total_betting_count: 'Total Bet Count',
      total_win_lose: 'Total Win Lose',
      percent: 'Percentage',
      xi_ma_bi: 'S/M',
      xi_ma_liang: 'S/M Amount',
      xi_ma_yong_jing: 'S/M own',
      total_amount: 'Total Amount',
      current_level_amount: 'Current Level Amount',
      shang_jiao_amount: 'Company Amount'
    },
    // 公告页面
    announcement: {
      add: 'Add',
      serial_number: 'Serial No.',
      title: 'Title',
      content: 'Content',
      from_date: 'From Date',
      to_date: 'To Date',
      action: 'More Action'
    },
    navbar: {
      dashboard: 'Dashboard',
      github: 'Github',
      logOut: 'Log Out',
      profile: 'Profile',
      theme: 'Theme',
      size: 'Global Size'
    },
    login: {
      title: 'Login Form',
      logIn: 'Login',
      username: 'Username',
      password: 'Password',
      icode: 'Captcha',
      any: 'any',
      thirdparty: 'Or connect with',
      thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !',
      remember: 'remember me',
      username_input_alert: 'warning: please input username',
      passward_input_alert: 'warning: password length should be greater than 6',
      auth_code_input_alert: 'warning: auth code incorrect'
    },
    guide: {
      description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
      button: 'Show Guide'
    },
    errorLog: {
      tips: 'Please click the bug icon in the upper right corner',
      description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
      documentation: 'Document introduction'
    },
    excel: {
      export: 'Export',
      selectedExport: 'Export Selected Items',
      placeholder: 'Please enter the file name (default excel-list)'
    },
    tagsView: {
      refresh: 'Refresh',
      close: 'Close',
      closeOthers: 'Close Others',
      closeAll: 'Close All'
    },
    settings: {
      title: 'Page style setting',
      theme: 'Theme Color',
      tagsView: 'Open Tags-View',
      fixedHeader: 'Fixed Header',
      sidebarLogo: 'Sidebar Logo'
    },
    action: {
      backToTop: 'Back to top'
    },
    buttons: {
      mine: 'Self',
      search: 'Search',
      refresh: 'Refresh',
      refresh_this_page: 'Refresh this page',
      refresh_relation: 'Refresh Relation Data',
      reset: 'Reset',
      confirm: 'Confirm',
      delete: 'Delete',
      confirm_change: 'Confirm Change',
      cancel: 'Cancel',
      cancel_search: 'Cancel Search',
      today: 'Today',
      yesterday: 'Yesterday',
      thisWeek: 'This Week',
      lastWeek: 'Last Week',
      thisMonth: 'This Month',
      lastMonth: 'Last Month',
      export: 'Export Excel',
      addAgentPlayer: 'Add User',
      addAgent: 'Add Agent',
      addPlayer: 'Add Player',
      // chargeWithdraw: 'Charge/Withdraw Money',
      chargeWithdraw: 'D/W',
      modify: 'Edit',
      edit: 'Edit',
      permission: 'Permission',
      kick: 'Kick',
      addAnnouncement: 'Add Announcement',
      more: 'More',
      my_direct_player: `My's Player`,
      go_to: 'go to ',
      s_agent: `'s Agent`,
      s_player: `'s Player`,
      start_date: 'From',
      date_plh: 'Select Date',
      to_date: 'To',
      time_plh: 'Select Time',
      date_time_plh: 'Select Datetime',
      location: 'Location',
      action: 'More Action',
      table_option: 'Table Option',
      hide: 'Hide',
      show: 'Show',
      xi_ma: 'Wash Money',
      login_record: 'Login Record',
      deposit_withdraw_record: 'D/W Record',
      operated_deposit_withdraw_record: 'Operator\'s D/W Record',
      edit_account_record: 'Account Edit Record',
      operated_account_record: 'Operator\'s Account Record',
      betting_record: 'Betting Record'
    },
    balance_report: {
      account: 'Account',
      nickname: 'Nickname',
      level: 'Level',
      own_balance: 'Own Balance',
      agent_balance: 'Agent Balance',
      member_balance: 'Member Balance',
      total_balance: 'Total Balance'
    },
    table: {
      single: 'Single',
      multiple: 'Multi',
      online: 'Online',
      offline: 'Offline',
      banker: 'Banker',
      player1: 'P-1 ',
      player2: 'P-2 ',
      player3: 'P-3 ',
      result_detail: 'Result detail',
      first_gate: 'First Gate',
      second_gate: 'Second Gate',
      third_gate: 'Third Gate',
      win: 'Win',
      lose: 'Lose',
      agent: 'Agent',
      player: 'Player',
      sub_acc: 'Sub-Account',
      pc: 'PC',
      mobile_dashboard: 'Dashboard(mobile)',
      pc_dashboard: 'Dashboard(pc)',
      mobile: 'Moblie',
      android: 'APP(android)',
      ios: 'APP(ios)',
      windows: 'Game(pc)',
      h5_android: 'H5(android)',
      h5_ios: 'H5(ios)',
      total: 'Total',
      enable: 'Enable',
      disable: 'Disable',
      deposit_money: 'Deposit',
      withdraw_money: 'Withdraw',
      wash_money: 'Wash Money',
      banker_pair: 'BPair',
      banker_abbr: 'B',
      xian_abbr: 'P',
      xian: 'Player',
      player_pair: 'PPair',
      tie: 'Tie',
      dragon: 'Dragon',
      tiger: 'Tiger',
      point: 'Pt',
      cow: 'C',
      no_cow: 'N',
      cow_bomb: 'Bomb',
      times: 'T',
      normal: 'Normal',
      normal_abbr: 'N',
      big: 'Big',
      small: 'Small',
      same: 'Same',
      odd: 'Odd',
      even: 'Even',
      double_abbr: 'D',
      total_dx: 'Total',
      single_abbr: 'S:',
      multi_abbr: 'M:'
    },
    game: {
      all: 'All',
      baccarat: 'Baccarat',
      cow_cow: 'CowCow',
      dragon_tiger: 'Dr Tr',
      sic_bo: 'Sic Bo',
      tui_tong_zi: 'Tui Tong Zi',
      zha_jin_hua: 'Zha Jin Hua'
    },
    message: {
      // 上下分
      you_do_not_have_permission: 'Sorry, you do not have this pernission',
      select_action_type: 'Please select operation type!',
      input_point: 'Please input point!',
      select_account: 'Please select one account!',
      // 添加代理会员
      must_enter_account: 'Please enter account!',
      account_length_gt_2: 'Account length must greater than 2!',
      must_enter_password: 'Please enter Password!',
      password_length_gt_6: 'Password length must greater than 6!',
      password_must_include_string_number: 'Password must include charater & number!',
      no_enough_balance: 'No enough balance!',
      percent_cannot_exceed_superior: 'Percentage cannot exceed Superrior!',
      xi_ma_cannot_exceed_superior: 'Line cannot exceed superior!',
      must_select_line: 'Please select line!',
      // 洗码
      xi_ma_amount_cannot_gt_he_get: 'Wash money cannot greater than he got!',
      xi_ma_error: 'Wash money error!',
      enter_xi_ma_money: 'Enter wash money!',
      switch_language_success: 'Switch Language Success',
      no_data: 'No Data!',
      // ws2
      tips: 'Tips',
      no_data_at_this_time: 'No Data! At that time!',
      token_expire_pls_relogin: 'Token expired! Please login again!',
      // Password
      change_password_success: 'Change Password Success',
      enter_old_password: 'Please enter old password!',
      two_password_not_same: 'New password not same!',
      password_should_not_empty: 'New password should not be empty!',
      old_password_not_correct: 'Old password not correct!',
      enter_new_password_not_same_with_old: 'Please change the password different from the original password!',
      // Social
      sub_acc_do_not_need_this_action: 'It is not necessary to add this item to the sub account!',
      do_error: 'Operation Failed!',
      do_success: 'Operation Success!',
      enter_account: 'Please enter account!',
      // Sub-Account
      enter_subacc: 'Enter Sub-Account!',
      enter_password: 'Enter password!'
    },
    kick_dialog: {
      are_you_sure: 'Are you sure want to kick out',
      question: '?',
      warning: 'Warning'
    },
    dw_dialog: {
      deposit_withdraw: 'Deposit/Withdraw',
      for: 'For Acc => ',
      account: 'Account',
      level: 'Level',
      agent: 'Agent',
      player: 'Player',
      balance: 'Balance',
      my_balance: 'My Balance',
      type: 'Type',
      deposit: 'Deposit',
      withdraw: 'Withdraw',
      point: 'Point',
      comment: 'Comment',
      last_operation_record: `This Account's Last operation record information`,
      amount: 'Amount',
      operationer: 'Operator',
      account_list: 'Account List'
    },
    edit_dialog: {
      edit_agent: 'Edit Agent',
      edit_player: 'Edit Player',
      account: 'Account',
      one_click_wash: 'One Click Wash',
      nickname: 'Nickname',
      password: 'Password',
      line: 'Line',
      percent: 'Percentage',
      max: 'MAX',
      cash_password: 'Cash Password',
      single_line: 'Single',
      multiple_line: 'Multi',
      line_plh: 'please select line',
      tui_guang_url: 'TuiGuang Url',
      game_url: 'Game Url',
      download_url: 'Download Url',
      android_url: 'Android Url',
      ios_url: 'IOS Url',
      service_url: 'Service Url',
      input_plh: 'Not set, please leave blank',
      multiple_plh: 'Not set, please leave blank, multiple seperate by comma'
    },
    auth_dialog: {
      edit: 'Edit',
      permission: `'s permission`,
      main_auth: 'Main Permission',
      agent_management: 'Agent Management',
      player_management: 'Player Management',
      player_summary: 'Player Summary',
      edit_agent_player: 'Edit Agent/Player',
      switch_user_state: 'Switch User State',
      add_user: 'Add Agent/Player',
      add_user_for_subagent: 'Add User For Direct Agent',
      deposit_withdraw: 'Deposit/Withdraw',
      report_permission: 'Report Permission',
      win_lose_report: 'Main Report',
      bet_record: 'Bet Record',
      online_management: 'Online Management',
      other_permission: 'Other Permission',
      add_sub_account: 'Add Sub Account',
      edit_sub_account: 'Edit Sub Account',
      edit_permission: 'Edit Permission',
      one_click_wash: 'One Click Wash',
      wash_permisson: 'Wash Point',
      service: 'Service',
      public_announcement: 'Public Announcement',
      edit_line: 'Switch Line'
    },
    add_user_dialog: {
      for: 'For',
      add_user: 'Add Agent/Player',
      type: 'Type',
      add_agent: 'Add Agent',
      add_player: 'Add Player',
      superior: 'Superior',
      account: 'Account',
      nickname: 'Nickname',
      password: 'Password',
      cash_password: 'Cash Pass',
      comment: 'Comment',
      line: 'Line',
      balance: 'Balance',
      my_balance: 'My balance',
      percent: 'Percentage',
      single_line: 'Single Line',
      multiple_line: 'Multi Line',
      single: 'Single',
      multiple: 'Multi',
      max: 'MAX',
      input_plh: 'Enter here'
    },
    xm_dialog: {
      xi_ma: 'Wash Line Money',
      notice_text: 'This action will wash money automatically!',
      account: 'Account',
      line: 'Line',
      total_single_multiple: 'Total(single/multi)',
      single_line_now: 'Single Line(S)',
      multiple_line_now: 'Multi Line(M)',
      previous_xi_ma_time: 'Previous Wash Time',
      now_xi_ma_time: 'Now Wash Time',
      wash_money: 'Wash Money',
      final_wash_money: 'Final Wash Money',
      input_xi_ma_plh: 'Enter wash money'
    },
    announcement_dialog: {
      add_announcement: 'Add Announcement',
      edit_announcement: 'Edit Announcement',
      delete_announcement: 'Delete Announcement',
      title: 'Title',
      content: 'Content',
      start_date: 'Start Date',
      end_date: 'End Date',
      select_time_plh: 'Select datetime',
      sure_delete: 'Are you sure want to delete this announcement?'
    },
    img_dialog: {
      dialog: 'Edit Carousel',
      id: 'Id',
      name: 'Name',
      sort: 'Sort',
      url: 'Url',
      title: 'Title'
    }
  }
  