import { z } from 'zod'
import LLMScraper from 'llm-scraper-worker'
// import { createOpenAI } from '@ai-sdk/openai'
import { createWorkersAI } from 'workers-ai-provider'

export default defineCachedEventHandler(async () => {
  const { page } = await hubBrowser()
  // const openai = createOpenAI({
  //   apiKey: process.env.OPENAI_API_KEY,
  // })
  // const llm = openai.chat('gpt-4o')
  const workersAI = createWorkersAI({ binding: hubAI() })
  const llm = workersAI('@cf/meta/llama-3.1-70b-instruct')

  const scraper = new LLMScraper(llm)

  await page.goto('https://news.ycombinator.com')

  // Define schema to extract contents into
  const schema = z.object({
    top: z
      .array(
        z.object({
          title: z.string(),
          points: z.number(),
          by: z.string(),
          commentsURL: z.string(),
        }),
      )
      .length(5)
      .describe('Top 5 stories on Hacker News'),
  })

  const { data } = await scraper.run(page, schema, {
    format: 'html',
  })
  return {
    info: 'This API call is cached for 10 minutes to avoid abuse',
    ...data,
  }
}, {
  maxAge: 60 * 10,
})
