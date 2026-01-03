import * as Sentry from '@sentry/react'
import { store as keypairStore } from './keypairs'
import { CHATBOX_BUILD_PLATFORM } from '../variables'
import NiceModal from '@ebay/nice-modal-react'

// 本次启动是否已经引导过用户评价 App Store
let hasOpenAppStoreReviewPage = false

export async function tryOpenAppStoreReviewPage() {
  // No-op for user request to remove app store rating
}

// 记录App Store评分弹窗点击
export async function recordAppStoreRatingClick() {
  await keypairStore.setItem('appStoreRatingClicked', true)
}

let tickCount = 0
export function tickAfterMessageGenerated() {
  // No-op
}
