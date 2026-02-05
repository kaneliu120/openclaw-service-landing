const translations = {
    en: {
        logo: "OpenClaw Setup Service",
        badge: "Professional On-site Service · Manila",
        headline: "Get your own Private AI Assistant",
        subheadline: "The most powerful private AI setup available. A localized \"Jarvis\" that actually understands your files and your intent.",
        cta: "Book Now",
        who_title: "The Service",
        who_text: "Most people get stuck on complex network configurations or API setups. I offer a one-stop on-site technical service to get everything sorted for you.",
        req_title: "Requirements",
        req_text: "A spare/idle Windows or Mac computer. That's it.",
        what_offer: "What you get for ₱5,000",
        srv_1_title: "End-to-End Installation",
        srv_1_desc: "I handle the backend, environment, and deployment. No technical knowledge required.",
        srv_2_title: "API Integration",
        srv_2_desc: "I'll guide you through setting up your OpenAI/Google API keys so your \"brain\" is connected to the best models.",
        srv_3_title: "Personalized Tuning",
        srv_3_desc: "I'll tweak the system based on your specific needs (business, creative, or technical).",
        price_title: "Payment & Terms",
        pay_1: "Flexible Payment: Cash, GCash, Maya",
        pay_2: "<strong>Pay after service:</strong> See it working first",
        pay_3: "One-time service fee",
        disclaimer: "Transparent Costs: API credits (tokens) are paid directly to the providers (OpenAI/Google) based on your usage. No hidden fees.",
        about_title: "About Me",
        about_text: "I'm a 16-year veteran Product Manager (expat) currently living in Manila. I've been using OpenClaw to handle my entire development workflow—building websites and platforms without writing a single line of code.",
        contact_title: "Ready to stop playing with \"chatbots\"?",
        contact_sub: "Start using a real AI assistant. Drop me a message."
    },
    cn: {
        logo: "OpenClaw 安装服务",
        badge: "专业上门服务 · 马尼拉",
        headline: "为您搭建私人 AI 助理",
        subheadline: "目前最强大的本地化 AI 解决方案。部署在你本地的「超级助理」，能深度理解你的文件和意图，远超网页版 AI 的体验。",
        cta: "预约服务",
        who_title: "服务内容",
        who_text: "很多人卡在复杂的各类网络配置或 API 申请上。我提供一站式上门技术服务，帮您搞定一切。",
        req_title: "设备要求",
        req_text: "一台闲置的 Windows 或 Mac 电脑。仅此而已。",
        what_offer: "₱5,000 服务费包含",
        srv_1_title: "端到端安装",
        srv_1_desc: "搞定后端环境、数据库及前端部署。无需您具备任何技术知识。",
        srv_2_title: "API 聚合接入",
        srv_2_desc: "手把手帮您开通并配置 OpenAI 或 Google 的 API Key，给 AI 装上「最强大脑」。",
        srv_3_title: "场景化配置",
        srv_3_desc: "根据您的具体需求（商业分析、创意写作、代码辅助）进行系统微调。",
        price_title: "交易条款",
        pay_1: "灵活支付：支持现金、GCash、Maya",
        pay_2: "<strong>见效付款：</strong>确认系统运行流畅后支付",
        pay_3: "一次性技术服务费",
        disclaimer: "费用透明：后续产生的 API 流量费（Token）由您直接按需支付给模型提供商（OpenAI/Google），用多少付多少，无中间差价。",
        about_title: "关于我",
        about_text: "我是一名在马尼拉工作 16 年的互联网产品经理。最近我利用 OpenClaw 实现了全自动化工作流，甚至在不写一行代码的情况下完成了网站平台的开发。",
        contact_title: "准备好摆脱简单的「聊天机器人」了吗？",
        contact_sub: "真正拥有一套生产力 AI 系统，欢迎私信联系。"
    },
    tl: {
        logo: "OpenClaw Setup Service",
        badge: "Professional On-site Service · Manila",
        headline: "Upgrade your PC to a Private AI Assistant",
        subheadline: "Mas malupit ito sa ChatGPT na nasa browser lang. Para siyang local \"Jarvis\" na nakakabasa ng files mo at naiintindihan ang workflow mo.",
        cta: "Book Now",
        who_title: "The Service",
        who_text: "Maraming tao ang nahihirapan sa mga kumplikadong network configurations o API setups. Nag-o-offer ako ng one-stop on-site technical service para ayusin lahat para sa'yo.",
        req_title: "Requirements",
        req_text: "Spare/Idle Windows or Mac computer/laptop. Yun lang.",
        what_offer: "What you get for ₱5,000",
        srv_1_title: "Complete Installation",
        srv_1_desc: "Backend, database, frontend – ako na bahala.",
        srv_2_title: "API Integration",
        srv_2_desc: "I-se-setup natin ang API keys mo (OpenAI/Google) para connected ka sa pinakamagandang models.",
        srv_3_title: "Personalized Tuning",
        srv_3_desc: "Aayusin natin ang settings depende sa trip mo o trabaho mo.",
        price_title: "Payment Terms",
        pay_1: "Flexible Payment: Cash, GCash, Maya",
        pay_2: "<strong>Pay after service:</strong> Pagnakita mo nang gumagana, tsaka ka lang magbabayad",
        pay_3: "One-time service fee",
        disclaimer: "Cost Transparency: Yung ₱5,000 ay one-time service fee ko lang. Yung API credits (usage cost), kayo ang magbabayad nun directly sa OpenAI/Google. Kung baga sa sasakyan, akin ang labor sa pag-assemble, sa inyo ang gas.",
        about_title: "About Me",
        about_text: "Expat here, working as a Product Manager in Manila for 16 years. Gamit na gamit ko ang OpenClaw sa work ko. Imagine, nakakapag-develop ako ng platforms nang hindi nagko-code.",
        contact_title: "Ready ka na bang i-level up ang productivity mo?",
        contact_sub: "Drop me a message/DM. Usap tayo."
    }
};

let currentLang = 'en';

function setLang(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    // Update active button
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('btn-' + lang).classList.add('active');
    
    // Update html lang attribute
    document.documentElement.lang = lang === 'cn' ? 'zh' : lang;
}

// Initialize with English
document.addEventListener('DOMContentLoaded', () => {
    setLang('en');
});
