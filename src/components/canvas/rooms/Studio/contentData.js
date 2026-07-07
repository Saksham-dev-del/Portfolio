/**
 * Studio Content Data
 * 
 * This file contains all content items for the Studio monitor tower.
 * Each item will be displayed on a monitor in the tower.
 * 
 * Platforms: 'youtube', 'blog', 'tiktok'
 * (Repurposed here as: Projects, Automation Workflows, Open Source)
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#FF0000',
        accentColor: '#cc0000',
        icon: '🤖',
        label: 'Projects',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#4A90D9',
        accentColor: '#2d6cb5',
        icon: '⚙️',
        label: 'Automation',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00F2EA',
        accentColor: '#FF0050',
        icon: '💻',
        label: 'Open Source',
        shape: 'phone', // Vertical phone
    },
};

const GITHUB = 'https://github.com/Saksham-dev-del';

// Real project data for Saksham Saxena
const RAW_CONTENT_DATA = [
    // ============ AI/ML Projects (shown as 'youtube' slot / TV monitors) ============
    {
        id: 'proj-001',
        platform: 'youtube',
        title: 'Fake Medicine Detector System',
        description: 'AI-based fake medicine detection using image-based verification with deep learning. Built with PyTorch, FastAPI, Streamlit, Grad-CAM and Docker.',
        thumbnail: null,
        url: `${GITHUB}/Fake-Medicine-Detector-System`,
        date: '2026-05-01',
        views: 'Computer Vision',
        duration: 'Deep Learning',
    },
    {
        id: 'proj-002',
        platform: 'youtube',
        title: 'Document QA RAG Assistant',
        description: 'AI-powered document Q&A assistant for PDF-based question answering using RAG, LangChain, FAISS, the OpenAI API and Streamlit.',
        thumbnail: null,
        url: `${GITHUB}/Document_QA_RAG_Assistant`,
        date: '2026-04-10',
        views: 'RAG',
        duration: 'LangChain',
    },
    {
        id: 'proj-003',
        platform: 'youtube',
        title: 'Deepfake / Fake Audio Detection System',
        description: 'Android + AI/ML system for detecting deepfake or fake audio using audio feature extraction and model inference. Built with Kotlin, FastAPI, Librosa, MFCC and TensorFlow Lite.',
        thumbnail: null,
        url: `${GITHUB}/Deepfake_Fake_Audio_Detection_System`,
        date: '2026-03-05',
        views: 'Audio ML',
        duration: 'Android',
    },

    // ============ Automation Workflows (shown as 'blog' slot / desktop monitors) ============
    {
        id: 'auto-001',
        platform: 'blog',
        title: 'Client Order-to-Invoice Automation (n8n)',
        description: 'n8n workflow automation for e-commerce order processing, Airtable invoice records, and Twilio WhatsApp confirmation.',
        thumbnail: null,
        url: `${GITHUB}/Client_Order_to_Invoice_Automation_n8n`,
        date: '2026-02-20',
        readTime: 'n8n',
    },
    {
        id: 'auto-002',
        platform: 'blog',
        title: 'RSS News to Email Digest (n8n)',
        description: 'n8n automation workflow that collects RSS news articles, creates a clean HTML email digest, and sends scheduled updates through Gmail.',
        thumbnail: null,
        url: `${GITHUB}/RSS_News_to_Email_Digest_n8n`,
        date: '2026-02-05',
        readTime: 'n8n',
    },
    {
        id: 'auto-003',
        platform: 'blog',
        title: 'Gmail Inbox Logger (n8n)',
        description: 'n8n automation workflow that logs unread Gmail messages into Google Sheets every 15 minutes and marks them as read.',
        thumbnail: null,
        url: `${GITHUB}/Gmail_Inbox_Logger_n8n`,
        date: '2026-01-18',
        readTime: 'n8n',
    },
    {
        id: 'auto-004',
        platform: 'blog',
        title: 'Daily Weather Report via WhatsApp (n8n)',
        description: 'n8n automation that sends daily WhatsApp weather reports using the OpenWeatherMap API, Twilio WhatsApp, and Cron scheduling.',
        thumbnail: null,
        url: `${GITHUB}/Daily_Weather_Report_via_WhatsApp_n8n`,
        date: '2026-01-05',
        readTime: 'n8n',
    },

    // ============ Open Source / Profile (shown as 'tiktok' slot / phone monitors) ============
    {
        id: 'oss-001',
        platform: 'tiktok',
        title: 'Portfolio Website',
        description: 'Personal portfolio website showcasing AI/ML engineering and automation builder profile.',
        thumbnail: null,
        url: `${GITHUB}/Portfolio`,
        date: '2026-06-01',
        views: 'Web',
        likes: 'HTML/CSS/JS',
    },
    {
        id: 'oss-002',
        platform: 'tiktok',
        title: 'GitHub Profile README',
        description: 'GitHub profile repository used for profile README, personal introduction, skills, and projects.',
        thumbnail: null,
        url: `${GITHUB}/Saksham-dev-del`,
        date: '2026-05-15',
        views: 'Markdown',
        likes: 'Profile',
    },
    {
        id: 'oss-003',
        platform: 'tiktok',
        title: 'Windows Terminal (fork)',
        description: 'Forked repository from Microsoft Terminal, used as an open-source contribution repo rather than a personal project.',
        thumbnail: null,
        url: `${GITHUB}/terminal`,
        date: '2026-04-20',
        views: 'C++',
        likes: 'Open Source',
    },
];

const ytTextures = ['/textures/studio/tv_front.webp'];
const ytPaintedTextures = ['/textures/studio/tv_front_painted.webp'];
const blogTextures = ['/textures/studio/monitor_front.webp'];
const blogPaintedTextures = ['/textures/studio/monitor_front_painted.webp'];
const ttTextures = ['/textures/studio/phone_front.webp'];
const ttPaintedTextures = ['/textures/studio/phone_front_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

// Get latest content (for "On Air" indicator)
export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
