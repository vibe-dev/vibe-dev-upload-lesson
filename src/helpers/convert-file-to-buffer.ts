export async function convertFileToBuffer(file: File) {
  // Convert file to stream
  const stream = file.stream()

  // Convert stream to buffer
  const chunks = []

  for await (const chunk of stream as any) {
    chunks.push(chunk)
  }

  const buffer = Buffer.concat(chunks)

  return buffer
}
