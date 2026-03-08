import activityIcon from '@/assets/images/side-bar-icons/activity.png'
import layerIcon from '@/assets/images/side-bar-icons/layer.png'
import layoutIcon from '@/assets/images/icons/layout.png'
import logoIcon from '@/assets/images/icons/logo.jpeg'
import aiIcon from '@/assets/images/icons/ai.png'
import layoutIconSideBar from '@/assets/images/side-bar-icons/layout.png'
import menuIcon from '@/assets/images/icons/menue.png'
import settingsIcon from '@/assets/images/side-bar-icons/settings.png'
import hrIcon from '@/assets/images/side-bar-icons/hr.jpeg'

import bellIcon from '@/assets/images/top-nav-icons/bell.png' // غيّريها للأيقونة الصح عندك
import slackIcon from '@/assets/images/top-nav-icons/slack.png'
import sliders from '@/assets/images/top-nav-icons/sliders.png'
import ai from '@/assets/images/top-nav-icons/ai.png'

export const sidebarItems = [
  { key: 'layout', icon: layoutIconSideBar },

  { key: 'layers', icon: layerIcon },
  { key: 'activity', icon: activityIcon },
  { key: 'hr', icon: hrIcon },
  { key: 'settings', icon: settingsIcon },
]

export const topTabs = [
  { key: 'finance', label: 'FINANCE' },
  { key: 'sales', label: 'SALES' },
  { key: 'hr', label: 'HR' },
  { key: 'mgmt', label: 'MGMT' },
]

export const topActions = [
  { key: 'bell', icon: bellIcon, badge: 1 },
  { key: 'slack', icon: slackIcon },
  { key: 'sliders', icon: sliders },
  { key: 'ai', icon: ai },
]

export const menue = menuIcon
export const layout = layoutIcon
export const logo = logoIcon
export const sparkle = aiIcon
