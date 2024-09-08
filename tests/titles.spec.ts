import { test, expect } from "@playwright/test";

interface TitleTest {
    path: string;
    expectedTitle: string;
}

// these tests assert that
// a. The web site can compile without any errors
// b. The web page can load without any errors
// c. The web page has the correct title
test.describe("Page titles", () => {
    const testMatrix: TitleTest[] = [
        { path: "/", expectedTitle: "Grathium Industries" },
    ];

    for (const testItem of testMatrix) {
        const testTitle = `${testItem.path} has the correct title`;
        test(testTitle, async ({ page }, workerInfo) => {
            const pageUrl = `${workerInfo.config.webServer.url}${testItem.path}`;
            await page.goto(pageUrl);

            const expectedTitle = testItem.expectedTitle;
            const realizedTitle = await page.title();

            expect(realizedTitle).toEqual(expectedTitle);
        });
    }
});
