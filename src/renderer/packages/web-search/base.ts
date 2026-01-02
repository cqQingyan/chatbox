import { FetchOptions, ofetch } from 'ofetch'
import type { SearchResult } from 'src/shared/types'

abstract class WebSearch {
  abstract search(query: string, signal?: AbortSignal): Promise<SearchResult>

  async fetch(url: string, options: FetchOptions) {
    return ofetch(url, options)
  }
}

export default WebSearch
