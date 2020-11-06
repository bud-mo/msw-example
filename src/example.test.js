describe("SOAP Utils", () => {
  test(`Test`, async () => {
    const res = await fetch("/api/test", {
      method: "POST",
      body: JSON.stringify({}),
    });
    const obj = await res.json();
    expect(obj).toMatchInlineSnapshot(`
      Object {
        "test": "hello",
      }
    `);
  });
});
