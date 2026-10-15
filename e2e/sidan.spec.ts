import { expect, test } from '@playwright/test'

const sektioner = ['top', 'maf', 'undervisning', 'om', 'kontakt']

test('inget horisontellt scroll', async ({ page }) => {
  await page.goto('/')
  const [scrollWidth, innerWidth] = await page.evaluate(() => [
    document.documentElement.scrollWidth,
    window.innerWidth,
  ])
  expect(scrollWidth).toBeLessThanOrEqual(innerWidth)
})

for (const rörelse of ['no-preference', 'reduce'] as const) {
  test(`sektionerna syns och kan fotas (${rörelse})`, async ({
    page,
  }, testInfo) => {
    await page.emulateMedia({ reducedMotion: rörelse })
    await page.goto('/')
    // Navbaren är fast och skulle annars hamna mitt i sektionsbilderna
    await page.addStyleTag({
      content: 'header { position: absolute !important; }',
    })
    await page.waitForTimeout(2500)

    for (const id of sektioner) {
      const sektion = page.locator(`#${id}`)
      // Skrolla stegvis genom sektionen så att alla scroll-animationer utlöses
      const höjd = await sektion.evaluate(
        (el) => el.getBoundingClientRect().height,
      )
      await sektion.evaluate((el) => el.scrollIntoView())
      for (let y = 0; y < höjd; y += 300) {
        await page.mouse.wheel(0, 300)
        await page.waitForTimeout(150)
      }
      await sektion.evaluate((el) => el.scrollIntoView())
      await page.waitForTimeout(1500)
      await expect(sektion).toBeVisible()
      await sektion.screenshot({ path: testInfo.outputPath(`${id}.png`) })
    }
  })
}
