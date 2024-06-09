import { test, expect } from "@playwright/test"
import { BOOKINGS_ROUTE, TRAVELS_ROUTE } from "~/constants"
import { capitalize } from "~/utils/capitalize"

const pages = {
  travels: {
    route: TRAVELS_ROUTE,
    title: /Travels/,
  },
  bookings: {
    route: BOOKINGS_ROUTE,
    title: /Bookings/,
  },
}

type Key = keyof typeof pages

for (const key in pages) {
  test(`${key as Key} page`, async ({ page }) => {
    await page.goto(pages[key as Key].route)

    // has page title
    await expect(page).toHaveTitle(pages[key as Key].title)

    // is navigation working
    await expect(page.locator("nav")).toBeVisible()

    // navigation has items
    const navigationLinksCount = await page.locator("nav > ul > li").count()
    expect(navigationLinksCount).toBeGreaterThan(0)

    // has h1 tag
    await expect(
      page.locator("h1").locator(`text=${capitalize(key as Key)}`),
    ).toBeVisible()

    // has button
    const button = page
      .locator("button")
      .locator(`text=Add a new ${key.slice(0, key.length - 1)}`)
    await expect(button).toBeVisible()
    await button.click()
  })
}
