describe('Onboard Screen Process', () => {
  beforeAll(async () => {
    await device.launchApp();

    await waitFor(element(by.id('OnboardScreen')))
      .toBeVisible()
      .withTimeout(5000);
  });

  it('Display first slide', async () => {
    await expect(element(by.id('onboard-text-1'))).toBeVisible();

    await element(by.id('OnboardScreen')).takeScreenshot();
  });

  it('Display second slide', async () => {
    await element(by.id('next-button')).tap();

    await waitFor(element(by.id('onboard-text-2')))
      .toBeVisible()
      .withTimeout(5000);

    await expect(element(by.id('onboard-text-2'))).toBeVisible();

    await element(by.id('OnboardScreen')).takeScreenshot();
  });

  it('Navigate to home screen', async () => {
    await element(by.id('next-button')).tap();
    await element(by.id('next-button')).tap();

    await waitFor(element(by.id('HomeScreen')))
      .toBeVisible()
      .withTimeout(10000);
    await expect(element(by.id('HomeScreen'))).toBeVisible();
  });
});
