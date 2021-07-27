import { sum, changeFlowerName, isChanged } from '../../functions/mathUntils';


test("test change", async () => {
  const result = changeFlowerName("have changed");
  console.log(isChanged);
  expect(result).toBe("have changed")
})

test('test sum function', async () => {
    expect(sum(2,3)).toBe(5)
  });