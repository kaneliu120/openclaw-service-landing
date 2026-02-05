const translations = {
    en: {
        logo: "AI Assistant Setup Service",
        badge: "Available in Manila",
        headline: "Turn your PC into a real-life JARVIS.",
        subheadline: "Stop using basic ChatGPT. Transform your idle computer into a high-end private AI assistant.",
        cta: "Book Setup Now",
        who_title: "Who am I?",
        who_text: "I'm an expat Product Manager with 16 years in the tech industry, right here in Manila. I use OpenClaw to design platforms with ZERO coding. It’s the ultimate productivity weapon.",
        what_offer: "What I Offer",
        srv_1_title: "Full Installation",
        srv_1_desc: "No more tech headaches or terminal errors. I handle the backend and environment.",
        srv_2_title: "API Gateway",
        srv_2_desc: "Connect to top-tier models like OpenAI (GPT-4) and Google Gemini.",
        srv_3_title: "Custom Tailoring",
        srv_3_desc: "Configured to follow your specific workflow and personality requirements.",
        price_title: "Flat Fee",
        pay_1: "On-site setup in Manila",
        pay_2: "Cash / GCash / Maya",
        pay_3: "<strong>Zero Risk:</strong> Pay only after success",
        disclaimer: "Note: Fee is for installation service only. Official AI API usage fees are separate (pay-as-you-go to OpenAI/Google).",
        contact_title: "Get Automated Today",
        contact_sub: "Got a spare laptop? Let’s turn it into the smartest thing you own."
    },
    cn: {
        logo: "AI私人助理安装服务",
        badge: "仅限马尼拉地区",
        headline: "把闲置电脑变成现实版“钢铁侠贾维斯”",
        subheadline: "别让你的电脑吃灰了。升级为高性能私人 AI 助理，远超普通网页版 ChatGPT。",
        cta: "预约上门安装",
        who_title: "我是谁？",
        who_text: "我是旅居马尼拉 16 年的资深互联网产品经理。目前使用 OpenClaw 实现“零代码”全栈开发。不仅仅是聊天机器人，更是你的数字大脑。",
        what_offer: "服务内容",
        srv_1_title: "全套部署",
        srv_1_desc: "解决所有复杂的环境配置、终端报错，让你开箱即用。",
        srv_2_title: "大模型开通",
        srv_2_desc: "帮你申请并接通 OpenAI (GPT-4)、Google Gemini 等顶级大模型 API。",
        srv_3_title: "私人定制",
        srv_3_desc: "根据你的工作流（写代码、写文案、分析数据）进行个性化调教。",
        price_title: "一口价",
        pay_1: "马尼拉上门安装服务",
        pay_2: "支持 现金 / GCash / Maya",
        pay_3: "<strong>零风险承诺：</strong> 现场确认好用再付款",
        disclaimer: "注：5000P 仅为技术服务费。AI 模型的官方 API 调用费（Token）由您根据实际使用量自行支付给官方。",
        contact_title: "立即升级你的电脑",
        contact_sub: "想拥有一台真正懂你的 AI 电脑？私信预约时间。",
    },
    tl: {
        logo: "Serbisyo ng AI Assistant",
        badge: "Available sa Manila",
        headline: "Gawin nating 'JARVIS' ang PC mo!",
        subheadline: "Sawang-sawa ka na ba sa basic na ChatGPT? Transform natin ang idle computer mo into a powerful AI assistant.",
        cta: "Mag-book na Ngayon",
        who_title: "Sino Ako?",
        who_text: "Isa akong Expat Product Manager na 16 years na dito sa Manila. Gamit ko ang OpenClaw para gumawa ng websites nang ZERO coding. Sobrang laking tulong sa productivity.",
        what_offer: "Ano ang Offer Ko?",
        srv_1_title: "Full Setup",
        srv_1_desc: "Ako na bahala sa installation. Wala ka nang iintindihing error.",
        srv_2_title: "API Gateway",
        srv_2_desc: "Tutulungan kitang i-connect ang OpenAI (GPT-4) o Google Gemini account mo.",
        srv_3_title: "Customization",
        srv_3_desc: "I-co-configure natin ang AI base sa trabaho o needs mo (coding man yan o writing).",
        price_title: "Flat Fee",
        pay_1: "On-site setup sa Manila",
        pay_2: "Cash / GCash / Maya",
        pay_3: "<strong>Walang Lugi:</strong> Pay only after success",
        disclaimer: "Note: Yung 5000 PHP ay para sa service ko lang. Yung bayad sa AI usage (API tokens), direkta nyong babayaran sa OpenAI/Google.",
        contact_title: "Tara, Usap Tayo!",
        contact_sub: "Gusto mo bang magkaroon ng pinaka-matalinong PC? Message me para ma-schedule na natin."
    }
};

function setLang(lang) {
    // Update active button state
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`btn-${lang}`).classList.add('active');

    // Update text content
    const data = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) {
            el.innerHTML = data[key]; // innerHTML to support <strong> tags
        }
    });
}

// Default to EN
setLang('en');
