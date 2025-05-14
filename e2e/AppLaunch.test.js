describe('App Launch Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have logo image', async () => {
    await waitFor(element(by.id('logo-image')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('logo-image'))).toBeVisible();
  });

  it('Navigate to Onboard screen', async () => {
    await waitFor(element(by.id('OnboardScreen')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('OnboardScreen'))).toBeVisible();
  });
});
