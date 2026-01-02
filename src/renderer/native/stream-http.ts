// Mobile stream http support removed
export type StartStreamOptions = any
export const StreamHttp = {
  addListener: async () => ({ remove: () => {} }),
  startStream: async () => ({ id: '' }),
  cancelStream: async () => {},
}

export function createNativeReadableStream(options: StartStreamOptions): ReadableStream<Uint8Array> {
  return new ReadableStream({
    start(controller) {
      controller.close()
    }
  })
}
