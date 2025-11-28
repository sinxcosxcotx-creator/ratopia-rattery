// src/utils/loadJSON.js
// 多语言内容加载工具：
// - EN_CONTENT_MAP：英文内容映射
// - ZH_CONTENT_MAP：中文内容映射
// - loadContentJSON(pageKey, lang) 根据语言返回对应 JSON，找不到则回退到英文

// 英文内容
import enHome from '@content/en/home.json';
import enPhilosophy from '@content/en/philosophy.json';
import enScienceIndex from '@content/en/science/index.json';
import enScienceGenetics from '@content/en/science/genetics.json';
import enScienceCare from '@content/en/science/care.json';
import enScienceHealth from '@content/en/science/health.json';
import enBloodlines from '@content/en/bloodlines.json';
import enAdoption from '@content/en/adoption.json';
import enContact from '@content/en/contact.json';

// 中文内容
import zhHome from '@content/zh/home.json';
import zhPhilosophy from '@content/zh/philosophy.json';
import zhScienceIndex from '@content/zh/science/index.json';
import zhScienceGenetics from '@content/zh/science/genetics.json';
import zhScienceCare from '@content/zh/science/care.json';
import zhScienceHealth from '@content/zh/science/health.json';
import zhBloodlines from '@content/zh/bloodlines.json';
import zhAdoption from '@content/zh/adoption.json';
import zhContact from '@content/zh/contact.json';

// 英文映射表
const EN_CONTENT_MAP = {
  'home': enHome,
  'philosophy': enPhilosophy,
  'science/index': enScienceIndex,
  'science/genetics': enScienceGenetics,
  'science/care': enScienceCare,
  'science/health': enScienceHealth,
  'bloodlines': enBloodlines,
  'adoption': enAdoption,
  'contact': enContact
};

// 中文映射表
const ZH_CONTENT_MAP = {
  'home': zhHome,
  'philosophy': zhPhilosophy,
  'science/index': zhScienceIndex,
  'science/genetics': zhScienceGenetics,
  'science/care': zhScienceCare,
  'science/health': zhScienceHealth,
  'bloodlines': zhBloodlines,
  'adoption': zhAdoption,
  'contact': zhContact
};

/**
 * 加载页面内容 JSON
 * @param {string} key - 页面 key，例如 'home'、'philosophy'、'science/index'
 * @param {string} lang - 当前语言，例如 'zh' 或 'en'
 * @returns {Promise<any>} - resolve 为 JSON 内容对象
 */
export const loadContentJSON = (key, lang = 'en') => {
  const normalizedLang = lang.startsWith('zh') ? 'zh' : 'en';

  const langMap = normalizedLang === 'zh' ? ZH_CONTENT_MAP : EN_CONTENT_MAP;

  // 先尝试当前语言
  let data = langMap[key];

  // 如果当前语言找不到，对应 key，又有英文版本，就回退到英文
  if (!data && normalizedLang === 'zh') {
    data = EN_CONTENT_MAP[key];
  }

  if (!data) {
    return Promise.reject(new Error(`No content JSON found for key: ${key}, lang: ${lang}`));
  }

  return Promise.resolve(data);
};
