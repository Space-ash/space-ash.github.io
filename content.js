/* Bilingual academic profile. */
globalThis.academicContent = {
  en: {
    name: 'Junchen He', title: 'Junchen He · Research & Academic Profile',
    description: 'Junchen He, MSc in Artificial Intelligence student at HKU. Interested in spatial intelligence, embodied interaction and deployable interactive systems, with experience in 3D reconstruction and embedded engineering.',
    nav: ['About', 'Education', 'Experience', 'Research', 'Independent work', 'Awards', 'Contact'],
    skip: 'Skip to content', language: 'Language', profileLabel: 'Profile at a glance',
    discipline: 'ARTIFICIAL INTELLIGENCE', role: 'MSc in Artificial Intelligence', university: 'The University of Hong Kong', location: 'Hong Kong',
    aboutLabel: 'ABOUT ME', headline: 'Spatial intelligence.\nHuman-centred systems.',
    bio: [
      'I am an MSc in Artificial Intelligence student at the University of Hong Kong, with a BEng in Automation from Beijing Institute of Technology. My undergraduate thesis on metric-scale road scene reconstruction using 3D Gaussians received the Outstanding Undergraduate Thesis award.',
      'I am seeking PhD opportunities at the intersection of spatial intelligence and human–computer interaction. Building on my experience in 3D reconstruction, robotics, wearable hardware and full-stack development, I hope to investigate how systems can perceive their surroundings and support people through context-aware interaction. I am particularly interested in translating these foundations into embodied interfaces and reliable XR systems for everyday environments.'
    ],
    explore: 'Explore my research', status: 'Open to PhD opportunities',
    education: 'Education', educationEntries: [
      {date: 'Sep 2026–present', degree: 'MSc in Artificial Intelligence', school: 'The University of Hong Kong', detail: 'Hong Kong'},
      {date: 'Sep 2022–Jul 2026', degree: 'BEng in Automation', school: 'Beijing Institute of Technology', detail: 'GPA: 3.5 / 4.0 · Outstanding Undergraduate Thesis'}
    ],
    work: 'Research & projects', workLede: 'From 3D perception to control, hardware and software systems.', thesisLabel: 'UNDERGRADUATE THESIS', projectLabel: 'COURSE PROJECT', contribution: 'Contributions', videoLabel: 'Project demo · Bilibili', codeLabel: 'Code · GitHub',
    projects: [
      {title: 'Metric-Scale Dynamic Road Scene Reconstruction Using 3D Gaussians', repository: 'https://github.com/Space-ash/LongStream-kit', date: 'Mar–Jun 2026', summary: 'Improved reconstruction at real-world scale across long road sequences by using GPS-guided trajectory correction to stabilize streaming 3D reconstruction.', bullets: [
        'Developed GPS-guided test-time optimization (TTO) and segmented SE(3) pose correction to reduce scale and trajectory drift.',
        'Built a streaming reconstruction and visualization pipeline with sliding-window optimization.',
        'Evaluated the approach on KITTI Odometry sequences and reduced mean absolute trajectory error.',
        'Built a frontend for operations and monitoring and reduced end-to-end reconstruction time.'
      ], outcome: 'Outstanding Undergraduate Thesis', tags: ['3DGS', 'Longstream', 'ViT', 'Streaming reconstruction']},
      {title: 'STM32-Based Line-Following Robot with Fire Alarm', video: 'https://www.bilibili.com/video/BV16P2NYBEnc/?share_source=copy_web&vd_source=08a183dab5ecb4888afbb9c3f689d0e8', date: 'May–Jun 2025', summary: 'Developed an STM32-based motor control system for a mobile robot, integrating face recognition, automatic obstacle avoidance and fire-source localization.', bullets: [
        'Led the team, coordinated project progress and task assignments, integrated sensors and designed the perception system.',
        'Designed closed-loop motor control, line-following and fire-source identification algorithms.',
        'Recorded and edited demonstration videos and led the final project presentation.'
      ], outcome: 'Our team earned the cohort’s only perfect project score', tags: ['STM32', 'Sensor integration', 'Closed-loop control']},
      {title: 'Cross-Platform Intelligent Cornell Note-Taking Tool', video: 'https://www.bilibili.com/video/BV1NYzAYxEih/?share_source=copy_web&vd_source=08a183dab5ecb4888afbb9c3f689d0e8', date: 'Sep–Dec 2024', summary: 'Built a cloud-synced Cornell note-taking tool with WeChat mini-program, web and Android clients.', bullets: [
        'Led the team, coordinated development tasks and timelines, and designed the server and database architecture for cloud synchronization.',
        'Developed the WeChat mini-program frontend and backend, along with the web application backend.',
        'Conducted user testing, iterated on product quality and led the product presentation at the end-of-course launch event.'
      ], outcome: 'Highest project presentation score among 8 teams', tags: ['Full-stack development', 'Cloud synchronization', 'Product iteration']},
      {title: 'Multi-Band Music Light Controller', video: 'https://www.bilibili.com/video/BV16P2NYBEnc/?share_source=copy_web&vd_source=08a183dab5ecb4888afbb9c3f689d0e8', date: 'Sep–Oct 2024', summary: 'Designed an analog circuit that controls colored lighting according to the frequency and amplitude of music signals.', bullets: [
        'Designed sixth-order filters to separate low, mid and high-frequency bands, along with precision rectification and amplification circuits.',
        'Implemented a 20 mV discrimination circuit and an AC-to-DC regulated power supply.',
        'Validated the design through EDA simulation and physical circuit debugging.'
      ], outcome: 'Our project earned the highest score in the cohort', tags: ['Analog circuits', 'Signal processing', 'EDA simulation']},
      {title: 'Connected Armband Device', date: 'Jun–Aug 2024', summary: 'Led a team in the National College Students Embedded Chip and System Design Competition to develop an armband electronic device.', bullets: [
        'Independently designed the PCB and developed embedded software for hardware compatibility.',
        'Deployed a cloud monitoring system and built mini-program and web interfaces to display device information.'
      ], outcome: 'National Second Prize · Related utility-model patent application under review', tags: ['PCB design', 'Embedded software', 'Cloud monitoring']},
      {title: 'Dual-Motor Garbage Sorting System with Automatic Striking and Collection', video: 'https://www.bilibili.com/video/BV1e4421Q74z/?share_source=copy_web&vd_source=08a183dab5ecb4888afbb9c3f689d0e8', date: 'Apr–Jun 2024', summary: 'Proposed a dual-motor system integrating garbage sorting and collection.', bullets: [
        'Led the team in MATLAB/Simulink modeling and algorithm validation, and designed the dual-motor coordination system.',
        'Modeled the sorting turntable in SolidWorks, then 3D-printed and integrated it into the system.',
        'Led the final project presentation and recorded and edited demonstration videos.'
      ], outcome: 'Selected as an exemplar for the following year’s course design', tags: ['MATLAB/Simulink', 'Motor coordination', '3D modeling']}
    ],
    systems: 'Independent work', systemsLede: 'Personal projects pursued independently outside coursework, driven by my own interests.', systemsLabel: 'INDEPENDENT PRACTICE',
    systemEntries: [
      {title: 'QQ Bot Webhook Deployment', summary: 'Deployed a Python-based QQ bot on my personal server and documented the setup in a technical article published in October 2025.', bullets: [
        'Integrated the official QQ bot Python SDK with a FastAPI Webhook endpoint for callback validation, signature verification and message-event dispatch.',
        'Configured HTTPS callbacks and Apache reverse proxying; ran the Uvicorn service under systemd with automatic restarts and diagnostic logs.',
        'Adapted incoming message payloads for SDK handlers and tested private-message replies.'
      ], tags: ['Python', 'FastAPI', 'Webhooks', 'Apache', 'systemd'], links: [{label: 'Technical documentation · CSDN (Chinese)', url: 'https://blog.csdn.net/weixin_72479216/article/details/153705092'}]},
      {title: 'Personal Web Infrastructure', summary: 'Built and hosted a personal blog and web applications on my own server, connecting frontend interfaces with backend services.', bullets: [
        'Set up a Hexo blog with the Redefine theme and organized the blog, Cornell note-taking services and bot deployment under separate subdomains.',
        'Deployed web and mini-program backend endpoints for the Cornell tool, including PHP/MySQL services for accounts and notes.',
        'Deployed a small Minecraft server to support multiplayer sessions.'
      ], tags: ['Self-hosting', 'Hexo', 'PHP', 'MySQL', 'Web deployment'], links: [{label: 'Self-hosted blog: kuiba911-babeltower.top', url: 'http://kuiba911-babeltower.top/'}]}
    ],
    experience: 'Industry experience', internshipLabel: 'INTERNSHIP', internships: [
      {company: 'Cardinal Operations (Beijing) Co., Ltd.', logo: 'images/cardinal_operations.png', role: 'Intern', date: 'Nov 2025–Jan 2026', bullets: [
        'Cleaned, processed and validated large-scale coal-mine transportation data, resolving missing, duplicate and anomalous records.',
        'Designed a structured database to support optimization modeling and operational analysis.',
        'Co-developed scheduling optimization algorithms under capacity and demand constraints and supported server deployment for large-scale dispatch planning.'
      ]},
      {company: 'Xiaomi Corporation', logo: 'images/xiaomi.png', role: 'Intern · Architecture and Experience Department, Thermal Design Division', date: 'Jul 2025', bullets: [
        'Independently disassembled mainstream smartphone models and conducted competitive product analysis.',
        'Researched thermal-adaptive brightness control and developed thermal management testing programs.',
        'Analyzed thermal data and user feedback and collaborated with senior engineers to implement and test thermal design concepts.'
      ]}
    ],
    awards: 'Honors & awards', awardEntries: [
      ['2025–2026', 'Undergraduate Third Prize Scholarship'],
      ['2024–2025', 'Undergraduate Third Prize Scholarship; Academic Progress Scholarship'],
      ['Sep 2024', 'Provincial Second Prize · China Undergraduate Mathematical Contest in Modeling'],
      ['Aug 2024', 'National Second Prize · National College Students Embedded Chip and System Design Competition'],
      ['2023–2024', 'Undergraduate Third Prize Scholarship; Academic Progress Scholarship'],
      ['Sep 2023', 'Provincial Second Prize · China Undergraduate Mathematical Contest in Modeling'],
      ['May 2023', 'Provincial Third Prize · China Undergraduate Statistical Contest in Modeling'],
      ['May 2023', 'University Second Prize · China Undergraduate Physics Experiment Competition'],
      ['Apr 2023', 'University First Prize · China Undergraduate Physics Tournament'],
      ['2022–2023', 'Undergraduate Second Prize Scholarship']
    ],
    skills: 'Certifications & language proficiency', skillGroups: [
      ['Certifications', 'Junior Embedded Systems Design Engineer — Chinese Institute of Electronics; HCCDA-IoT'],
      ['English', 'CET-6: 557 · IELTS: 7.0 (Listening 6.5, Reading 8.0, Writing 6.5, Speaking 6.0)']
    ],
    service: 'Student leadership & campus service', activities: [
      ['Oct 2023–Jun 2026', 'Class Monitor · Automation 2203'],
      ['Oct 2024–Apr 2025', 'Teaching Assistant · Excellence Engineer Program Course'],
      ['Oct 2022–Oct 2024', 'Electrical Control Team Member · Unmanned Formula Racing Team'],
      ['Oct 2023–Oct 2024', 'Publicity Committee Member · Ruixin 2206'],
      ['Oct 2022–Mar 2023', 'Publicity Committee Member · Jinggong 2223'],
      ['Oct 2022–Mar 2023', 'Publicity Department Member · Jinggong College Student Union']
    ],
    hobbies: 'Personal interests', hobbyText: 'Fitness, tennis, gaming and anime.',
    contact: 'Get in touch', contactText: 'For PhD opportunities, research conversations and academic correspondence, please contact me by email.',
    footer: 'Back to top'
  },
  zh: {
    name: '何峻宸', title: '何峻宸 · 学术个人主页',
    description: '何峻宸，香港大学人工智能理学硕士在读。关注空间智能、具身交互与可部署的交互系统，具有三维重建及嵌入式工程项目经验。',
    nav: ['关于我', '教育背景', '实习经历', '研究与项目', '其他实践', '荣誉奖项', '联系我'],
    skip: '跳转至正文', language: '语言', profileLabel: '个人信息',
    discipline: '人工智能', role: '人工智能理学硕士在读', university: '香港大学', location: '中国香港',
    aboutLabel: '关于我', headline: '理解空间，\n构建以人为中心的智能系统。',
    bio: [
      '我目前在香港大学攻读人工智能理学硕士，此前获得北京理工大学自动化工学学士学位。本科毕业论文围绕基于三维高斯的真实尺度道路场景重建展开，并获评优秀本科毕业论文。',
      '我希望攻读空间智能与人机交互交叉方向的博士。基于三维重建、机器人、可穿戴硬件和全栈开发的已有经历，我希望研究系统如何感知周围环境，并通过情境感知交互支持人的活动。我尤其关注如何将这些技术基础用于具身交互界面，以及能在日常环境中可靠运行的 XR 系统。'
    ],
    explore: '查看研究与项目', status: '寻求博士研究机会',
    education: '教育背景', educationEntries: [
      {date: '2026.09–至今', degree: '人工智能理学硕士（在读）', school: '香港大学', detail: '中国香港'},
      {date: '2022.09–2026.07', degree: '自动化工学学士', school: '北京理工大学', detail: 'GPA：3.5 / 4.0 · 优秀本科毕业论文'}
    ],
    work: '研究与项目', workLede: '从三维感知到控制、硬件与软件系统。', thesisLabel: '本科毕业论文', projectLabel: '课程设计', contribution: '主要工作', videoLabel: '项目演示视频 · 哔哩哔哩', codeLabel: '项目代码 · GitHub',
    projects: [
      {title: '基于 3D 高斯的真实尺度动态道路场景重建', repository: 'https://github.com/Space-ash/LongStream-kit', date: '2026.03–2026.06', summary: '通过 GPS 引导轨迹校正，加固流式 3D 重建过程，改进长道路序列的真实物理尺度重建效果。', bullets: [
        '开发 GPS 引导的测试期优化方法（TTO）与分段 SE(3) 位姿校正，减少尺度与轨迹漂移。',
        '构建采用滑动窗口优化的流式重建与可视化流程。',
        '在 KITTI Odometry 序列上进行评估，降低平均绝对轨迹误差。',
        '开发操作与监控前端，缩短端到端重建时间。'
      ], outcome: '获评优秀本科毕业论文', tags: ['3DGS', 'Longstream', 'ViT', '流式重建']},
      {title: '基于 STM32 的火场循迹报警机器人小车', video: 'https://www.bilibili.com/video/BV16P2NYBEnc/?share_source=copy_web&vd_source=08a183dab5ecb4888afbb9c3f689d0e8', date: '2025.05–2025.06', summary: '开发基于 STM32 的机器人小车电机控制系统，集成人脸识别、自动避障与火源定位功能。', bullets: [
        '作为组长协调项目进度与任务分配，集成传感器并设计感知系统。',
        '设计电机闭环控制、路径循迹与火源识别算法。',
        '录制、剪辑制作演示视频，主持项目答辩。'
      ], outcome: '小组获得全年级唯一满分项目', tags: ['STM32', '传感器集成', '闭环控制']},
      {title: '跨平台智能康奈尔笔记工具', video: 'https://www.bilibili.com/video/BV1NYzAYxEih/?share_source=copy_web&vd_source=08a183dab5ecb4888afbb9c3f689d0e8', date: '2024.09–2024.12', summary: '开发支持云同步的跨平台康奈尔笔记工具，提供小程序、网页以及安卓 app 三种客户端。', bullets: [
        '作为组长协调开发分工与进度，设计支持云同步的服务器与数据库架构。',
        '开发微信小程序前后端与 Web 应用后端。',
        '开展用户测试、推进产品质量迭代，并在结课发布会上主持介绍产品。'
      ], outcome: '项目展示成绩位列 8 支团队第一', tags: ['全栈开发', '云同步', '产品迭代']},
      {title: '多频段音乐灯光控制器', video: 'https://www.bilibili.com/video/BV16P2NYBEnc/?share_source=copy_web&vd_source=08a183dab5ecb4888afbb9c3f689d0e8', date: '2024.09–2024.10', summary: '设计模拟电路，根据输入音乐信号的频率与幅度控制不同颜色灯光的亮灭与亮度。', bullets: [
        '设计六阶滤波器划分低、中、高频段，并设计精密整流与放大电路。',
        '实现 20 mV 判别电路与交流转直流稳压电源。',
        '通过 EDA 仿真与实物电路调试验证设计。'
      ], outcome: '小组获得全年级唯一最高分项目', tags: ['模拟电路', '信号处理', 'EDA仿真']},
      {title: '云端互联臂环电子设备', date: '2024.06–2024.08', summary: '在全国大学生嵌入式芯片与系统设计竞赛中担任团队负责人，设计新型臂环电子设备。', bullets: [
        '独立设计 PCB，完成嵌入式软件开发与硬件适配。',
        '部署云端监控系统，开发小程序与网页界面以读取和展示设备信息。'
      ], outcome: '国家级二等奖 · 相关实用新型专利申请审查中', tags: ['PCB 设计', '嵌入式软件', '云端监控']},
      {title: '双电机自击打自收集垃圾分类系统', video: 'https://www.bilibili.com/video/BV1e4421Q74z/?share_source=copy_web&vd_source=08a183dab5ecb4888afbb9c3f689d0e8', date: '2024.04–2024.06', summary: '提出集成分类与收集功能的双电机垃圾分类方案。', bullets: [
        '带领团队完成 MATLAB/Simulink 建模与算法验证，并设计双电机协同控制系统。',
        '使用 SolidWorks 为分类转盘建模，并落地 3D 打印投入项目使用。',
        '主持项目答辩，录制、剪辑制作项目演示视频。'
      ], outcome: '被教师选为下一年度课程设计示范项目', tags: ['MATLAB/Simulink', '电机协同', '3D 建模']}
    ],
    systems: '其他实践经历', systemsLede: '课余和项目之外以自身兴趣为驱动独立完成的一些实践。', systemsLabel: '独立实践',
    systemEntries: [
      {title: 'QQ 机器人 Webhook 服务部署', summary: '在个人服务器部署基于 Python 的 QQ 机器人，并于 2025 年 10 月撰写技术文章记录部署过程。', bullets: [
        '结合 QQ 机器人官方 Python SDK 与 FastAPI Webhook 接口，实现回调校验、签名验证与消息事件分发。',
        '配置 HTTPS 回调和 Apache 反向代理，使用 systemd 管理 Uvicorn 服务，设置自动重启并通过日志排查问题。',
        '适配接收消息的数据结构以对接 SDK 处理函数，并测试私聊消息回复。'
      ], tags: ['Python', 'FastAPI', 'Webhooks', 'Apache', 'systemd'], links: [{label: '个人撰写技术文档 · CSDN', url: 'https://blog.csdn.net/weixin_72479216/article/details/153705092'}]},
      {title: '个人服务器与网站基础设施', summary: '使用个人服务器搭建博客与 Web 应用，将前端界面和后端服务连接为可运行的系统。', bullets: [
        '搭建基于 Hexo 与 Redefine 主题的博客，使用独立子域名组织个人博客、康奈尔笔记服务及机器人部署。',
        '部署康奈尔笔记工具的网页端与小程序后端接口，包括用于账号与笔记管理的 PHP/MySQL 服务。',
        '部署小型 Minecraft 服务器，提供多人联机游戏服务。'
      ], tags: ['服务器建站', 'Hexo', 'PHP', 'MySQL', 'Web 部署'], links: [{label: '服务器博客网站：kuiba911-babeltower.top', url: 'http://kuiba911-babeltower.top/'}]}
    ],
    experience: '实习经历', internshipLabel: '实习', internships: [
      {company: '杉数科技（北京）有限公司', logo: 'images/cardinal_operations.png', role: '实习生', date: '2025.11–2026.01', bullets: [
        '清洗、处理并验证大规模煤矿运输数据，解决缺失、重复及异常记录问题。',
        '设计结构化数据库，为优化建模与日常运营分析提供数据基础。',
        '参与开发容量与需求约束下的运输调度优化算法，并支持服务器部署与大规模调度规划。'
      ]},
      {company: '小米集团', logo: 'images/xiaomi.png', role: '架构与体验部 · 热设计部门实习生', date: '2025.07', bullets: [
        '独立完成主流型号手机拆解与竞品分析。',
        '研究温度自适应亮度控制策略，开发热管理测试程序。',
        '分析温控数据与用户反馈，协同资深工程师实现并测试热设计方案。'
      ]}
    ],
    awards: '荣誉与奖项', awardEntries: [
      ['2025–2026', '本科生三等奖学金'],
      ['2024–2025', '本科生三等奖学金、学习进步奖学金'],
      ['2024.09', '全国大学生数学建模竞赛 · 省部级二等奖'],
      ['2024.08', '全国大学生嵌入式芯片与系统设计竞赛 · 国家级二等奖'],
      ['2023–2024', '本科生三等奖学金、学习进步奖学金'],
      ['2023.09', '全国大学生数学建模竞赛 · 省部级二等奖'],
      ['2023.05', '全国大学生统计建模竞赛 · 省部级三等奖'],
      ['2023.05', '全国大学生物理实验竞赛 · 校级二等奖'],
      ['2023.04', '中国大学生物理学术竞赛 · 校级一等奖'],
      ['2022–2023', '本科生二等奖学金']
    ],
    skills: '证书及语言能力', skillGroups: [
      ['证书', '中国电子学会初级嵌入式系统设计工程师、HCCDA-IoT'],
      ['英语', 'CET6 557、雅思 7.0 · 听力 6.5、阅读 8.0、写作 6.5、口语 6.0']
    ],
    service: '学生工作', activities: [
      ['2023.10–2026.06', '自动化 2203 班班长'],
      ['2024.10–2025.04', '卓越工程师计划课程助教'],
      ['2022.10–2024.10', '无人驾驶方程式赛车队电控组成员'],
      ['2023.10–2024.10', '睿信 2206 班宣传委员'],
      ['2022.10–2023.03', '精工 2223 班宣传委员'],
      ['2022.10–2023.03', '精工书院学生会宣传部成员']
    ],
    hobbies: '个人兴趣', hobbyText: '健身、网球、游戏、动漫',
    contact: '联系我', contactText: '欢迎通过电子邮件联系我，交流博士研究机会、研究问题及学术合作。',
    footer: '返回顶部'
  }
};
